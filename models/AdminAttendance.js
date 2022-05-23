const { model, Schema } = require('mongoose'); // step: 1

// step: 4
const adminAttendanceSchema = new Schema({
  timeLimit: Number,
  status: String,
  createAt: Date,
});


// step: 2 create model name
const AdminAttendance = model('AdminAttendance', adminAttendanceSchema);

// step: 3
module.exports = AdminAttendance ;