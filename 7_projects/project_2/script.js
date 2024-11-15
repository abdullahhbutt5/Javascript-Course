const form = document.querySelector("form")
// const height = parseInt(document.querySelector('#height').value)      // This usecase will give empty
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Enter valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Enter valid weight ${weight}`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        // result.innerHTML = `<span>${bmi}</span>`    // Shows the result
        if(bmi < 18.6){
            result.innerHTML = `<span>${bmi}</span> Your BMI is Under Weight`
        }else if(bmi > 24.9){
            result.innerHTML = `<span>${bmi}</span> Your BMI is Over Weight`
        }else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `<span>${bmi}</span> Your BMI is Normal`
        }
    }
})