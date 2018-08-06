let moneyInput = document.getElementById("moneyin");
let test = document.getElementById("div1").textContent;
let clicked = document.getElementById("runner");
let saveRateButton = document.getElementById("saverate");
let modifiedInterestRate = document.getElementById("rate");

let saveYearsButton = document.getElementById("saveyears");
let modifiedYears = document.getElementById("years");

let rate = 0.027;
let years = 15;
let holderArray = [];
let year = 2018;

clicked.onclick = run;
saveRateButton.onclick = saveRate;
saveYearsButton.onclick = saveYears;

function saveRate() {
  if (modifiedInterestRate.value) {
    rate = modifiedInterestRate.value;
  }
  console.log("rate is ..." + modifiedInterestRate.value);
}

function saveYears() {
  if (modifiedYears.value) {
    years = modifiedYears.value - 1;
  }
  console.log("# of years  ..." + modifiedYears.value);
}

function projection(input) {
  let parsedInput = parseFloat(input).toFixed(2);
  console.log("original input is $" + parsedInput);

  holderArray.push(input);

  for (let i = 1; i <= years; i++) {
    let interest = holderArray[i - 1] * rate + holderArray[i - 1];
    let parsedResult = parseFloat(Math.round(interest * 100) / 100).toFixed(2);
    holderArray.push(parseInt(parsedResult));
  }
  console.log(holderArray);
  console.log("Final value is $" + holderArray[holderArray.length - 1]);
}

function run() {
  console.log("....changing..");
  console.log(moneyInput.value);
  let parsed = parseInt(moneyInput.value);
  projection(parsed);

  // var newDiv = document.createElement("div");

  // for (let i = 0; i <= holderArray.length - 1; i++) {
  //   var el = document.createElement("ul");
  //   el.innerText = "$" + holderArray[i];
  //   var newContent = document.createTextNode(holderArray[i]);
  //   newDiv.appendChild(el);
  // }
  // var currentDiv = document.getElementById("div1");
  // document.body.insertBefore(newDiv, currentDiv);

  var newDiv = document.createElement("div");
  var tableRef = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];
  var tableYearHeaderRef = document
    .getElementById("myTable")
    .getElementsByTagName("thead")[0];

  // Insert a row in the table at the last row

  // var newRow = tableRef.insertRow(tableRef.rows.length);
  var newRow = tableRef.insertRow();

  // var yearCounter = tableYearHeaderRef.insertRow(tableRef.rows.length);

  for (let j = 0; j <= holderArray.length - 1; j++) {
    var yearEl = document.createElement("td");
    yearEl.innerText = year;
    var newYearCell = newRow.insertCell();
    newYearCell.appendChild(yearEl);

    year++;
  }

  for (let i = 0; i <= holderArray.length - 1; i++) {
    var el = document.createElement("ul");
    el.innerText = "$" + holderArray[i];

    // var newContent = document.createTextNode(holderArray[i]);
    var newCell = newRow.insertCell();

    newCell.appendChild(el);
  }
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
