'use strict';
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const app = express();
const Flickr = require("flickrapi"),
	flickrOptions = {
		api_key: "d80f3d9a8e56b8bc7ec5eaa7d4389e23",
		secret: "46fe69bf66fbbf43"
	};

let compiler = webpack(config);
app.use(express.static(__dirname + '/public/static'));
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.sendFile(__dirname + '/index.html')
});

app.listen(app.get('port'), () => {
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});

app.post('/api/photo', (req, res) => {
	let city = req.body.city;
	console.log("city - ",city);
	if (city === "Please, select city") {
		res.json({
			url: "https://im3-tub-ru.yandex.net/i?id=3aa946457cc8f169aff333abbf75fd78&n=33&h=215&w=280"
		})
	} else {
		Flickr.tokenOnly(flickrOptions, (error, flickr) => {
			if (error) {
				res.json({
					url: "error" + error
				})
			}
			let img;
			let perPage = 10;
			console.time("get photo");
			flickr.photos.search({
				tags: city + ", building",
				per_page: perPage,
				sort: "relevance"
			}, (check, data) => {
				let photo = data.photos.photo;
				let rand = Math.random() * (perPage - 1);
				rand = Math.round(rand);
				let photoRand = photo[rand];
				img = "https://farm" + photoRand.farm + ".staticflickr.com/" + photoRand.server + "/"
					+ photoRand.id + "_" + photoRand.secret + ".jpg";
				let url = {
					url: img
				};
				console.timeEnd("get photo");
				res.json(url);
			});

		});
	}
});