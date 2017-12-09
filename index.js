var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
var version = process.version;
process.stdout.write('Node version: ' + version + '\n');

process.stdin.on('readable', function() {
	var input = process.stdin.read();

	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!');
				process.exit();
				break;
			case '/sayhello':
		    process.stdout.write('hello!\n');
		    break;
		 	case '/getOSinfo':
		 		OSinfo.print();
		 		break;
		 	default: 
				process.stderr.write('Wrong instruction\n');
		}
	}
});
