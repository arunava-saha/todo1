// function addMore(){
//     document.getElementById('error').innerHTML=""

//     let item = document.getElementById('item').value;
//     if(item==''){
//         document.getElementById('error').innerHTML="please enter a list"
//     }else{
//         let box = document.getElementById('todo-box');

//         let li = document.createElement('li')
//         li.textContent=item;

//         box.appendChild(li)
//     }
// }

const item = document.getElementById('item');
const btn = document.getElementById('button');
const list = document.getElementById('todo-box');

function out1() {
    list.innerHTML = item.value;
}

btn.addEventListener('click',out1);