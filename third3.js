function bgchanger(){
    if(this.scrollY > this.innerHeight /2){
        document.body.classList.add('su-active')
    }else{
        document.body.classList.remove('su-active')
    }
};

window.addEventListener('scroll',bgchanger)