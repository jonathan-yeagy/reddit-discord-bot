const Discord = require("discord.js");
const fetch = require('node-fetch');
const config = require("./config.json");

const myHook = new Discord.WebhookClient( config.id, config.token );
let previous = '';
let previousLink = '';

const scrape = async () => {
    let url = 'https://www.reddit.com/r/' + config.subreddit + '/new/.json?limit=100';
    let response = await fetch(url);
    let commits = await response.json();

    let post = commits.data.children[0].data

    if (post.name !== previous && post.url !== previousLink) {
        previous = post.name;

        switch(post.domain){
            // Domain filtering to prevent content from untrustworthy domains
            case "example.com":
            //Hide self posts on a subreddit
            case "self." + config.subreddit:
                console.log('Junk Post');
                break;
            default:
                console.log(post.url);
                previousLink = post.url;
                await myHook.send(post.url);
        }
    }
};

// function to run scraper
const run = async () => {
    setInterval(async () => {
        await scrape();
    }, 10000);
};

// execute the scraper
run();
