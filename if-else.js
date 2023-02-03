let a= prompt("What is your age ?")
a = Number.parseInt(a);
if(a<0){
alert("this is an  invalid age");
}
else if(a<9){
  alert("you are not allowed to think about driving");
}
else if (a>=9 && a<18){
  alert("you are a kid and you think about driving after 18");
}
else if(a>18){
  alert("you are eligible to drive ");
}
