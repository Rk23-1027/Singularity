const images = document.querySelectorAll('.images img');
const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.remove('hide');
            
        } else {
            entry.target.classList.add('hide');
            entry.target.classList.remove('show');
        }
    })
}, {threshold:0.5});

images.forEach(image => observer.observe(image));


const spanOne = document.querySelector(".one")
const spanTwo = document.querySelector(".two")
const spanThree = document.querySelector(".three")

console.log(spanOne);
console.log(spanTwo);
console.log(spanThree);