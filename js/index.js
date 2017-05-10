const target = document.querySelector('.target');
const links = $('.mynav a');
const textbox = document.querySelectorAll('.mynav');
const svg = document.querySelector('svg');
window.addEventListener('resize', resizeFunc);
var winwidth = window.innerWidth;


var currentcontainer = 0;

window.onscroll = function(){scrollFunction();}



for( i=0;i<links.length;i++){
	links[i].addEventListener('click', (e) => e.preventDefault());
	$(links[i]).mouseenter(mouseenterFunc);
	links[i].addEventListener('mouseleave', mouseleaveFunc);
}
var containers = [{name: 'home', ele: $('#intro'), topdist: $('#intro').offset().top, menubutton: $('a#home')}, {name: 'projects', ele: $('#projects'), topdist: $('#projects').offset().top, menubutton: $('a#portfolio')}];


$(links[currentcontainer]).trigger('mouseenter');
function mouseleaveFunc(){
	console.log(this);
}
function scrollFunction(){
	if($(document).scrollTop()+window.innerHeight*0.3<(containers[currentcontainer].topdist)){
			currentcontainer = currentcontainer-1;
			$(links[currentcontainer]).trigger('mouseenter');
	}
	if(currentcontainer<containers.length-1){
		if($(document).scrollTop()+window.innerHeight*0.7>(containers[currentcontainer+1].topdist)){
			currentcontainer = currentcontainer+1;
			$(links[currentcontainer]).trigger('mouseenter');
		}
	}

}	

function mouseenterFunc(){
	if(!this.parentNode.classList.contains('active')){
	for( var i=0; i<links.length; i++){
		if(links[i].parentNode.classList.contains("active")){
			links[i].parentNode.classList.remove('active');
		}
		links[i].style.opacity = '0.25';
	}

	
	this.parentNode.classList.add('active');
	this.style.opacity = '1';
	
	var position = $(this).position();
	const width = this.getBoundingClientRect().width;
	const height = this.getBoundingClientRect().height;
	const left = position.left
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


