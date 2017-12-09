var os = require('os');
var colors = require('colors');
var timeFormat = require('./timeFormat');

function getOSinfo() {
	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var uptimeFormatted = timeFormat.print(uptime);
	var userInfo = os.userInfo();

	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}

	console.log("First some yellow text".yellow);
	console.log('System:'.gray, type);
	console.log('Release:'.red, release);
	console.log('CPU model:'.blue, cpu);
	console.log('Uptime: ~'.green, uptimeFormatted);
	console.log('User name:'.yellow, userInfo.username);
	console.log('Home dir:'.white, userInfo.homedir);
}

exports.print = getOSinfo;