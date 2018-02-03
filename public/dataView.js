



DataView.prototype.showStories = function () {
  var number = 0;
  var container = document.querySelector('#articles-container');
  this.data.forEach(function(story) {
    var article = document.createElement('article');
    article.innerHTML = story.title;
    article.id = number;
    container.appendChild(article);
    number ++;
  })
};

DataView.prototype.showImages = function () {
  var number = 0;
  this.data.forEach(function(story) {
    var article = document.getElementById(number);
    img = document.createElement('img');
    img.src = story.urlToImage;
    article.appendChild(img);
    number ++;
  })
};
