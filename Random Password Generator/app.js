let inputSlider= document.querySelector("#inputSlider");
let sliderValue= document.querySelector("#sliderValue");
let passbox=document.querySelector("#passbox");
let lowercase=document.querySelector("#lowercase");
let uppercase=document.querySelector("#Uppercase");
let numbers=document.querySelector("#Numbers");
let symbols=document.querySelector("#Symbols");
let genBtn= document.querySelector("#genBtn");
let copyIcon=document.querySelector("#copyIcon");

//Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{
sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener("click",()=>{
    passbox.value=generatePass();
})

// Function to Generating password
let upperchar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerchar="abcdefghijklmnopqrstuvwxyz";
let allNumbers='1234567890';
let allSymbols="~!@#$%^&*";

function generatePass(){
   let genPassword="";
   let allchars="";
    allchars += lowercase.checked ? lowerchar :"";
    allchars += uppercase.checked ? upperchar :"";
    allchars += numbers.checked ? allNumbers :"";
    allchars += symbols.checked ? allSymbols :"";

    if(allchars==""||allchars.length==0){
        return genPassword;
    }
    let i = 1;
    while(i<=inputSlider.value){
        genPassword += allchars.charAt(Math.floor(Math.random()*allchars.length));
        i++;
    }
    return genPassword;
}
        
copyIcon.addEventListener("click",()=>{
    if(passbox.value !=""|| passbox.value.length>=1){

        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerText="check"
        copyIcon.title = "Password copied"

    }

    setTimeout(()=>{
        copyIcon.innerHTML="content_copy";
        copyIcon.title=""
    },3000)
})

    
