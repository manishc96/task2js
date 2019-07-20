var numArray=[1,2,3,4,5,6,7,8,9,10];
var num1=[];
var num2=[];
for(var value of numArray){
    if(value%2 === 0){
        num1+=value+" ";
    
    }
        else 
        {
            num2+=value+" ";
        }
    
    
}
console.log(num1);
console.log(num2);
        