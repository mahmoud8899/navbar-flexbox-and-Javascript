let humer = document.querySelector('.humer');
let the_list = document.querySelector('.list');
let sop  = document.querySelectorAll('.list li')

humer.addEventListener('click', ()=>{

    the_list.classList.toggle('active')
    sop.forEach((img)=>{

        img.classList.add('xp')
    })

})