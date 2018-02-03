// var makeRequest = function(url, callbackFunction) {
//   var newRequest = new XMLHttpRequest();
//   newRequest.open('GET', url);
//   newRequest.addEventListener('load', callbackFunction);
//   newRequest.send();
// }
//
// var requestComplete = function() {
//   if (this.status !== 200) return;
//   var string = JSON.parse(this.responseText)
//   var newsSearch = string.articles;
//   console.log(newsSearch);
//   var container = document.querySelector('#articles-container');
//   showStories(newsSearch, container);
//   showImages(newsSearch);
// }

// var showStories = function(search, container) {
//   var number = 0;
//   search.forEach(function(story) {
//     var article = document.createElement('article');
//     article.innerHTML = story.title;
//     article.id = number;
//     container.appendChild(article);
//     number ++;
//   })
// }
//
// var showImages = function(search){
//   var number = 0;
//   search.forEach(function(story) {
//     var article = document.getElementById(number);
//     console.log(article);
//     img = document.createElement('img');
//     img.src = story.urlToImage;
//     article.appendChild(img);
//     number ++;
//   })
// }

var app = function() {
  var key = getApiKey();
  var button = document.querySelector('#search-button');
  button.addEventListener('click', function() {
    var searchText = document.querySelector('#article-type').value;
    var articleSearch = new ArticleSearch(searchText, key);
    articleSearch.getData();
  })
}

window.addEventListener('load', app)
