function clickMe(){
    let links = document.querySelector('.nav-links');

    links.classList.toggle('active');
}

document.querySelector(".nav-links").addEventListener("click", function () {
    this.classList.toggle("active");
});

console.log(window.innerWidth)

