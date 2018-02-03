var getSearchOnClick = function() {
  var key = getApiKey();
  var searchText = document.querySelector('#article-type').value;
  var articleSearch = new ArticleSearch(searchText, key);
  articleSearch.getData();
}


var app = function() {
  var button = document.querySelector('#search-button');
  button.addEventListener('click', getSearchOnClick);
}

window.addEventListener('load', app)
