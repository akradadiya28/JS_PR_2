let unit = 300;

let customerId = document.getElementById("customer").innerHTML = ("NR240803585PS");
let userUnit = document.getElementById("unit").innerHTML = unit;

let amt, totalAmt, surCharge;

if (unit <= 50) {
    amt = unit * 1;
} else if (unit <= 150) {
    amt = 25 + ((unit - 50) * 2);
} else if (unit <= 250) {
    amt = 50 + ((unit - 150) * 3);
} else if (unit > 250) {
    amt = 220 + ((unit - 250) * 4);
}

surCharge = amt * 0.20;
totalAmt = amt + surCharge;

let elctricityBill = document.getElementById("bill").innerHTML = totalAmt;
