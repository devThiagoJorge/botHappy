const puppeteer = require('puppeteer');
const BASE_URL = "https://twitter.com/login";
const twitter = {
    browser: null,
    page: null,

    initialize: async () =>{
        twitter.browser = await puppeteer.launch({
            headless: false
        }); 
        twitter.page = await twitter.browser.newPage(); 
    },

    login: async(username,password) => {
        await twitter.page.goto(BASE_URL, { waitUntil: 'networkidle2'}); 
        await twitter.page.waitFor(250); 

        await twitter.page.type('input[type="text"]', username, {delay: 100});
        await twitter.page.type('input[type="password"]', password, {delay: 100});
       
        let loginButton = await twitter.page.$x('//span[contains(text(), "Entrar")]')
        await loginButton[1].click();
        await twitter.page.waitForNavigation({ waitUntil: 'networkidle2'});
    },

    tweet: async(message) => {

        await twitter.page.waitFor(250); 
        let clickInDiv = await twitter.page.$x('//div[contains(text(), "What")]')
        await clickInDiv[0].click();

        await twitter.page.type('span', message, {delay:100});


        let clickInButtonTweet = await twitter.page.$x('//span[contains(text(), "Tweet")]');
        await clickInButtonTweet[1].click();
    },

}

module.exports = twitter;