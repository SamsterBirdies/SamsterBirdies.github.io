//functions for handling cookies
function cookieWrite(k, v){
	const date = new Date();
	date.setTime(date.getTime() + 15552000000) //6 month expire time
	document.cookie = k+'='+v+';'+'expires='+date.toUTCString()+';Secure;path=/';
}
function cookieRead(k){
	let cookieData = document.cookie.split(';');
	for (x of cookieData){
		if (x.indexOf(k) != -1 && x.indexOf(k) < x.indexOf('=')){
			return x.substr(x.indexOf('=')+1);
		}
	}
	return 'nocookie';
}
//function for changing style option
function cookieChangeStyle(globalpath = false){
	let style = cookieRead('style');
	//functions for changing stuff
	function setBG(type){
		if (type != 'none'){
			if (globalpath){
				document.body.style.backgroundImage = 'url(https://www.samsterbirdies.com/images/'+type+'.webp)';
			} else {
				document.body.style.backgroundImage = 'url(./images/'+type+'.webp)';
			}
		} else {
			document.body.style.backgroundImage = 'none';
			document.body.style.backgroundColor='#252525';
		}
		document.body.style.backgroundRepeat= 'no-repeat';
		document.body.style.backgroundAttachment= 'fixed';
		document.body.style.backgroundSize= 'cover';
	}
	function gradient(){
		let gd = cookieRead('gradient').split('^^^');
		document.body.style.backgroundImage = 'linear-gradient('+gd[0]+'deg, rgba('+gd[1]+','+gd[2]+','+gd[3]+',1), rgba('+gd[4]+','+gd[5]+','+gd[6]+',1))';
		document.body.style.backgroundRepeat= 'no-repeat';
		document.body.style.backgroundAttachment= 'fixed';
		document.body.style.backgroundSize= 'cover';
	}
	//get style and change background accordingly.
	if (style == 'background1'){
		setBG('background1');
	} else if (style == 'space'){
		setBG('backgroundspace');
	} else if (style == 'schematic') {
		setBG('backgroundschematic');
	} else if (style == 'gradient') {
		gradient();
	} else {
		setBG('none');
	}
}
//Change the background on page load.
cookieChangeStyle();