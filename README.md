# Tokyo Marathon RSS
This Serverless function provides an RSS feed for the news page on the Tokyo Marathon site.

## Installing and using
* Configure your AWS account
* Install Node.js 12+

```bash
git clone git@github.com:conoro/tokyo-marathon-rss.git
cd tokyo-marathon-rss
npm install -g serverless
npm install
serverless deploy
```
Then you access the RSS feed like so:

* https://url.of.serverless.function/dev/rss


LICENSE Apache-2.0

Copyright Conor O'Neill 2020, conor@conoroneill.com
