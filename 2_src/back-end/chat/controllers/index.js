const Room = require('../schemas/room');
const Chat = require('../schemas/chat');
const { removeRoom: removeRoomService } = require('../services'); 


exports.renderMain = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    // console.log(rooms);
    res.render('main', { rooms, title: 'GOODBE 채팅방' });
  } catch (error) {
    console.error(error);
    next(error);
  }
};



exports.renderRoom = (req, res) => {
  res.render('room', { title: 'GOODBE 채팅방 생성' });
};

exports.createRoom = async (req, res, next) => {
  try {

    let imageUrl = null;
    
    // 이미지가 업로드되었을 경우
    if (req.file) {
      imageUrl = `/assets/${req.file.filename}`;
    }


    const newRoom = await Room.create({
      title: req.body.title,
      max: req.body.max,
      introduction: req.body.introduction,
      owner: req.session.color,
      img: imageUrl, // 이미지 URL 추가
    });

    const io = req.app.get('io');
    io.of('/room').emit('newRoom', newRoom);
    
      res.redirect(`/room/${newRoom._id}`);
    
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.enterRoom = async (req, res, next) => {
  try {
    const room = await Room.findOne({ _id: req.params.id });
    if (!room) {
      return res.redirect('/?error=존재하지 않는 방입니다.');
    }

    console.log(room)
   
    const io = req.app.get('io');
    // const { rooms } = io.of('/chat').adapter;
    // console.log(rooms, rooms.get(req.params.id), rooms.get(req.params.id));

    const connectedSockets = io.of('/chat').adapter.rooms[req.params.id] || {};
    const numConnected = Object.keys(connectedSockets).length;

    console.log(connectedSockets, numConnected);

    // if (room.max <= rooms.get(req.params.id)?.size) {
    //   return res.redirect('/?error=허용 인원이 초과하였습니다.');
    // }

    if (room.max <= numConnected) {
      return res.redirect('/?error=허용 인원이 초과하였습니다.');
    }

    const chats = await Chat.find({ room: room._id }).sort('createdAt');
    return res.render('chat', {
      room,
      title: room.title,
      chats,
      user: req.session.color,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

exports.removeRoom = async (req, res, next) => {
  try {
    await removeRoomService(req.params.id);
    res.send('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
};


exports.sendChat = async (req, res, next) => {
  try {
    const chat = await Chat.create({
      room: req.params.id,
      user: req.session.color,
      chat: req.body.chat,
    });
    req.app.get('io').of('/chat').to(req.params.id).emit('chat', chat);
    res.send('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.sendGif = async (req, res, next) => {
  try {
    const chat = await Chat.create({
      room: req.params.id,
      user: req.session.color,
      gif: req.file.filename,
    });
    req.app.get('io').of('/chat').to(req.params.id).emit('chat', chat);
    res.send('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.searchRooms = async (req, res) => {
  const searchTerm = req.query.q; // 검색어를 쿼리스트링으로 받아옵니다.
  console.log("검색어",searchTerm);
  try {
    const rooms = await Room.find({ title: searchTerm });
    res.send(JSON.stringify(rooms)); // 검색 결과를 JSON 문자열로 변환하여 응답합니다.
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

};
