const { model, Schema } = require('mongoose'); // step: 1

// step: 4
const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  phone:String,
  avatar: String, // image er jonno ata kew String hisebe nibo
 
  // user id er jonno amra special akta data type use korbo jeta thake Schema er modhhe types er moddhe and ter moddhe ObjectId hisebe
  user: {
      type:Schema.Types.ObjectId, // cretae user Id

      // reference bole dite hobe thats means j id ta pelam seta kon model er jonno kaj korboe seta bole dite hobe
      ref: 'User',
    },
});


// step: 2 create model name
const Profile = model('Profile', profileSchema);

// step: 3
module.exports = Profile ;

