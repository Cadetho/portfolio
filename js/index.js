const target = document.querySelector('.target');
const links = document.querySelectorAll('.mynav text a');
const textbox = document.querySelectorAll('.mynav text');
const svg = document.querySelector('svg');
window.addEventListener('resize', resizeFunc);
var nav_offset = 0;
var winwidth = window.innerWidth;
svg.setAttribute('width', winwidth);


for(var i=0;i<textbox.length;i++){
	textbox[i].setAttribute('x', nav_offset);
	var bbox = textbox[i].getBBox();
	nav_offset += bbox.width + 10;
}




var centeroffset = (winwidth - nav_offset)/2;

for(i=0;i<textbox.length;i++){
	textbox[i].setAttribute('x', parseInt(textbox[i].getAttribute('x'))+centeroffset);
}



for( i=0;i<links.length;i++){
	links[i].addEventListener('click', (e) => e.preventDefault());
	links[i].addEventListener('mouseenter', mouseenterFunc);
	
}

function mouseenterFunc( ){
	if(!this.parentNode.classList.contains('active')){
	for( var i=0; i<links.length; i++){
		if(links[i].parentNode.classList.contains("active")){
			links[i].parentNode.classList.remove('active');
		}
		links[i].style.opacity = '0.25';
	}
	
	
	this.parentNode.classList.add('active');
	this.style.opacity = '1';
	
	const width = this.getBoundingClientRect().width;
	const height = this.getBoundingClientRect().height;
	const left = this.getBoundingClientRect().left + window.pageYOffset;
	const top = this.getBoundingClientRect().top + window.pageXOffset;
	const color = 'white';
	
	
	target.style.width = width + "px";
	target.style.height = height + "px";
	target.style.left = left + "px";
	target.style.top = top + "px";
	target.style.borderColor = color;
	target.style.transform = 'none';
	}
}

function resizeFunc(){
	const active = document.querySelector('.mynav li.active');
	
	if(active){ 
		const left = active.getBoundingClientRect().left + window.pageXOffset;
		const top = active.getBoundingClientRect().top + window.pageYOffset;
		
		target.style.left = left + "px";
		target.style.top = top + "px";
	}
}


