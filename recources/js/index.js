namee=document.getElementById('project')
var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
    namee.style.color='red';
}, { threshold: [0] });

observer.observe(document.querySelector("#project"));