let dis = document.querySelector('.display');
let sav = document.querySelector('.save');
let prev = document.querySelector('.prev-ent');
 

let count = 0;

function increment(){
    count += 1;
    dis.textContent = count;
}

function save(){
    let countStr = count + " - "
    prev.textContent += countStr
    dis.textContent = 0;
    count = 0;

}
