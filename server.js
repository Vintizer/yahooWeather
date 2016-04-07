/**
 * Created by Vitaly.Zayets on 23-Feb-16.
 */
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');
var app = express();
var Flickr = require("flickrapi"),
	flickrOptions = {
		api_key: "d80f3d9a8e56b8bc7ec5eaa7d4389e23",
		secret: "46fe69bf66fbbf43"
	};

var compiler = webpack(config);
app.use(express.static(__dirname + '/public/static'));
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.listen(app.get('port'), function() {
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});

app.post('/api/photo', function(req, res) {
	// var city = req.body.city === "SP" ? city === "saint-petersburg" : req.body.city;
	var city = req.body.city;
	console.log("city - ",city);
	if (city === "Please, select city") {
		res.json({
			url: "https://im3-tub-ru.yandex.net/i?id=3aa946457cc8f169aff333abbf75fd78&n=33&h=215&w=280"
		})
	} else {
		Flickr.tokenOnly(flickrOptions, function(error, flickr) {
			if (error) {
				res.json({
					url: "error" + error
				})
			}
			var img;
			var perPage = 10;
			console.time("get photo");
			flickr.photos.search({
				tags: city + ", building",
				per_page: perPage,
				sort: "relevance"
			}, function(check, data) {
				var photo = data.photos.photo;
				var rand = Math.random() * (perPage - 1);
				rand = Math.round(rand);
				var photoRand = photo[rand];
				img = "https://farm" + photoRand.farm + ".staticflickr.com/" + photoRand.server + "/"
					+ photoRand.id + "_" + photoRand.secret + ".jpg";
				var url = {
					url: img
				};
				console.timeEnd("get photo");
				res.json(url);
			});

		});
	}

});