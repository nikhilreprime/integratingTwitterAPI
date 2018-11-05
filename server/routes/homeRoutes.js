const utility = require('./../services/utility')

let feedsList = [
  {
    "id": 234,
    "feed_type": "simple",
    "title": "This is title of feed",
    "description": " Description of feed",
    "entities": {
      "url": "https://www.crewkarma.com",
    }
  },
  {
    "id": 235,
    "feed_type": "image",
    "title": "This is title of feed",
    "description": " Description of feed",
    "entities": {
      "url": "www.twitter.com",
      "images": [
        "https://pbs.twimg.com/media/C_Udn2UUQAADZIS.jpg",
        "https://pbs.twimg.com/media/C_UdnvPVYAAZbEs.jpg",
        "https://pbs.twimg.com/media/C_UdnvPUwAE3Dnn.jpg",
        "https://pbs.twimg.com/media/C_Udn4nUMAAgcIa.jpg"
      ]
    }
  },
  {
    "id": 236,
    "feed_type": "video",
    "title": "This is title of feed",
    "description": " Description of feed",
    "entities": {
      "url": "www.google.com",
      "media_url": "https://www.youtube.com/watch?v=MejbOFk7H6c"
    }
  },
  {
    "id": 237,
    "feed_type": "video",
    "title": "This is title of feed",
    "description": " Description of feed",
    "entities": {
      "url": "www.google.com",
      "media_url": "https://www.w3schools.com/html/mov_bbb.mp4"
    }
  },
  {
    "id": 238,
    "feed_type": "simple",
    "title": "This is title of feed",
    "description": " Description of feed",
    "entities": {
      "url": "https://www.crewkarma.com",
    }
  },
  {
    "id": 239,
    "feed_type": "simple",
    "title": "This is title of feed",
    "description": " Description of feed",
    "entities": {
      "url": "https://www.crewkarma.com",
    }
  },
  {
    "id": 235,
    "feed_type": "image",
    "title": "This is title of feed",
    "description": " Description of feed",
    "entities": {
      "url": "www.twitter.com",
      "images": [
        "https://pbs.twimg.com/media/C_Udn2UUQAADZIS.jpg",
        "https://pbs.twimg.com/media/C_UdnvPVYAAZbEs.jpg"
      ]
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
