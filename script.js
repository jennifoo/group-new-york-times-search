
/* ------------------------ GLOBAL VARIABLES ------------------------ */
var authKey = "&api-key=" + "UJpplAloudoeIeI6ao2Q1YWDU17MuBsQ";

var queryInput = "";
var query = "?q=" + queryInput;

var inputStartYear = ""; //user to enter start date
var startYear = "&begin_date=" + inputStartYear;

var inputEndYear = ""; //user to enter end date
var endYear = "&end_date=" + inputEndYear;


var baseURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;


/* ------------------------ FUNCTIONS ------------------------ */

runQuery("bear", 1990, 2020);

function runQuery(searchTerm, enterStartYear, enterEndYear) {

  var finalURL = baseURL + searchTerm + enterStartYear + enterEndYear + authKey;

  $.ajax({
    url: finalURL,
    method: "GET"
  }).then(function(NYTData) {

    var result = NYTData.response.docs;

    console.log(finalURL);
    // console.log(result);


    $("#well-section").empty();

  });
}

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
// q = query
