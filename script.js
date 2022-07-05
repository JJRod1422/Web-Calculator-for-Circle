//This function "cirucmCalc" Calculates Circumference.


function area(){
  var r = document.getElementById("rad").value;
  var answer;
  r = parseFloat(r);
  pi=3.14;
  area=pi*r*r; 
  document.getElementById("art").innerHTML = "The area for Radius is  " + area + "! " ; 
  }
//This function solves the Circumference. When Radius is put in.
function circum(){
  var c = document.getElementById("circle").value;
  var answer;
  c = parseFloat(c);
  pi=3.14;
  num=2;
  circum = num*pi*c;
  document.getElementById("circ").innerHTML = "The Circumference for Radius is " + circum + "! "
}
//This function solves the Circumference when user ONLY has diameter.
function diam(){
  var diam = document.getElementById("diam").value;
  var answer;
  pi=3.14;
  diam = pi*diam; 
  document.getElementById("dim").innerHTML = "The Circumference is " + diam + "! " ; 
//This Function gives area when the user inputs ONLY the diameter.
}
function areaDiam(){
  var areaD = document.getElementById("areaD").value;
  var answer;
  pi=3.14;
  num=2
  d = pi*((areaD/num)*(areaD/num)); 

  document.getElementById("arc").innerHTML = "The Area is " + d + "! " ; 
 

}
//This function solves Radius when given ONLY the Circumference
function givenC(){
  var o = document.getElementById("cr").value;
  var answer;
  pi=3.14;
  num=2
  c = o/(num*pi)
  
  document.getElementById("radi").innerHTML = "The Radius is  " + c + "! " ; 


}
//This function gives out the diameter when the user ONLY has Circumference
function givenD(){
  var o = document.getElementById("dd").value;
  var answer;
  
  pi=3.14;
   
  d = o/(pi);
  
document.getElementById("dit").innerHTML = "The Diameter is " + d + "! " ; 


}
