const prompt = require("prompt-sync")();
const fs = require('fs');
const xml2js = require('xml2js');
const util = require('util');

//Function: XML to JSON
function xmltojson() {
    const parser = new xml2js.Parser();
    fs.readFile('example.xml', (err, data) => {
        parser.parseString(data, (err, result) => {
            console.log(util.inspect(result, false, null, true ));
        });
    });     
}

//Function 01: EVEN ODD Number
function evenodd() {
    let numm = prompt("Enter a number: ");
    
    if(numm % 2 == 0) {
        console.log("The number is even.");
    }
    
    else {
        console.log("The number is odd.");
    }
    }

//Function: Addition
            function addition() {
                var  a,b;
                a = parseInt(prompt("Enter 1st Number: "));
                b = parseInt(prompt("Enter 2nd Number: "));
                console.log(a+b);
            }

//Function: Subtraction
            function Subtraction() {
                var c,d;
                c = parseInt(prompt("Enter 1st number: "));
                d = parseInt(prompt("Enter 2nd number: "));
                console.log(c-d);    
            }

//Function: Multiplications
            function Multiplications() {
                var e,f;
                e = parseInt(prompt("Enter 1st number: "));
                f = parseInt(prompt("Enter 2nd number: "));
                console.log(e*f);    
            }

//Function: Multiplications
            function Multiplications() {
                var e,f;
                e = parseInt(prompt("Enter 1st number: "));
                f = parseInt(prompt("Enter 2nd number: "));
                console.log(e*f);    
            }

//Function: Division
            function Division() {
                var g,h;
                g = parseInt(prompt("Enter 1st number: "));
                h = parseInt(prompt("Enter 2nd number: "));
                console.log(g/h);    
            }
//Function: Module
            function module() {
                var x,z;
                x = parseInt(prompt("Enter 1st Number: "));
                z = parseInt(prompt("Enter 2nd Number: "));
                console.log(x%z);
            }
    
//Function 2: PRIME Number
function primeNumber() {

    const num = prompt("Enter positive number: ");
    var isPrime = true;
    
    if (num === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    else if (num > 1) {
    
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${num} is a prime number`);
        } else {
            console.log(`${num} is a not prime number`);
        }
    }
    
    else {
        console.log("The number is not a prime number.");
    }
    }


//Function 3: Repeated Words & Words Count
function wordcount(){
    var text = prompt("Enter you text: ");
    // const str = "big black bug bit a big black dog on his big black nose";
    const findDuplicateWords = text => {
       const strArr = text.split(" ");
       const res = [];
       for(let i = 0; i < strArr.length; i++){
          if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
             if(!res.includes(strArr[i])){
                res.push(strArr[i]);
             };
          };
       };
       return res.join(" ");
    };
    console.log(findDuplicateWords(text));
}

//Functions: Count Repeated words
function countRepeatedWords(){
    var text= prompt("Enter your text: ");
    const textArr = text.split(" ");
    const res1=[];
    for(let word of textArr){
          if( !res1[word]){
             res1[word]= 1;
          }
          else{
             res1[word]++;
          }
    };
    console.log(res1);
}

//Switch Cases
console.log("Enter 1 for Prime Number");
console.log("Enter 2 for Odd/Even");
console.log("Enter 3 for Repeated Word ");
console.log("Enter 4 for Addition");
console.log("Enter 5 for Substraction");
console.log("Enter 6 for Multiplication");
console.log("Enter 7 for Division");
console.log("Enter 8 for Module");
console.log("Enter 9 for xml2json");
console.log("Enter 10 for Count Repeated");
const choice = parseInt(prompt("Please enter your Choice: "));
switch(choice){
    case 1:
        primeNumber();
        break;

    case 2:
        evenodd();
        break;

    case 3:
        wordcount();
        break;

    case 4:
        addition();
        break;

    case 5:
        Subtraction();
        break;

    case 6:
        Multiplications();
        break;
    
    case 7:
        Division();
        break;
    
    case 8:
        module();
        break;

    case 9:
        xmltojson();
        break;

    case 10:
        countRepeatedWords();
        break;
    default:
        console.log("Invalid Choice");
    }