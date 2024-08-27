let nop = document.querySelector(".no");
let sip = document.querySelector(".si");

nop.addEventListener("mouseover", function(){
    // Check if the "no" button currently says "no weirdo"
    if (nop.innerHTML === "no weirdo") {
        // Swap the text content of the buttons
        let tempText = nop.innerHTML;
        nop.innerHTML = sip.innerHTML;
        sip.innerHTML = tempText;

        nop.classList.add("soundy");
        sip.classList.remove("soundy");
    }
    
});

sip.addEventListener("mouseover", function(){
    // Check if the "si" button currently says "no weirdo"
    if (sip.innerHTML === "no weirdo") {
        // Swap the text content of the buttons
        let tempText = sip.innerHTML;
        sip.innerHTML = nop.innerHTML;
        nop.innerHTML = tempText;

        nop.classList.remove("soundy");
        sip.classList.add("soundy");
    }
});

nop.addEventListener("click", function(){
    let yay = new Audio("./yay.mp3");
    yay.play();
    setTimeout(function() {
        alert("YAAAAY I LOVE YOU BABY");
    }, 1000); // Delay in milliseconds (1000 ms = 1 second)
})

sip.addEventListener("click", function(){
    let yay = new Audio("./yay.mp3");
    yay.play();
    setTimeout(function() {
        alert("YAAAAY I LOVE YOU BABY");
    }, 1000); // Delay in milliseconds (1000 ms = 1 second)
})



// nop.addEventListener("click", function(){
//     let yay = new Audio("./yay.mp3");
//     yay.play();
// })
