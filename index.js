"use strict";

var
 express = require("express")
;

var
 port
;

if (!process.env.PORT) {
	console.log("USAGE: PORT=#### node index");
}

express()
.use(function (req, res, next) {
	res.send("Hello World!\n\n");
})
.listen(process.env.PORT, function () {
	console.log("Listening on port " + process.env.PORT);
})
;
