// Code your solution here!

function printString(input){
    if(input.length === 1){
        console.log(input); 
    } else {
        let first = input[0]
        console.log(first);
       return printString(input.substring(1, input.length)) 
    }
}

function reverseString(input){
    if(input.length === 1){
        return input
    } else {
        return reverseString(input.substring(1, input.length)) + input[0]
    }
}

function isPalindrome(input){
    if(input[0] === " "){
        return isPalindrome(input.substring(1, input.length))
    } else if(input[input.length-1] === " ") {
        return isPalindrome(input.substring(0, input.length-1))
    }
    if(input.length === 1){
        return true
    } else if (input.length === 2){
        if(input[0] === input[1]){
            return true 
        } else {
            return false
        }
    } else {
        if(input[0] === input[input.length-1]){
            return isPalindrome(input.substring(1, input.length-1))
        } else {
            return false
        }
    }
}


function addUpTo(array, index){
    if(index === 0){
        return array[0]
    } else {
        index -= 1
        return addUpTo(array.slice(1, array.length), index) + array[0]
    }
}   

function maxOf(array) {
    if(array.length === 1){
        return array[0]
    } else {
        if(array[0] > array[array.length-1]){
            return maxOf(array.slice(0, array.length-1))
        } else {
            return maxOf(array.slice(1, array.length))
        }
    }
}


function includesNumber(array, num){
    if(array[0] === num){
        return true
    } else {
        if(array.length > 1){
            return includesNumber(array.slice(1, array.length), num)
        } else {
            return false
        }
    }
}


// debugger