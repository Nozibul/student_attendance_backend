// step:1
// server create korar jonno express k require korte hobe
const express = require('express');// express akta fn jeta akta obj return kore



// step: 5
//mongodb database er sathe communication er jonno ba model create korar jonno easiest tool hoss mongoose
// and amra akhon mongose er help nia model create korbo
// now model name e amara kata folder create korbo ter moddhe amader sob model gulo thakbe 
//our first model name user.js sekhane amra baki kaj korbo



// step:2 
// now ai project ta amra akta application er vitore rakte pari express() fn ta call korar maddhome,
const app = express() ;// akhan theke jeta return hosse seta kothao rakhte hobe,
//now akta backend application er sob kisu app name ai variable er moddhe ase



// step; 4
// now akta root route lagbe bec browser theke atka request pathasse and sejonno ata k get request bole,
// and sob kisu jehetu app er kase ase so seta k nia kaj korbo 
// kon jaigai request ta phatabo seta forword slash dia bole dite hobe
// now app.get er kase kono request asle se response hisebe akta callback fn k call korbe
// and ter age app.get call korar somoy se 3 ta jinis dibe request, response next , now apatoto response ta amader lagbe only
app.get("*", (_, res)=>{
    // ai route e hit korle ki dhekabe seta bloe dite hobe
    // res.send(`
    // <h1>Hello World</h1>
    // Thank You For  Request`)

    // jodi amra kono obj resposne hisebe pathate chai tahole respose hisebe json obj k pathabo
    const obj = {
        name: ' Islam',
        age: 26
    };
    res.json(obj);//browser output: {"name":" Islam","age":26}
});



// step:3
// now amra application ta baire theke request asle seta jeno sunte pai sejonno:
// listen korbo but ker kotha sunbo seta bole dite hobe port number dia jeta sara onno karo kotha sunte pabo na. and 5000 port theke joto request asbe sob se handle korbe.
// and host name na dileo cholbe , localhost pea jabe auto.

// app.listen(port, hostName, callback) 
app.listen(5000, ()=>{
    //jokhon kew dakhbe thokon ami listen kora suru koresi seta thake chaile boledite pari avabe: tmi amake dakhteso seta ami sunte passi
    console.log(`I am listening on port ${5000}`);
});