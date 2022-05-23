//  our first model and ai model gulo app.js file er step:5 er kaj 
// and model er jonno step:1 holo mongoose require korte hobe
// mongoose use kore model create korte hole amder k at first schema create korte hoi.
// schema that means atka shape ba dhoron.
// now at first mongoose require kore seta kothow rakte hobe or destructuring korte hobe

const {model, Schema} = require('mongoose'); //  step: 1 er kaj ta korlam
// ber ber mongoose likhtehosse niche so amra destructuring kore nibo


// step: 4 
// now amra schema create korbo
const userSchema = new Schema({
    // obj akare amake bole dite shape ta kmn hobe,
    // j field gulo nia kaj korbo ter datatype bole dite hobe
    name:Schema.Types.String, // avabeo type chaile bole dite pari
    email:String,
    password:String,
    roles:[String], // role amra array use korbo and er moddhe array er type bole dite hobe
    accountStatus: String
});


// step:2 
// mongoose use kore schema banate hobe and schema theke model create korte hobe and model ta k use korete kono variable e store korte hobe
// so amra chaile agei model ta banate pari and model er name ta file er name e mil rekhe dia valo jate vul na hoi
const User = model('User', userSchema);// first parameter e model name and 2nd parameter e schema name ta dite hobe

// step: 3 and done 1st model and same kaj gulo baki model hulo te korbo
module.exports = User;