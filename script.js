var num = 1;

while(num <= 100){
    if(num % 3 == 0 && num % 5 == 0){
        console.log("Fizzbuzz");
    }

    else if(num % 5 == 0){
        console.log("buzz");
    }

    else if(num % 3 == 0){
        console.log("fizz");
    } 
    else{
        console.log(num);
    }
    num++;
}