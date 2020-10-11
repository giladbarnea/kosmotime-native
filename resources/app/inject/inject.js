console.log('inject.js');
let _pageLoaded = false;
async function hasPageLoaded() {
	if(_pageLoaded) {
		return true;
	}
	if(document.querySelector('#rbd-lift-instruction-1') !== null) {
		console.log(`page finally loaded`);
		_pageLoaded = true;
		return true;
	} else {
		console.log(`page hasn't loaded yet`);
		return false;
	}
}
function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function waitUntil(cond, timeout = Infinity, checkInterval = 20) {
	const loops = timeout / checkInterval;
	let count = 0;
	while(count < loops) {
		if(cond())
			return true;
		await wait(checkInterval);
		count++;
	}
	return false;
}

elementToString = function (el) {
	let str = el.tagName.toLowerCase();
	if(el.id !== '') {
		str += `#${el.id}`;
	}
	if(el.className !== '') {
		str += `.${el.className.split(' ').join('.')}`
	}
	str += ` > (${el.childElementCount})`
	return str;

}
const loop = setInterval(async () => {
	console.log(`waiting until hasPageLoaded()...`);
	await waitUntil(hasPageLoaded, Infinity, 2000);
	console.log(`done waiting until hasPageLoaded(), waiting 2s...`);
	await wait(2000);
	console.log(`done waiting 2s`);
	let divs = document.getElementsByTagName('div');
	console.log(`looping over ${divs.length} divs`);
	let replacecount = 0;
	for(let div of divs) {
		if(div.className
			&& div.innerText
			&& div.innerText.includes('☠️ ')
			&& div.childElementCount == 0
			) {
			
			console.log(`div:\n\t${elementToString(div)}\ninnerText:\n\t${div.innerText.split('\n').join('\n\t')}`, div);
			div.innerText = div.innerText.replace('☠️ ', '');
			replacecount++;
		}
	}
	console.log(`replaced ${replacecount} innerTexts`);

}, 3000);

