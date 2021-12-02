const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click',()=>{
    // Toggle is add in active in to the class 
    search.classList.toggle('active')
    // This will focus on the search input 
    input.focus()
})