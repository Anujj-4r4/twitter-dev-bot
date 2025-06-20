require("dotenv").config();
const { TwitterApi } = require("twitter-api-v2");

// Twitter client setup
const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

// Developer-style tweets
const posts = [
  "Writing code is easy. Thinking about how to write good code is the hard part. 💻 #DevThoughts",
  "Every dev hits a wall. Real ones break through it. 🚀 #CodeLife",
  "Today’s tiny script might become tomorrow’s big breakthrough. Keep shipping. ⚙️ #BuildInPublic",
  "Don’t just copy-paste. Understand. Learn. Grow. 🧠 #WebDev",
  "One step at a time. One PR at a time. Keep moving forward. 👣 #100DaysOfCode",
];

// Pick random post
const tweet = posts[Math.floor(Math.random() * posts.length)];

// Post it
(async () => {
  try {
    await client.v2.tweet(tweet);
    console.log("✅ Tweet posted:", tweet);
  } catch (err) {
    console.error("❌ Twitter post failed:", err);
  }
})();