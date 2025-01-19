// masala 11

function frontBack(str){
    if(str.length != 1) {
      return str.slice(str.length - 1) + str.slice(1, str.length - 1) + str.slice(0, 1) 
    } else {
      return str
    }
}
frontBack("Javascript");

// masala 12

function front3(str){
    if(str.length <= 3) {
      return str + str + str
    } else {
      return str.slice(0, 3) + str.slice(0, 3) + str.slice(0, 3)
    }
}
front3("Javascript")

// masala 13

function backAround(str){
    return str.charAt(str.length - 1) + str + str.charAt(str.length - 1)
}
backAround("Javascript")

// masala 14

function or35(n){
    if(n % 3 == 0 || n % 5 == 0) {
      return true
    } else {
      return false
    }
}
or35(15)

// masala 15

function front22(str){
    return str.slice(0, 2) + str + str.slice(0, 2)
}
front22('Javascript')

// masala 16

function startHi(str){
    if(str.slice(0, 2) == 'hi') {
      return true
    } else {
      return false
    }
}
startHi("Javascript");

// masala 17

function icyHot(temp1, temp2){
    if ((temp1 < 0 && temp2 > 100) || (temp2 < 0 && temp1 > 100)) {
      return true
    } else {
      return false
    }
}
icyHot();

// masala 18

function in1020(a, b){
    if(a >= 10 && a <= 20) {
      return true
    } else if (b >= 10 && b <= 20) {
      return true 
    } else {
      return false
    }
}
in1020();

// masala 19

function hasTeen(a, b, c){
    if((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)) {
      return true
    } else {
      return false
    }
}
hasTeen();

// masala 20

function loneTeen(a, b){
    if((a >= 13 && a <= 19) && (b>= 13 && b<= 19)) {
         return false
    }  else {
      return false
    }
}
loneTeen();

// masala 21

function delDel(str){
    if(str.slice(1, 4) == 'del') {
      return str.slice(0, 1) + str.slice(4)
    } else {
     return str
    }
}
delDel();

// masala 22

function mixStart(str){
    if(str.slice(1, 3) == 'ix') {
      return true
    } else {
      return false
    }
}
mixStart();

// masala 23

function startOz(str){
    if(str.charAt(0) == 'o' && str.charAt(1) == 'z') {
      return 'oz'
    } else if (str.charAt(0) == 'o') {
      return 'o'
    } else if (str.charAt(1) == 'z') {
      return 'z'
    } else {
      return ''
    }
}
startOz();

// masala 24

function intMax(a, b, c){
    if(a > b && a > c) {
      return a
    } else if (b > a && b > c) {
      return b
    } else if (c > b && c > a) {
      return c
    } 
}
intMax();

// masala 25

function close10(a, b){
    let firstUpTo = Math.abs(a - 10);
    let secondUpTo = Math.abs(b - 10);
  
    if(firstUpTo > secondUpTo) {
      return b
    } else if(firstUpTo < secondUpTo) {
      return a
    } else if (firstUpTo == secondUpTo){
      return 0
    }
}
close10();

// masala 26

function in3050(a, b){
    if((a >= 30 && a <= 40) && (b >= 30 && b <= 40)) {
      return true
    } else if ((a >= 40 && a <= 50) && (b >= 40 && b <= 50)) {
      return true
    } else {
      return false
    }
}
in3050();