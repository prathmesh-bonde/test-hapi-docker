'use strict';

import { Server } from '@hapi/hapi';
import HapiMongoDB from 'hapi-mongodb';
import { helloPlugin } from './plugins/helloPlugin.js';
import { dbPlugin } from './plugins/dbPlugin.js';
import { readFromServicePlugin } from './plugins/readFromServicePlugin.js';

const createServer = async () => {
	const server = new Server({
		host: process.env.HOST,
		port: process.env.PORT
	});

	await server.register([
		{
			plugin: helloPlugin
		},
		{
			plugin: HapiMongoDB,
			options: {
				url: process.env.MONGO_URI,
				decorate: true
			}
		},
		{
			plugin: dbPlugin
		},
		{
			plugin: readFromServicePlugin
		}
	]);

	return server;
};

export default createServer;
