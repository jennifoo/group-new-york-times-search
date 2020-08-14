var authKey = "Place-holder";


var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;


var queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;



function runQuery(numArticles, queryURL) {

  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(NYTData) {

    
    console.log("------------------");
    console.log(queryURL);
    console.log("------------------");
    console.log(numArticles);
    console.log(NYTData);

   
    $("#well-section").empty();
