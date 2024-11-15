const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'skyblue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'lightcoral'){
            body.style.backgroundColor = e.target.id
        }
    })
})
