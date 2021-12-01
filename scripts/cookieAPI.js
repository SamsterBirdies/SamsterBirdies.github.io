//functions for handling cookies
function cookieWrite(k, v){
	const date = new Date();
	date.setTime(date.getTime() + 15552000000) //6 month expire time
	document.cookie = k+'='+v+';'+'expires='+date.toUTCString()+';Secure;path=/';
}
function cookieRead(k){
	let cookieData = document.cookie.split(';');
	for (x of cookieData){
		if (x.indexOf(k) != -1){
			return x.substr(x.indexOf('=')+1);
		}
	}
	return 'nocookie';
}
//function for changing style option
function cookieChangeStyle(){
	let style = cookieRead('style');
	//start changing stuff
	function setBG(type){
		if (type != 'none'){
			document.body.style.backgroundImage = 'url(./images/'+type+'.webp)';
		} else {
			document.body.style.backgroundImage = 'none';
			document.body.style.backgroundColor='#252525';
		}
			document.body.style.backgroundRepeat= 'no-repeat';
			document.body.style.backgroundAttachment= 'fixed';
			document.body.style.backgroundSize= 'cover';
	}
	if (style == 'background1'){
		setBG('background1');
	} else {
		setBG('none');
	}
}
cookieChangeStyle();