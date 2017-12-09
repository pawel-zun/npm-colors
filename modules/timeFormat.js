function formatTime(number) {
	var sec_num = number.toFixed(0);
	var hours   = Math.floor(sec_num / 3600);
	var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);

	if (hours >= 1) {
		var timeStamp = hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek.';
	} else {
		timeStamp = minutes + ' min. ' + seconds + ' sek.';
	}

	return timeStamp;
}

exports.print = formatTime;