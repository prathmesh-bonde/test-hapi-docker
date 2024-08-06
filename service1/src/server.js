'use strict';

import { Server } from '@hapi/hapi';
import config from 'config';
import HapiMongoDB from 'hapi-mongodb';
import {
	helloPlugin,
	userPlugin,
	loginPlugin,
	dbPlugin
} from './plugins/index.js';
import { validateEnv } from './validations/index.js';

const createServer = async () => {
	validateEnv();

	const server = new Server({
		host: config.get('server.HOST'),
		port: config.get('server.PORT')
	});

	await server.register([
		{
			plugin: helloPlugin
		},
		{
			plugin: userPlugin
		},
		{
			plugin: loginPlugin
		},
		{
			plugin: HapiMongoDB,
			options: {
				url: config.get('db.MONGO_URI'),
				decorate: true
			}
		},
		{
			plugin: dbPlugin
		}
	]);

	return server;
};

export default createServer;
