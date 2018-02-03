var DataView = function(container) {
  this.container = container;
}

// DataView.prototype.showStories = function (data) {
//   var number = 0;
//   data.forEach(function(story) {
//     var article = document.createElement('article');
//     article.innerHTML = story.title;
//     article.id = number;
//     this.container.appendChild(article);
//     number ++;
//   })
// };
//
// DataView.prototype.showImages = function (data) {
//   var number = 0;
//   data.forEach(function(story) {
//     var article = document.getElementById(number);
//     img = document.createElement('img');
//     img.src = story.urlToImage;
//     article.appendChild(img);
//     number ++;
//   })
// };
