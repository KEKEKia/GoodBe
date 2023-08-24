const express = require("express");
const SocketIO = require("socket.io");
const http = require("http");

const app = express();


/////////////////////////////////////////////////////

//view engine을 pug로 지정
app.set("view engine", "pug");
//express에 template이 어디에 있는지 지정
app.set("views", __dirname + "/views");
//유저가 /public으로 가면 어떤경로로 연결 될 지 설정
app.use("/public", express.static(__dirname + "/public"));
// 메인 화면 연결
app.get("/", (_, res) => res.render("home"));
// app.get("/", (_, res) => res.redirect("/"));

/////////////////////////////////////////////////////


//express로  http server만듦
const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

/////////////////////////////////////////////////////

wsServer.on("connection", (socket) => {
    socket.on("join_room", (roomName) => {
      socket.join(roomName);
      socket.to(roomName).emit("welcome");
    });

    socket.on("offer", (offer, roomName) => {
      socket.to(roomName).emit("offer", offer);
    });

    socket.on("answer", (answer, roomName) => {
      socket.to(roomName).emit("answer", answer);
    });

    socket.on("ice", (ice, roomName) => {
      socket.to(roomName).emit("ice", ice);
    });
  });


////////////////////////////////////////////////////////

//web socket 서버 연결
const handleListen = () => console.log(`Listening on http://localhost:8091`);
httpServer.listen(8091, handleListen);




