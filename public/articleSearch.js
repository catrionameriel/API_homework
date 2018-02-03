var ArticleSearch = function(search, key) {
  this.url = 'https://newsapi.org/v2/top-headlines?' +
              'q=' + search + '&' +
              'from=2018-02-03&' +
              'sortBy=popularity&' +
              'apiKey=' + key;
}

ArticleSearch.prototype.getData = function () {
  var newRequest = new XMLHttpRequest();
  newRequest.open('GET', this.url);
  newRequest.addEventListener('load', function() {
    if (newRequest.status !== 200) return;
    var string = JSON.parse(newRequest.responseText)
    var newsSearch = string.articles;
    this.data = newsSearch;
    this.showStories(newsSearch);
    this.showImages(newsSearch);
    this.showLink(newsSearch);
  }.bind(this))
  newRequest.send();
};


ArticleSearch.prototype.showStories = function (data) {
  var number = 0;
  var container = document.querySelector('#articles-container');
  container.innerHTML = " ";
  data.forEach(function(story) {
    var article = document.createElement('article');
    var title = document.createElement('h2');
    var p = document.createElement('p');
    title.innerText = story.title;
    p.innerText = story.source.name;
    article.id = number;
    article.appendChild(title);
    article.appendChild(p);
    container.appendChild(article);
    number ++;
  })
};

ArticleSearch.prototype.showImages = function (data) {
  var number = 0;
  data.forEach(function(story) {
    var article = document.getElementById(number);
    img = document.createElement('img');
    img.src = story.urlToImage;
    article.appendChild(img);
    number ++;
  })
};

ArticleSearch.prototype.showLink = function (data) {
  var number = 0;
  data.forEach(function(story) {
    var article = document.getElementById(number);
    var link = document.createElement('a');
    link.href = story.url
    link.target = "_blank"
    link.title = story.title;
    link.innerText = "Read more";
    article.appendChild(link);
    number ++;
  })
};
