// let display = document.getElementById('display');
// let buttons = Array.from(document.getElementsByClassName('button'));
// console.log(buttons);
// buttons.map( button => {
//     button.addEventlistener('click', (e) => { 
//         switch(e.target.innertext){
//             default:
//                 display.innertext += e.target.innertext;
//         }
//       });       
//     });

const buttons = document.querySelectorAll('.btn-number')
const display = document.getElementById('display')
buttons.forEach(btn =>{
  btn.addEventListener('click',function(e) {
    let content = parseInt(e.target.textContent)
    display.value += content
    console.log(display)

  })
})