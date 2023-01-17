let h1 = document.querySelector("h1");

h1.addEventListener('click',()=>{
    h1.classList = "text-blue";
})


let h3 = document.querySelector("h1");

h3.addEventListener('click',()=>{
    h3.classList = "text-error";
})

let p = document.querySelector("p");

p.addEventListener('click',()=>{
    switch(true){  
        case p.classList == "text-style":
            p.classList.remove("text-style");
            break;

        case p.classList !== "text-style":
            p.classList.add("text-style");
            break;
    }
})

let lesP = document.querySelectorAll("p");
let avantDernierP = lesP[lesP.length-2];
let span = avantDernierP.querySelectorAll("span");

span.forEach(element =>{
    element.addEventListener('click',()=>{
        element.style = "font-weight: 600";
    })
})


let dernierP = lesP[lesP.length-1];
let derSpan = dernierP.querySelectorAll("span");

derSpan.forEach(element =>{
    element.addEventListener('click',()=>{
        derSpan.forEach(element => element.classList.remove("border-red"));

        element.classList.add("border-red");
    })
})



