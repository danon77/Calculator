let display = document.getElementById("display")
let buttons = document.querySelectorAll(".button")
//Кпопки з цифрами(знаками)
buttons[0].addEventListener("click",click)
buttons[1].addEventListener("click",click)
buttons[2].addEventListener("click",click)
buttons[3].addEventListener("click",click)
buttons[4].addEventListener("click",click)
buttons[5].addEventListener("click",click)
buttons[6].addEventListener("click",click)
buttons[7].addEventListener("click",click)
buttons[8].addEventListener("click",click)
buttons[9].addEventListener("click",click)
buttons[10].addEventListener("click",click)
buttons[11].addEventListener("click",click)
buttons[12].addEventListener("click",click)
buttons[13].addEventListener("click",click)
buttons[14].addEventListener("click",click)
buttons[15].addEventListener("click",click)
//Виводимо на дісплей
function click(){
   display.innerHTML += this.innerHTML;
}
