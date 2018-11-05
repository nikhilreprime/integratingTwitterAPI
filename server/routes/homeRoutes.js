const utility = require('./../services/utility')

let feedsList = [
	{
		"id": 234,
		"feed_type": "simple",
		"title": "This is title of feed",
		"description" : " Description of feed",
		"entities": {
			"url":"https://www.crewkarma.com",
		},
		"stats":{
			"likes" : 100,
			"comments" : 50,
			"shares" : 330
		}
	},
	{
		"id": 235,
		"feed_type": "image",
		"title": "This is title of feed",
		"description" : " Description of feed",
		"entities": {
			"url" : "www.twitter.com",
			"images":[
				"https://pbs.twimg.com/media/C_Udn2UUQAADZIS.jpg",
				"https://pbs.twimg.com/media/C_UdnvPVYAAZbEs.jpg",
				"https://pbs.twimg.com/media/C_UdnvPUwAE3Dnn.jpg",
				"https://pbs.twimg.com/media/C_Udn4nUMAAgcIa.jpg"
			]
		},
		"stats":{
			"likes" : 0,
			"comments" : 50,
			"shares" : 30
		}
	},
	{
		"id": 236,
		"feed_type": "video",
		"title": "This is title of feed",
		"description" : " Description of feed",
		"entities": {
			"url":"www.google.com",
			"media_url":"https://www.youtube.com/watch?v=MejbOFk7H6c"
		},
		"stats":{
			"likes" : 104,
			"comments" : 50,
			"shares" : 400
		}
	},
	{
		"id": 237,
		"feed_type": "video",
		"title": "This is title of feed",
		"description" : " Description of feed",
		"entities": {
			"url":"www.google.com",
			"media_url":"https://www.w3schools.com/html/mov_bbb.mp4"
		},
		"stats":{
			"likes" : 200,
			"comments" : 100,
			"shares" : 330
		}
	},
	{
		"id": 238,
		"feed_type": "simple",
		"title": "This is title of feed",
		"description" : " Description of feed",
		"entities": {
			"url":"https://www.crewkarma.com",
		},
		"stats":{
			"likes" : 100,
			"comments" : 50,
			"shares" : 330
		}			
	},
	{
		"id": 239,
		"feed_type": "simple",
		"title": "This is title of feed",
		"description" : " Description of feed",
		"entities": {
			"url":"https://www.crewkarma.com",
		},
		"stats":{
			"likes" : 110,
			"comments" : 150,
			"shares" : 430
		}			
	},
	{
		"id": 235,
		"feed_type": "image",
		"title": "This is title of feed",
		"description" : " Description of feed",
		"entities": {
			"url" : "www.twitter.com",
			"images":[
				"https://pbs.twimg.com/media/C_Udn2UUQAADZIS.jpg",
				"https://pbs.twimg.com/media/C_UdnvPVYAAZbEs.jpg"
			]
		},
		"stats":{
			"likes" : 10,
			"comments" : 50,
			"shares" : 30
		}
	}
]

module.exports = app => {
  // Route handler get , put, post, patch, delete
  app.get(
    '/getfeedslist', utility.loggedIn,
    (req, res) => {
      console.log("Home page")
      res.send({
        auth: {
          user_login_done: true
        },
        feeds_list: feedsList
      });
    }
  );
};
