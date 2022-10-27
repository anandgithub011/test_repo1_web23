//check prime number or not
let num=23;
let count=0;

for(let i=1; i<=num; i++){

   if(num % i==1){
    count++;
   }
}
if(count==2){
   console.log("Prime");
}else {
   console.log("not Prime");
}