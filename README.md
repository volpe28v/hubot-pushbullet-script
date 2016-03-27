# hubot-pushbullet-script

hubot で受けた全ての発言を指定した pushbullet クライアントへ通知するスクリプト

* hubot の scripts 配下に pushbullet.js を配置
* $ npm install pushbullet
* 以下の環境変数を追加して hubot を起動
```
HUBOT_PUSHBULLET_API_KEY="xxx"
HUBOT_PUSHBULLET_EMAIL="xxx@gmail.com"
HUBOT_PUSHBULLET_TITLE="title"
```
