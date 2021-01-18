let but = document.getElementById ('but')
let output = document.getElementById('outputtext')

let number = [Math.floor(Math.random() * 100)]

but.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML = 'correct'
    } else if (input < number){
        output.innerHTML = "Too low"
    } if (input > number){
        output.innerHTML = "to high"
    }
})