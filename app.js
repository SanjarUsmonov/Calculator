let body = document.querySelector('body')
let input = document.querySelector('.input')
let btn1 = document.querySelector('button')
let btns = document.querySelectorAll('button')
console.log(btn1);
input.innerHTML = 0
console.log(btns);
for (index of btns) {
    index.addEventListener('click',(e)=>{
        if(e.target.innerHTML === 'C'){
            input.innerHTML = '0'
        }else if(e.target.innerHTML === '<i class="fa-solid fa-delete-left"></i>'){
            let val = input.innerHTML
            val = val.split('')
            val.pop()
            input.innerHTML = val.join('')
            input.innerHTML = '' ? input.innerHTML = '0' : input.innerHTML
            val = ''
        }else if(e.target.innerHTML === '='){
            console.log(input.innerHTML);
            console.log(eval(input.innerHTML));
            input.innerHTML = eval(input.innerHTML)
        }else if(e.target.innerHTML == 'Dark / White'){
            body.classList.toggle('dark')
            
        }else{
            input.innerHTML = input.innerHTML.split('')[0] == '0' ? input.innerHTML.split('').slice(1,input.innerHTML.split('').length).join('') : input.innerHTML
            input.textContent += e.target.innerHTML
        }
    })
}