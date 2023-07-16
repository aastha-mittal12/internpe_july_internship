
let btn = document.querySelectorAll('button');
let input = document.querySelector('input');

for(let button of btn){
    button.addEventListener('click' , function(event){
        let btnText = event.target.innerText;
        if(btnText === 'C'){
            input.value = ""
        }
        else if(btnText === '='){
            try{
                input.value = eval(input.value);
            }
            catch(e){
                input.value = 'Invalid operation';
            }
        }
        else{
            input.value += btnText;
        }
    })
}

