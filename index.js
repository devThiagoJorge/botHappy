const twitter = require('./twitter');

(async () => {
    await twitter.initialize();
    await twitter.login('',''); 
    await twitter.tweet("Hi, i'm a bot happing!");
    debugger;
})()