// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
/*
var apiCall = setInterval(function(){ 
$.post( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
});
 }, 3000);

  clearInterval(apiCall);
*/



var apiCall = setInterval(function(){ 
	
$.post( "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22TSLA%22%2C%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function( data ) {
	var html = "";
	var results = data.query.results.quote;
	for(var values=0; values< results.length ; values++){
		if(results[values].Name!=null){
		 html += '<div class="col-md-4 col-md-4-custom">	';
		 html += '<h2>'+results[values].Name+'</h2>';
		 html += '<strong>'+results[values].Change+'</strong>';
		 html += '<div>DaysLow: '+results[values].DaysLow+'</div>';
		 html += '<div>DaysHigh: '+results[values].DaysHigh+'</div>';
		 html += '</div>';
		$( ".stokes-lists-rep" ).html( html );
		}
		}
	})
 
}, 3000);

