const { model, Schema } = require('mongoose'); // step: 1


// step: 4
const studentAttendanceSchema = new Schema({
  createAt: Date,
 
// ai user name schema ta User name er model ta pointing korbe jokhon akhane asbe 
  // user id er jonno amra special akta data type use korbo jeta thake Schema er modhhe types er moddhe and ter moddhe ObjectId hisebe
  user: {
    type: Schema.Types.ObjectId, // cretae user Id, // ObjectId datatype ta localy available na tai avabe likhte holo

    // reference bole dite hobe thats means j id ta pelam seta kon model er jonno kaj korboe seta bole dite hobe thats means relationship create korbe
    ref: 'User',
  },

  
  // ai adminAttendance er kase asle AdminAttendance model ta pointing korbe 
  adminAttendance:{
    type:Schema.Types.ObjectId, // ObjectId datatype ta localy available na tai avabe likhte holo

    // reference bole dite hobe thats means j id ta pelam seta kon model er jonno kaj korboe seta bole dite hobe
    // so ai id ta kaj korbe AdminAttendance model er jonnpo
    ref: 'AdminAttendance'
  }
});


// step: 2 create model name
const StudentAttendance = model('StudentAttendance', studentAttendanceSchema);

// step: 3
module.exports = StudentAttendance ;