var google = require('google');
var scrapper = require('scrapper');
var async = require('async');
google.resultsPerPage = 5;
var nextCounter = 0;
var keywords = ['fiverr', 'node', 'engineering poem'];

async.each(keywords, function(item){
  google(item, function(err, next, links){
    console.log('--------------------------');
    console.log('Search for word: '+item);
    console.log('--------------------------');
    if (err) console.error(err);

    for (var i = 0; i < links.length; ++i) {
      console.log(links[i].title + ' :: ' + links[i].link); //link.href is an alias for link.link
      console.log('DESCRIPTION: '+links[i].description + "\n");
      console.log("\n");
    }

    if (nextCounter < 2) {
      nextCounter += 1;
      if (next) next();
    }

  });
});