  var request = require("request");
  var cheerio = require("cheerio");
  var RSS = require("rss");
  var URL = "https://www.marathon.tokyo/en/news/";

  var feed = new RSS({
    title: "Tokyo Marathon RSS",
    description: "Return latest news from the Tokyo Marathon",
    feed_url: "http://example.com/rss.xml",
    site_url: URL,
    image_url:
      "https://www.marathon.tokyo/common/images/logo01.png",
    docs: "http://example.com/rss/docs.html",
    managingEditor: "conor@conoroneill.com",
    webMaster: "conor@conoroneill.com",
    copyright: "2020 Conor ONeill",
    language: "en",
    pubDate: "Jan 01, 2020 06:00:00 GMT",
    ttl: "60"
  });

  request(URL, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $(".textcolor_yellowgreen_02").each(function () {
        var href = $(this).attr("href");
        if (typeof href !== "undefined") {
          var link = "https://www.marathon.tokyo" + href;
          console.log(link);
          var title = $(this).text() || "No caption";
          console.log(title);
          var currentDate = new Date();
          var description = title;
          feed.item({
            title: title,
            description: description,
            url: link,
            author: "Tokyo Marathon",
            date: currentDate
          });
        }
      });
      var xml = feed.xml();
   //   console.log(xml);
    }
  });
