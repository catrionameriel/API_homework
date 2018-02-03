var ArticleSearch = function(search, key) {
  this.url = 'https://newsapi.org/v2/everything?' +
              'q=' + search + '&' +
              'from=2018-02-03&' +
              'sortBy=popularity&' +
              'apiKey=' + key;
  this.data = [];
}

ArticleSearch.prototype.getData = function () {
  var newRequest = new XMLHttpRequest();
  newRequest.open('GET', this.url);
  newRequest.addEventListener('load', function() {
    if (newRequest.status !== 200) return;
    var string = JSON.parse(newRequest.responseText)
    var newsSearch = string.articles;
    this.data.push(newsSearch);
  }.bind(this))
  newRequest.send();
};
