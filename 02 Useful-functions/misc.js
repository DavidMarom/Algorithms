function isLetter(c) {
	return c.toLowerCase() != c.toUpperCase();
}

function isNum(val) {
	return (val.charCodeAt(0) > 47 && val.charCodeAt(0) < 58);
}
