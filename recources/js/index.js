 namee=document.getElementById('paragraph')
 var observer = new IntersectionObserver(function(entries) {
     	// isIntersecting is true when element and viewport are overlapping
 	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
     namee.style.marginLeft= "20%";
}, { threshold: [0] });

 observer.observe(document.querySelector("#paragraph"));





//  paragraph=document.getElementsByClassName('paragraph')
//  var observerParagraph = new IntersectionObserver(function(entries) {
//      	// isIntersecting is true when element and viewport are overlapping
//  	// isIntersecting is false when element and viewport don't overlap
// 	if(entries[0].isIntersecting === true)
//     paragraph.style.marginLeft= "300px";
// }, { threshold: [0] });

// observerParagraph.observe(document.querySelector(".paragraph"));



//  const progresiveDiv=document.querySelector(".progresive");
//  console.log(progresiveDiv);
//  let x=0

// const myInreval=setInterval(()=>{
//  	let width=x.toString()+"%";
// 	console.log(width);
// progresiveDiv.style.width= width;
//  	x+=.1;
//  	console.log(x);
// 	if (x>80){
// clearInterval(myInreval);
//  	}

//  },5);

