/*
    Task
    - Implement a switch statement to check against `env` variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

let env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password"; 

// Task: Add code here

function switchCheck(env) {
    switch (env) {
    case "STAGE": 
        databaseCredential = "stageuser:password"; 
        console.log("modified"); 
        break; 
    case "PROD": 
        databaseCredential = "produser:password"; 
        console.log("modified"); 
        break; 
    case "DEV": 
    default: 
    console.log("no changes"); 
}
console.log(`Database credential for environment ${env} is ${databaseCredential}`); 
console.log(); 
}

env = "DEV"; 
switchCheck(env); 

env = "STAGE"; 
switchCheck(env); 

env = "PROD"; 
switchCheck(env); 