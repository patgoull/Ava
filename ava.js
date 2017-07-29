var Discord = require("discord.js");
var http = require('http');
var parser = require('rss-parser');

var client = new Discord.Client();

client.login("MzM5OTE2NTIxNzg4ODAxMDM0.DFrBSA.YwZbvml9upuK6OK-i-eSgkj7iFA");

client.on("ready", () => {
  console.log("Ready for action");
});

client.on('message', function(message) {
        // Don't forget to log the message!   
});

/*client.on('message', (message) => {
	parser.parseURL('http://feeds.arstechnica.com/arstechnica/gaming', function(err, parsed) {  
	  parsed.feed.entries.forEach(function(entry) {    
			message.channel.send(entry.link);
	  });
	});	
});*/

