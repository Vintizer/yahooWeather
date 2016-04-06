///**
// * Created by Vitaly.Zayets on 22-Feb-16.
// */
//window.addEventListener("load", function() {
//	function locationSuccess(position) {
//		//var APPID = 'dj0yJmk9UnJWWWpqVzZVMmpiJmQ9WVdrOWVIQnRZMWxxTjJrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1iNw--';
//		//var lat = 34.0522342;
//		//var lon = -118.24368489999999;
//		//console.log("APPID",APPID);
//		//var geoAPI = 'http://where.yahooapis.com/geocode?location=' + lat + ',' + lon + '&flags=J&gflags=R&appid=' + APPID;
//		//console.log("geoAPI",geoAPI);
//		//var wsql = 'select * from weather.forecast where woeid=WID and u="' + DEG + '"',
//		//	weatherYQL = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(wsql) + '&format=json&callback=?',
//		//	code, city, results, woeid;
//		//if (window.console && window.console.info) {
//		//	console.info("Coordinates: %f %f", lat, lon);
//		//}
//		function getOneWord(loc, place, woeid) {
//			//var locRight = loc + "%2C%20" + place;
//			var woeidGet = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%20" + woeid + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
//			//var testApi = "https://query.yahooapis.com/v1/public/yql?q=" +
//			//	"select%20item.condition.text%20from%20weather.forecast%20where%20woeid%20in%20" +
//			//	"(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + locRight + "%22)" +
//			//	"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
//			$.getJSON(woeidGet, function(r) {
//				//$(".code").text(r.query.results.channel.item.condition.code);
//				$(".date").text(r.query.results.channel.item.condition.date);
//				$(".temp").text((+r.query.results.channel.item.condition.temp -32)*5/9);
//				$(".text").text(r.query.results.channel.item.condition.text);
//
//				console.log("testApi", r.query.results.channel.item.condition.text);
//			});
//		}
//		getOneWord(position.loc, position.place, position.woeid);
//	}
//	var pos = {};
//	//pos.loc = "Kharkiv";
//	//pos.place = "ua";
//	pos.woeid = "922137";
//	locationSuccess(pos);
//	$(".select").change(function() {
//		var val = $(".select").val();
//		var pos= {},
//			woeid;
//		switch(val) {
//			case "Kh" :
//				pos.loc = "Kharkiv";
//				pos.place = "ua";
//				pos.woeid = "922137";
//				break;
//			case "Sp" :
//				pos.loc = "saint-petersburg";
//				pos.place = "ru";
//				pos.woeid = "2123260";
//				break;
//			case "Tsh" :
//				pos.loc = "Tashkent";
//				pos.place = "uz";
//				pos.woeid = "2272113";
//				break;
//		}
//		locationSuccess(pos);
//
// regexp for picture
// 	$res0=preg_match_all
// 	("/(http:\\/\\/)?([a-z_0-9-.]+\\.[a-z]{2,3}(([ \"'>\r\n\t])|(\\/([^ \"'>\r\n\t]*)?)))/",$tmp,$res);
// if ($res0!==false and $res0>0) $this->url = $res[0][0];
// else $this->url = '';
//	})
//});
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './static/styles/app.css'
import configureStore from './store/configureStore'

const store = configureStore()

render(
	<Provider store={store}>
		<App url="/api/weather"/>
	</Provider>,
	document.getElementById('content')
)
