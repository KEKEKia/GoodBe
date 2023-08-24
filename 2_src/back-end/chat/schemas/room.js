const mongoose = require('mongoose');

const { Schema } = mongoose;
const roomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  max: {
    type: Number,
    required: true,
    default: 10,
    min: 1,
  },
  owner: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  img:{
    type:String,
    default: "https://goodpointagency.com/wp-content/uploads/2020/01/Logo_Mobile@2x.png",
  },
  introduction:{
    type: String,
    default: "국비교육에 대한 이야기를 자유롭게 나누는 방", 
  }

});

module.exports = mongoose.model('Room', roomSchema);