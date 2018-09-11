// variables
var num1=0.0;
var num2=0.0;
var num3=0.0;
var ans=0.0;
var oper="";
var mode="";
var stay='';
var staynum=1;
// functions
function Add(num1,num2){
  ans = Number(num1) + Number(num2);
  return ans;
}

function subtract(num1,num2){
  ans = Number(num1) - Number(num2);
  return ans;
}

function Multiply(num1,num2){
  ans = Number(num1) * Number(num2);
  return ans;
}

function Divide(num1,num2){
  ans = Number(num1) / Number(num2);
  return ans;
}
function Power(num1,num2){
  ans = Math.pow(Number(num1),Number(num2));
  return ans;
}
function sRoot(num1){
  ans=Math.sqrt(Number(num1));
  return ans;
}
function Advanced(){
  oper=prompt('Do you want to find the [P]ower of a number or the s[q]uare root of a number?')
  oper= oper.toLowerCase();
  if (oper=="p"){
    num1=prompt("enter the root number");
    num2=prompt("enter the power number");
    num3=Power(num1,num2);
    alert("the Answer is "+num3);
  } else if(oper=="q"){
    num1=prompt("enter the number you want to square root");
    num3=sRoot(num1);
    alert("the Answer is "+num3);
  }else{}
}
function Basic(){
  num1=prompt("enter first number");
  num2=prompt('enter second number');
  oper=prompt("Do you want to [A]dd, [S]ubtract, [M]ulitply, or [D]ivide?");
  oper =oper.toLowerCase();
  switch (oper) {
    case 'a':
    num3 = Add(num1,num2);
    alert("the Answer is "+num3);
    break;
    case 's':
    num3 = subtract(num1,num2);
    alert("the answer is "+num3);
    break;
    case 'm':
    num3 = Multiply(num1,num2);
    alert("the answer is "+num3);
    break;
    case 'd':
    num3 = Divide(num1,num2);
    alert("the answer is "+num3);
    break;
    default:
  }
}
// main
  alert('welcome to the Calculator');
  mode=prompt("please choose mode: [A]davanced or [B]asic");
  mode = mode.toLowerCase();
  if (mode == "a"){
    do{
      Advanced();
      stay=prompt("To Recalculate type [y], to exit type[n]");
      stay =stay.toLowerCase;
      if (stay =="y"){
        staynum = 1;
      }else if(stay=="n"){
        staynum =0;
      }else{
        staynum = 1;
      }
    }while(staynum>0);

  }else if (mode =="b"){
    do{
      Basic();
      stay=prompt("To Recalculate type [y], to exit type[n]");
      stay =stay.toLowerCase;
      if (stay =="y"){
        staynum = 1;
      }else if(stay=="n"){
        staynum =0;
      }else{
        staynum = 1;
      }
    }while(staynum>0);
  }else{
    alert("Invalid Choice");
  }
