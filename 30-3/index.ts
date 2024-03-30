#! /usr/bin/env node 
import inquirer from "inquirer"

let zakat = 2.5;
let goldValueInTola = 234800;
let goldWeightInTola = 7.5;
let condition = true;

while(condition){


const answer = await inquirer.prompt([
    {
        name : "goldWeight",
        message : "Enter gold weight",
        type : "number",
    }
]);
let goldWeight = answer.goldWeight;
if(goldWeight >= goldWeightInTola){
    let calculatedZakat = (goldWeight * goldValueInTola) * (zakat/100);
    console.log(`The calculated value of gold weighing ${goldWeight} tola is ${calculatedZakat}`);
}else {
    console.log("Zakat is not applicable");
    break; //condition = false; (yeah bhi likh sakte hain)
    
}
}