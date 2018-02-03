var makeRequest = function(url, callbackFunction) {
  var newRequest = new XMLHttpRequest();
  newRequest.open('GET', url);
  newRequest.addEventListener('load', callbackFunction);
  newRequest.send();
}

var requestComplete = function() {
  if (this.status !== 200) return;
  console.log("Hello");
}

var app = function() {
  var key = getApiKey()
  var url = 'https://newsapi.org/v2/everything?' +
            'q=Apple&' +
            'from=2018-02-03&' +
            'sortBy=popularity&' +
            'apiKey=' + key;
  makeRequest(url, requestComplete);
}

window.addEventListener('load', app)
