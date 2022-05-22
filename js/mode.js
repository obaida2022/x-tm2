const button = document.querySelector("button");
const inputEl = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");



container.addEventListener("click" , (x) =>{

    switch (x.target.className ) {
        case "icon-trash icon":
            x.target.parentElement.parentElement.remove();
            break;

            

        case "icon-angry2 icon":
            x.target.classList.add("md");
            const heart = `<span class="icon-heart icon"></span>`;
    
    
            x.target.parentElement.parentElement.getElementsByClassName("text-2")[0].classList.add("finish");
            x.target.parentElement.innerHTML += heart;
            break;

            


        case "icon-heart icon":
            x.target.parentElement.parentElement.getElementsByClassName("text-2")[0].classList.remove("finish");
            x.target.classList.add("md");
            const addAngry = `
            <span class="icon-angry2 icon"></span>
            `
            x.target.parentElement.innerHTML += addAngry
            break;

            


        case "icon-star icon":
            x.target.classList.add("orange");
            container.prepend(x.target.parentElement);
            break;

            

            
        case "icon-star icon orange":
            x.target.classList.remove("orange");
            // container.append(x.target.parentElement);
            break;
    
    
        default:
            break;
    }

    // if (x.target.className == "icon-trash icon") {
    //     x.target.parentElement.parentElement.remove();
        
    // } 
    

    // else if(x.target.className == "icon-angry2 icon"){
    //     x.target.classList.add("md");
    //     const heart = `<span class="icon-heart icon"></span>`;


    //     x.target.parentElement.parentElement.getElementsByClassName("text-2")[0].classList.add("finish");
    //     x.target.parentElement.innerHTML += heart;
    // }


    // else if (x.target.className == "icon-heart icon") {

    //     x.target.parentElement.parentElement.getElementsByClassName("text-2")[0].classList.remove("finish");
    //     x.target.classList.add("md");
    //     const addAngry = `
    //     <span class="icon-angry2 icon"></span>
    //     `
    //     x.target.parentElement.innerHTML += addAngry
        
    // }


    // else if (x.target.className == "icon-star icon") {

    //     x.target.classList.add("orange");
    //     container.prepend(x.target.parentElement);
        
    // }

    // else if (x.target.classList == ("icon-star icon orange")) {
    //     x.target.classList.remove("orange");
    //     // container.append(x.target.parentElement);
    // }
});







form.addEventListener("submit" , (shams) =>{
    shams.preventDefault();
    
if (inputEl.value!="") {
    const text = 
    `
   <div class="task">

   <span class="icon-star icon"></span>
   <p lang="ar" class="text-2" >  ${inputEl.value}  </p>

   <div>
       <span class="icon-trash icon"></span>

       <span class="icon-angry2 icon"></span>
   </div>
   
   </div>
   
   `;
   
   container.innerHTML += text;
   inputEl.value=""
    
} 


else {
    container.innerHTML += "";
}

})





















// let inputEl = document.getElementById ("text");
// let buttonAdd = document.getElementById ("push");
// let error = document.getElementById ("err");
// let container = document.querySelector(".container");
// let = newtask = document.querySelector("#newtask")
// let tasks = document.querySelector("#tasks");
// let bode = []


// inputEl. value = "";
// buttonAdd.addEventListener("click" , (shams) => {
//     // bode.preventDefault();
//     bode.push(inputEl.value);
//     JSON.stringify(bode);
//     tasks.innerHTML = ""
//     for (let i = 0; i < bode.length; i++) {
//         tasks.innerHTML += `<div> <p>${ bode[i]} <button onclick='deleteUser( ${bode[i]})' > delete </button> </div> </p><br>`
//     };
//     x();
// })

// function x(){

//     let y = inputEl.value;
//     if (y!= ""){
//         tasks.innerHTML
//     }
    
//     else{
//         tasks.innerHTML = "You Fhould Fill Data";
//     }
    
// }
// console.log(bode);