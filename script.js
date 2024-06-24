let faqCards = document.querySelectorAll('.card')

faqCards.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.classList.toggle('active')
    })
})