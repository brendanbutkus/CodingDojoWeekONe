// Print odds 1-20
function printOdds(){
    for( i =1; i < 21; i ++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}

printOdds()

// Decreasing Multiples of 3
function decreasingMultiples(){
    for( i = 100; i >= 0; i --){
        if( i = 0){
            console.log(0)
        }
        else if( i % 3 ==0){
            console.log(i)
        }
    }
}

decreasingMultiples()

// Print the sequence
function printTheSequence(){
    for(i = 4; i > -4; i -= 1.5){
            console.log(i)
    }
}

 printTheSequence()

//  Sigma
function sigma(){
    var sum = 0;
    for( i = 1; i < 101; i++){
        sum = sum += i;
    }
    console.log(sum)
}

sigma()

// Factorial
function factorial(){
    var product = 1;
    for( i = 1; i < 13; i++){
        product = product * i;
    }
    console.log(product)
}

factorial()