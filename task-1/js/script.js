let unit = 300;

let customerId = document.getElementById("customer").innerHTML = ("NR240803585PS");
let userUnit = document.getElementById("unit").innerHTML = unit;

let amt, totalAmt, surCharge;

if (unit <= 50) {
    amt = unit * 1;
} else if (unit <= 150) {
    amt = unit * 2;
} else if (unit <= 250) {
    per = (3 / 100) * 20;
    amt = (unit * 3) + per;
} else if (unit > 250) {
    per = (4 / 100) * 20;
    amt = (unit * 4) + per;
}

surCharge = amt * 0.20;
totalAmt = amt + surCharge;

let elctricityBill = document.getElementById("bill").innerHTML = totalAmt;
