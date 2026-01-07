const clearBtn=document.querySelector("#clear-button");
const deleteBtn=document.querySelector("#delete-button");
const divideBtn=document.querySelector("#divide-button");
const multiplyBtn=document.querySelector("#multiply-button");
const subtractBtn=document.querySelector("#subtaract-button");
const addBtn=document.querySelector("#add-button");
const decimalBtn=document.querySelector("#decimal-button");
const equalBtn=document.querySelector("#equal-button");
const numberBtns=document.querySelectorAll(".number");
const resultElement = document.querySelector("#result");


//Initalize the variable

let result="";
let operation="";
let previousOperand=0;

//function to append number
const appendNumber=(number)=>{
    if(number==='.'&& result.includes('.')){
        return;
    }
result +=number;
updateDisplay();
}
// function to update display
const updateDisplay = ()=>{
    if(operation){
        resultElement.innerText=`${previousOperand} ${operation} ${result}`;
 
    }else{
        resultElement.innerText=result;
             }

}

//function to select operator
const selectOperator=(operatorValue)=>{
    if(result ==='')return;


    if (operation !=='' & previousOperand !==''){
        calculateResult();
    }
    operation = operatorValue;
    previousOperand=result;
    result='';
    updateDisplay();
}
// function to calculate result
const calculateResult=()=>{
 
    let evaluatedResult;
    const prev=parseFloat(previousOperand);
    const current=parseFloat(result);
    if(isNaN(prev) ||isNaN(current))return;

    switch(operation){
        case '+':
            evaluatedResult=prev+current;
            break;
            case '-':
                evaluatedResult=prev-current;
                break;
                case '*':
                    evaluatedResult=prev*current;
                    break;
                    case '/':
                        evaluatedResult=prev/current;
                        break;
                        default:
                            return;
    }
    result = evaluatedResult.toString();
    operation='';
    previousOperand ='';
}

//Add Event listener to number
numberBtns.forEach(button=>{
    button.addEventListener("click",()=>{
        appendNumber(button.innerText);
    })
});
//Function to clear display;
const clearDisplay=()=>{
    result='';
    previousOperand='';
    operation='';
    updateDisplay();
};
//Function to delete lastDigit;
const deleteLastdigit=()=>{
    // if(result==='')return;
    if(result===''&& operation!==''){
        operation='';
        result=previousOperand;
        previousOperand="";
        updateDisplay();

    }else{
        result=result.slice(0,-1);
        updateDisplay();
    }
    
    // result=result.slice(0,-1);
    // updateDisplay();
}
decimalBtn.addEventListener("click" , ()=>appendNumber("."));
addBtn.addEventListener("click",()=>selectOperator("+"));
subtractBtn.addEventListener("click",()=>selectOperator("-"));
multiplyBtn.addEventListener("click",()=>selectOperator("*"));
divideBtn.addEventListener("click",()=>selectOperator("/"));
equalBtn.addEventListener('click',()=>{
    if(result==='')return;
    calculateResult();
    updateDisplay();
});
clearBtn.addEventListener("click",clearDisplay);
deleteBtn.addEventListener("click",deleteLastdigit);