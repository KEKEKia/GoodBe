const socket = io(); //웹 소켓 연결


const myFace = document.getElementById("myFace");   //나의 얼굴을 띄울 html 요소 가져오기 
const muteBtn = document.getElementById("mute");    //audio on/off 버튼 html 요소 가져오기
const cameraBtn = document.getElementById("camera");//카메라 on/off버튼  html 요소 가져오기
const camerasSelect = document.getElementById("cameras");//카메라 디바이스 선택 html 요소 가져오기
const call = document.getElementById("call");       //입장하기 버튼 html 요소 가져오기
const peerFace = document.getElementById("peerFace"); //상대방의 얼굴을 띄울 html 요소 가져오기
const exit=document.getElementById("exit");         //회의 종료 버튼


let myStream;                  //미디어 스트림 가져오기
let muted = false;             //음소거 여부를 저장할 변수
let cameraOff = false;         //camera on/off상태를 저장할 변수
let roomName;                  //화상채팅 방 번호 설정
let myPeerConnection;
let myDataChannel;

function exitConsult() {
    // localhost:3000/ 메인으로 이동
    window.location.href = "http://localhost:3000/";
}
exit.addEventListener("click", exitConsult);


//사용가능한 디바이스 추가
async function getCameras() {
    try {
        //사용가능한 디바이스 조회
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter((device) => device.kind === "videoinput");    //영상 input이 가능한 디바이스만 필터링
        const currentCamera = myStream.getVideoTracks()[0];                          //기본캠은 가장 첫번째 카메라로 설정

        //view에 추가
        cameras.forEach((camera) => {
            const option = document.createElement("option"); //option tag 생성
            option.value = camera.deviceId;
            option.innerText = camera.label;
            if (currentCamera.label === camera.label) {     //현재 사용중인 디바이스를 선택됨으로 설정
                option.selected = true;
            }
            camerasSelect.appendChild(option);              //view에 추가
        });
    } catch (e) {
        console.log(e);
    }
}

async function getMedia(deviceId) {

    //카메라 기본 설정
    const initialConstrains = {
        audio: true,                         // 오디오 속성을 얻기위해 true로 지정
        video: {
            facingMode: "user",         //(모바일) 전면 카메라 사용
            width: 700,
            height: 600

        },
    };

    //디바이스 변경 시 적용될 설정
    const cameraConstraints = {
        audio: true,                                //오디오 ON,
        video: {
            deviceId: {                         //선택한 카메라만 영상 송출하도록 설정
                exact: deviceId,
            },
            width: 700,
            height: 600
        },
    };



    //사용자 영상 stream 가져오기
    try {
        myStream = await navigator.mediaDevices.getUserMedia(   // navigator.getUserMedia : 유저의 유저미디어 string을 보내줌
            deviceId ? cameraConstraints : initialConstrains    // 디바이스 Id가 존재한다면 기본 설정 유지, 아니라면 
        );

        myFace.srcObject = myStream;      //myface요소의 srcObject속성에 받아온 stream정보 저장

        //설정된 카메라 디바이스 아이디가 없다면 카메라 설정
        if (!deviceId) {
            await getCameras();
        }

    } catch (e) {
        console.log(e);
    }


};


// Audio 관리
function handleMuteClick() {


    myStream            //송출되는 정보에서 오디오 track 조회 -> 상태 변경(on->off, off->on)
        .getAudioTracks()
        .forEach((track) => (track.enabled = !track.enabled));

    if (!muted) {       //음소거 X
        muteBtn.innerText = "음소거 해제"; //버튼 텍스트를 "음소거 해제"로 변경
        muted = true;                     //음소거 상태를 true로 설정

    } else {            //음소거 O 
        muteBtn.innerText = "음소거";      //버튼 텍스트를 "음소거 하기"로 변경
        muted = false;                    //음소거 상태를 false로 설정
    }
}

// 카메라 관리
function handleCameraClick() {


    myStream            //송출되는 정보에서 비디오 track 조회 -> 상태 변경(on->off, off->on)
        .getVideoTracks()
        .forEach((track) => (track.enabled = !track.enabled));
    if (cameraOff) {    //카메라 on
        cameraBtn.innerText = "카메라 끄기";    //버튼 텍스트를 "카메라 끄기"로 변경
        cameraOff = false;                     //음소거 상태를 false로 설정
    } else {            //카메라 off
        cameraBtn.innerText = "카메라 키기";    //버튼 텍스트를 "카메라 키기"로 변경
        cameraOff = true;                      //음소거 상태를 false로 설정
    }
}

//카메라 디바이스 변경
async function handleCameraChange() {

    //현재 설정된 카메라 설정 정보로 사용자 캠 영상을 가져옴
    await getMedia(camerasSelect.value);


    // Peer Connection이 설정되어 있는 경우에만 실행
    if (myPeerConnection) {
        const videoTrack = myStream.getVideoTracks()[0];    // 현재 스트림에서 첫 번째 비디오 트랙을 가져옴


        const videoSender = myPeerConnection                // Peer Connection의 비디오 Sender 중에서 비디오 트랙과 일치하는 Sender를 찾음
            .getSenders()
            .find((sender) => sender.track.kind === "video");


        videoSender.replaceTrack(videoTrack);               // 비디오 Sender의 트랙을 새로운 비디오 트랙으로 교체하여 카메라 변경 적용
    }
}

muteBtn.addEventListener("click", handleMuteClick);         //audio 버튼 클릭 이벤트 추가
cameraBtn.addEventListener("click", handleCameraClick);     //camera 버튼 클릭 이벤트 추가
camerasSelect.addEventListener("input", handleCameraChange);//카메라 디바이스 설정 버튼 클릭 이벤트 추가

// 영상 상담방 입장 전 문구
const welcome = document.getElementById("welcome");
const header = document.querySelector("header");

const horizon = document.getElementById("horizon");
const welcomeForm = welcome.querySelector("form");
const largeVideoDiv = document.getElementById("myStream");



async function firstCam() {
    try {
        await getMedia(); // 사용자의 영상을 화면에 표시
    } catch (error) {
        console.error('사용자 영상을 가져오는 동안 오류가 발생했습니다:', error);
    }
}

// 웹 페이지 로딩이 완료되면 실행될 코드
document.addEventListener('DOMContentLoaded', () => {
    firstCam(); // 사용자의 영상을 화면에 표시
});




//화상방 이동
async function initCall() {
    console.log(welcome);
    //환영문구 삭제
    welcome.style.display = 'none';
    header.hidden = true;

    //상대방 카메라 자리 배치, 본인 카메라 이동
    peerFace.style.display = 'flex';

    largeVideoDiv.style.justifyContent = 'center';
    call.hidden = false;

    console.log("hidden saved");

    //사용자 영상 불러오기
    // await getMedia();/////////////////////////////////////////////////////////////////////////////


    //카메라 기본 설정
    const Constrains = {
        audio: true,                         // 오디오 속성을 얻기위해 true로 지정
        video: {
            facingMode: "user",             //(모바일) 전면 카메라 사용
            width: 400,
            height: 300
        },
    };

    
    exit.style.display='flex';


    //사용자 영상 stream 가져오기
    try {
        myStream = await navigator.mediaDevices.getUserMedia(   // navigator.getUserMedia : 유저의 유저미디어 string을 보내줌
            Constrains
        );
        myFace.srcObject = myStream;      //myface요소의 srcObject속성에 받아온 stream정보 저장

        //설정된 카메라 디바이스 아이디가 없다면 카메라 설정
        await getCameras();


    } catch (e) {
        console.log(e);
    }
    ///////////////////////////////////////////////////////////////////////////////////////



    //peer connection 연결
    makeConnection();
}

async function handleWelcomeSubmit(event) {
    console.log("enter the room");
    event.preventDefault();
    const input = welcomeForm.querySelector("input");
    await initCall();
    socket.emit("join_room", input.value);
    roomName = input.value;
    input.value = "";
}

welcomeForm.addEventListener("submit", handleWelcomeSubmit);    //제출버튼으로 화상방 입장하기 이벤트 추가

// Socket Code
socket.on("welcome", async () => {
    myDataChannel = myPeerConnection.createDataChannel("chat");
    myDataChannel.addEventListener("message", (event) => console.log(event.data));
    console.log("made data channel");
    const offer = await myPeerConnection.createOffer();
    myPeerConnection.setLocalDescription(offer);
    console.log("sent the offer");
    socket.emit("offer", offer, roomName);
});

socket.on("offer", async (offer) => {
    myPeerConnection.addEventListener("datachannel", (event) => {
        myDataChannel = event.channel;
        myDataChannel.addEventListener("message", (event) =>
            console.log(event.data)
        );
    });
    console.log("received the offer");
    myPeerConnection.setRemoteDescription(offer);
    const answer = await myPeerConnection.createAnswer();
    myPeerConnection.setLocalDescription(answer);
    socket.emit("answer", answer, roomName);
    console.log("sent the answer");
});

socket.on("answer", (answer) => {
    console.log("received the answer");
    myPeerConnection.setRemoteDescription(answer);
});

socket.on("ice", (ice) => {
    console.log("received candidate");
    myPeerConnection.addIceCandidate(ice);
});

// RTC Code

function makeConnection() {
    myPeerConnection = new RTCPeerConnection({
        iceServers: [
            {
                urls: [
                    "stun:stun.l.google.com:19302",
                    "stun:stun1.l.google.com:19302",
                    "stun:stun2.l.google.com:19302",
                    "stun:stun3.l.google.com:19302",
                    "stun:stun4.l.google.com:19302",
                ],
            },
        ],
    });
    myPeerConnection.addEventListener("icecandidate", handleIce);
    myPeerConnection.addEventListener("addstream", handleAddStream);
    myStream
        .getTracks()
        .forEach((track) => myPeerConnection.addTrack(track, myStream));
}

function handleIce(data) {
    console.log("sent candidate");
    socket.emit("ice", data.candidate, roomName);
}


function handleAddStream(data) {
    const peerFace = document.getElementById("peerFace");
    peerFace.srcObject = data.stream;

    // 원하는 크기로 설정
    peerFace.width = 1200;
    peerFace.height = 600;

    call.style.display = 'flex';
    call.style.flexDirection = 'column';

    // myStream 요소 위치 설정
    const myVideoManage = document.getElementById("myVideoManage");
    myVideoManage.style.position = "relative";
    myVideoManage.style.bottom = "200px";

    myFace.style.position = "relative";
    myFace.style.right = "-270px";    
    myFace.style.borderRadius="10px";             // 오른쪽으로 10px 이동

    // myStream 요소 크기 설정
    myFace.width = 300;
    myFace.height = 200;


    peerFace.style.alignSelf = "center";
    peerFace.style.borderRadius="10px";  
    document.body.style.backgroundColor = "black";

}

