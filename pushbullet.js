var PushBullet = require('pushbullet');

var Token = process.env.HUBOT_PUSHBULLET_API_KEY;
var Email = process.env.HUBOT_PUSHBULLET_EMAIL;
var Title = process.env.HUBOT_PUSHBULLET_TITLE;

var pusher = new PushBullet(Token);

module.exports = function(robot){
  robot.hear('', function(msg){
    var user = msg.message['user']['name'];
    var message = msg.message['text'];
    pusher.note(Email, Title, user + ": " + message, function(error, response) {
    });
  });
};
