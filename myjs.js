function doSomething() {
    alert("Wanna be your star! Happy viewing~");
}

window.addEventListener('scroll', () =>{

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if(Math.ceil(scrolled)== scrollable){
        alert("You've reached the bottom! \n\n Please select a page~");
    }
});