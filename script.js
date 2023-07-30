// var box=document.getElementById("box");
// let vowel=0;

// box.addEventListener("input",function(){
//     var x=box.value;
//     for(var i=0;i<x.length;i++){
//         if(x.charAt(i)=='a' || x.charAt(i)=='e' || x.charAt(i)=='i' || x.charAt(i)=='o' || x.charAt(i)=='u'){
//             vowel++;
//         }
//     }
// })
// document.getElementById("button").addEventListener("click",function(){
//     alert("Total number of vowels are : "+ vowel);
// })
// const vowels =['A','E','I','O','U','a','e','i','o','u'];
var vowelcounter=0;

document.getElementById("button").addEventListener("click",checkVowel);

function checkVowel(){
    var x=document.getElementById("box").value;
    var inputlength= x.length;

    for(var i=0;i<x.length;i++){
        if(x[i]=='a' || x[i]=='e' || x[i]=='i' || x[i]=='o' || x[i]=='u' || x[i]=='A'|| x[i]=='E'|| x[i]=='I' || x[i]=='O' ||x[i]=='U'){
            vowelcounter++;
        }
    }

    alert("There are "+ vowelcounter + " vowels!!!!");

    document.getElementById("box").value="";
    vowelcounter=0;

}