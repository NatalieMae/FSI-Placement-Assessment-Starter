// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Natalie Leonard" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies


let qtyGb = document.querySelector('#qty-gb');
let qtyCc = document.querySelector('#qty-cc');
let qtySugar = document.querySelector('#qty-sugar');
let qtyTotal = document.querySelector('#qty-total');
console.log(qtyGb);
console.log(qtyCc);
console.log(qtySugar);


document.getElementById('add-gb').addEventListener('click', function() {
        gb = gb + 1; 
        qtyGb.textContent = gb 
       console.log('click', gb)
   })
   
document.getElementById('minus-gb').addEventListener('click', function() {
        gb = gb - 1;
        qtyGb.textContent = gb
        console.log('click', gb)
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc + 1;
    qtyCc.textContent = cc
    console.log('click', cc)
})

document.getElementById('minus-cc').addEventListener('click', function() {
    cc = cc - 1;
    qtyCc.textContent = cc
    console.log('click', cc)
})

document.getElementById('add-sugar').addEventListener('click', function () {
        sugar = sugar + 1;
        qtySugar.textContent = sugar
        console.log('click', cc)
})

document.getElementById('minus-sugar').addEventListener('click', function () {
        sugar = sugar - 1;
        qtySugar.textContent = sugar
        console.log('click', sugar)
})

document.getElementById('qty-total').addEventListener('click', function() {
        qtyTotal = qtyGb +- qtyCc;
        qtyTotal.textContent = gb + cc 
        console.log('click', qtyTotal)

})



//document.getElementById('minus-gb').addEventListener('click', function() {


//})
//document.getElementById('qty-gb').addEventListener('click', function() {
 //           console.log('#qty-gb')

//})




        // let minusGb =- 1;
        //console.log('click')

   // console.log('button-container', addGb)
    
    // HINT: You can delete this console.log after you no longer need it!
   // console.log('click' + gb++)
//})
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

// TODO: Hook up event listeners for the rest of the buttons

//const button = document.getElementById("add=gb");
//for(var gb = 0; gb < addGb.button; gb++) {
  //console.log(button.addGb[gb].textContent); // "Label 1" and "Label 2"
//}
//})
//document.getElementsByClassName('.button-container' + gb++)
