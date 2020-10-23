
let x;
export default function diamond(x){
let a= " "
console.log("print a diamond with rows "+x);

for(let i=0; i<x; i++){
a="";

for(let j=i; j<x-1; j++)
a+=" ";

for (let z=i; z>=0; z--)
a+="* ";
console.log(a);
}
for(let i=0; i<x; i++){
a="";

for(let j=i; j>0; j--)
a+=" ";

for(let z=i; z<x; z++)
a+="* ";
console.log(a);
}
}
//diamond(n);

 

// function diamond(num){
//    let s ="";
//    let j = num;
//    for(let i=1; i<=num; i++){
//       s= "  ".repeat(j);
//       console.log(s," *  ".repeat(i));
//       s = "";
//       j--;
//    }
//       j = 1;
//       for(i=num; i>=1; i--){
//          s= "  ".repeat(j);
//          console.log(s," *  ".repeat(i));
//          s="";
//          j++;
//       }
//    }
   
//    diamond(process.argv[2]);
