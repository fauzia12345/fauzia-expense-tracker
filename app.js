const form=document.getElementById("form-container");
const items=document.getElementById("items");

//function that will summit our data 
form.addEventListener("submit", (e) =>{
    e.preventDefault()
let description = form.description.value
let amount = form.amounts.value

generateHTML(description, amount);
});

//function that generate HTML structure
const generateHTML = (description, amount) =>{
    
    if(amount < 0){
     let HTML =`
        <li class="expense">
        <span>${description}</span>
        <span>${amount}</span> 
        </li> `
        items.innerHTML+=HTML

    }else{
        let HTML =`
        <li class="income">
        <span>${description}</span>
        <span>${amount}</span> 
        </li> `
        items.innerHTML+=HTML
    }
}
