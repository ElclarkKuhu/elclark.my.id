export function relative(date: string): string {
	const now = new Date();
	const then = new Date(date);

	const diff = now.getTime() - then.getTime();

	const seconds = Math.floor(diff / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const weeks = Math.floor(days / 7);
	const months = Math.floor(weeks / 4);
	const years = Math.floor(months / 12);

	if (seconds < 60) {
		if (seconds === 1) return 'Just now';
		return `${seconds} seconds ago`;
	} else if (minutes < 60) {
		if (minutes === 1) return 'a minute ago';
		return `${minutes} minutes ago`;
	} else if (hours < 24) {
		if (hours === 1) return 'an hour ago';
		return `${hours} hours ago`;
	} else if (days < 7) {
		if (days === 1) return 'Yesterday';
		return `${days} days ago`;
	} else if (weeks < 4) {
		if (weeks === 1) return 'a week ago';
		return `${weeks} weeks ago`;
	} else if (months < 12) {
		if (months === 1) return 'a month ago';
		return `${months} months ago`;
	} else {
		if (years === 1) return 'a year ago';
		return `${years} years ago`;
	}
}

export function format(date: string, format: string): string {
	const d = new Date(date);

	const strings = {
		MMMM: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		],
		MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		DDDD: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		DDD: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	};

	const year = d.getFullYear();
	const month = d.getMonth() + 1;
	const day = d.getDate();
	const hours = d.getHours();
	const minutes = d.getMinutes();
	const seconds = d.getSeconds();
	const ampm = hours >= 12 ? 'PM' : 'AM';

	const pad = (n: number) => (n < 10 ? `0${n}` : n);

	return format
		.replace('yyyy', String(year))
		.replace('MMMM', strings.MMMM[month - 1])
		.replace('MMM', strings.MMM[month - 1])
		.replace('MM', String(pad(month)))
		.replace('DDDD', strings.DDDD[day])
		.replace('DDD', strings.DDD[day])
		.replace('DD', String(pad(day)))
		.replace('hh', String(pad(hours)))
		.replace('mm', String(pad(minutes)))
		.replace('ss', String(pad(seconds)))
		.replace('aa', ampm);
}
