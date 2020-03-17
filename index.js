const twit = require('twit');
const t = new Twit({
  consumer_key: BrXRHoeFfnJEfvGnzkoDbXF6d,
  consumer_secret: JkIvMa2G8mvM2hRJs3fhSasj81XtPbIU7iRGLJAiaD1mLWow3u,
  access_token: 57260119-Vv5NdlaSmPaeFeDRHpxF860rH04NQoYKAaEV4azrk,
  access_token_secret: Il7fth0F8K5Tcx4193ro3qNlLUvCRJYtAUi3glAT9XsDM
});

const stream = t.stream('statuses/filter', {track: '#Dirt'});

function responseCallback (err, data, response) {
    console.log(err);
   }
   
   // event handler
   stream.on('tweet', tweet => {
      // retweet
     t.post('statuses/retweet/:id', {id: tweet.id_str}, responseCallback);
     // like
     t.post('favorites/create', {id: tweet.id_str}, responseCallback);
   });