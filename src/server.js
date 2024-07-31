'use strict';

import { Server } from '@hapi/hapi';
import config from 'config';
import { helloPlugin, userPlugin, loginPlugin } from './plugins/index.js';
import { validateEnv } from './validations/index.js';

const createServer = async () => {
	validateEnv();
	const serverConfig = config.get('server');

	const server = new Server({
		host: serverConfig.HOST,
		port: serverConfig.PORT
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
		}
	]);

	return server;
};

export default createServer;
