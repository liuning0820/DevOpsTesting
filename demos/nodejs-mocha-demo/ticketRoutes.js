/**
 * API taskRouter
 */
var ticket = require('./modules/ticket');
var http = require('http');
var url = require('url');
var express = require('express');
var ticketRouter = express.Router();

ticketRouter.get('/tickets',
	function (request, response) {
		var get_params = url.parse(request.url, true).query;

		if (Object.keys(get_params).length === 0) {
			response.setHeader('content-type', 'application/json');
			response.json({
				results: ticket.list()
			});
		}
		else if (get_params.instance) {
			response.setHeader('content-type', 'application/json');
			response.json({
				results: ticket.query_by_arg("instance", get_params.instance)
			});
		}
	}
);


module.exports = ticketRouter;