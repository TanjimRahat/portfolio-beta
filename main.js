const logo = document.querySelector('#logo');
const nav = document.querySelector('#nav');
const container = document.querySelector('.container');

setTimeout(()=>{
	logo.style.transition = '1s';
	logo.style.opacity = '1';
},500)

setTimeout(()=>{
	nav.style.transition = '1s';
	nav.style.opacity = '1';
},1000)

setTimeout(()=>{
	container.style.transition = '1s';
	container.style.opacity = '1';
},1500)