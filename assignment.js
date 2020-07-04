function dis(val) {
  document.getElementById("result").value += val;
}
function clr() {
  document.getElementById("result").value = "";
}
function solve() {
  let x = document.getElementById("result").value;
  var n = x.includes("√");
  var n1 = x.includes("%");
  var n2 = x.includes("+");
  var n3 = x.includes("-");
  var n4 = x.includes("*");
  var n5 = x.includes("/");
  if (n2 == true) {
    add(x);
  }
  if (n3 == true) {
    sub(x);
  }
  if (n4 == true) {
    mul(x);
  }
  if (n5 == true) {
    div(x);
  }
  if (x < 0) {
    abs(x);
  }
  if (n == true) {
    sqrt(x);
  }
  if (n1 == true) {
    per(x);
  }
}
function add() {
  var x = document.getElementById("result").value;
  var res = x.split("+");

  var num1 = parseInt(res[0]);
  var num2 = parseInt(res[1]);
  ans = num1 + num2;
  ans = ans.toString();
  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}
function sub() {
  var x = document.getElementById("result").value;
  var res = x.split("-");

  var num1 = parseInt(res[0]);
  var num2 = parseInt(res[1]);
  ans = num1 - num2;
  ans = ans.toString();
  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}
function mul() {
  var x = document.getElementById("result").value;
  var res = x.split("*");

  var num1 = parseInt(res[0]);
  var num2 = parseInt(res[1]);
  ans = num1 * num2;
  ans = ans.toString();
  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}
function div() {
  var x = document.getElementById("result").value;
  var res = x.split("/");

  var num1 = parseInt(res[0]);
  var num2 = parseInt(res[1]);
  ans = num1 / num2;

  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}
function sqrt() {
  var x = document.getElementById("result").value;
  var r1 = Number.isInteger(x);
  if (r1 == false) {
    x = r1.toFixed(3);
  } else {
    x = x;
  }
  y = x.replace("√", "");
  ans = Math.sqrt(y);

  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}

function per() {
  var x = document.getElementById("result").value;
  var res = x.split("%");

  var num1 = res[0];
  var num2 = res[1];
  ans = (num1 / 100) * num2;
  ans = ans.toString();
  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}
function abs() {
  let x = document.getElementById("result").value;
  if (x < 0) {
    x = x * -1;
  }
  document.getElementById("result").value = x;
  document.getElementById("result").disabled = true;
}

/* validation */

function validate() {
  var no = document.getElementById("no").value;
  var phoneno = /^\d{10}$/;
  if (no.match(phoneno)) {
  } else {
    alert("Not a valid Phone Number");
    return false;
  }
  var x = document.getElementById("email").value;

  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    alert("Please enter a valid e-mail address:");
    return false;
  }

  var name = document.getElementById("name").value;
  if (!isNaN(name.charAt(0))) {
    alert("First Character Cant be number in Name.");
  }
}
/*palindrome*/
function pali() {
  var string = document.getElementById("pali").value;
  var i,
    st = "";
  for (i = string.length - 1; i >= 0; i--) {
    st += string[i];
  }
  var n = st.localeCompare(string);
  if (n == 0) {
    alert("Palindromic String");
    return true;
  } else {
    alert("Not Palindromic String");
    return false;
  }
}
/*anagram*/
function anagram() {
  var ana1 = document.getElementById("ana1").value;
  var ana2 = document.getElementById("ana2").value;
  var a1 = ana1.toLowerCase();
  var a2 = ana2.toLowerCase();
  var arr = a1.split(" ").join("");
  var sorted = arr.split("").sort();
  var ip1 = sorted.join("");

  var arr = a2.split(" ").join("");
  var sorted = arr.split("").sort();
  var ip2 = sorted.join("");
  var p = ip2.localeCompare(ip1);

  if (p != 0) {
    alert("Not Anagram");
    return false;
  } else {
    alert("Anagram");
    return true;
  }
}

//random

function rand1() {
  document.getElementById("input1").value = Math.floor(Math.random() * 1000);
}
function rand2() {
  document.getElementById("input2").value = Math.floor(Math.random() * 1000);
}

//play

function play() {
  var x = document.getElementById("input1").value;
  var y = document.getElementById("input2").value;
  if (x == "") {
    alert("please generate number:");
    return false;
  }
  var r = sub_fun(x);
  var s = sub_fun(y);
  if (r == s) {
    alert("TIE :");
    return false;
  }

  if (r == 1 && s == 2) {
    alert("Inputs are 'Human' and 'Cockroach',so 'Human' survive.");
    return false;
  }
  if (r == 2 && s == 1) {
    alert("Inputs are  'Cockroach' and  'Human',so 'Human' survive.");
    return false;
  }
  if (r == 1 && s == 3) {
    alert("Inputs are   'Human' and 'Bomb',so 'Bomb' survive.");
    return false;
  }
  if (r == 3 && s == 1) {
    alert("Inputs are   'Bomb' and 'Human',so 'Bomb' survive.");
    return false;
  }

  if (r == 2 && s == 3) {
    alert("Inputs are   'Cockroach' and 'Bomb',so 'Cockroach' survive.");
    return false;
  }
  if (r == 3 && s == 2) {
    alert("Inputs are   'Bomb' and 'Cockroach',so 'Cockroach' survive.");
    return false;
  }
}

function sub_fun(p) {
  if (p >= 0 && p <= 250) {
    return 1;
  }

  if (p > 250 && p <= 500) {
    return 2;
  }

  if (p > 500 && p <= 1000) {
    return 3;
  }
}
