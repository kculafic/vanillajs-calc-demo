// this script was written as a "gist", based on the structure of the
// 2018 individual federal tax filing table here
//                      |
//                      |
//                      v
// https://www.hrblock.com/tax-center/wp-content/uploads/2017/12/Tax_Rate_Table_2018_TCJA.pdf


function calculateFederalIncomeTax(income) {
  console.log('income is $' + income);
  let taxRate;
  let overThreshold;
  let taxedAmount;
  let takeHome;

  if (income > 500000) {
    taxRate = 0.37;
    overThreshold = (income - 500000);
    taxedAmount = 150689.50 + (overThreshold * taxRate);
    takeHome = (income - taxedAmount);
    console.log('Taxed amount witheld is $' + taxedAmount);
    console.log('Total amount of take home pay $' + takeHome);
  } else if (income > 200000 && income < 500000) {
    taxRate = 0.35;
    overThreshold = (income - 200000);
    taxedAmount = 45689.5 + (overThreshold * taxRate);
    takeHome = (income - taxedAmount);
    console.log('Taxed amount witheld is $' + taxedAmount);
    console.log('Total amount of take home pay $' + takeHome);
  } else if (income > 157500 && income < 200000) {
    taxRate = 0.35;
    overThreshold = (income - 157500);
    taxedAmount = 32089.5 + (overThreshold * taxRate);
    takeHome = (income - taxedAmount);
    console.log('Taxed amount witheld is $' + taxedAmount);
    console.log('Total amount of take home pay $' + takeHome);
  } else if (income > 82500 && income < 157500) {
    taxRate = 0.24;
    overThreshold = (income - 82500);
    taxedAmount = 14089.5 + (overThreshold * taxRate);
    takeHome = (income - taxedAmount);
    console.log('Taxed amount witheld is $' + taxedAmount);
    console.log('Total amount of take home pay $' + takeHome);
  } else if (income > 38700 && income < 82500) {
    taxRate = 0.22;
    overThreshold = (income - 38700);
    taxedAmount = 4453.5 + (overThreshold * taxRate);
    takeHome = (income - taxedAmount);
    console.log('Taxed amount witheld is $' + taxedAmount);
    console.log('Total amount of take home pay $' + takeHome);
  } else if (income > 9525 && income < 38700) {
    taxRate = 0.12;
    overThreshold = (income - 9525);
    taxedAmount = 952.5 + (overThreshold * taxRate);
    takeHome = (income - taxedAmount);
    console.log('Taxed amount witheld is $' + taxedAmount);
    console.log('Total amount of take home pay $' + takeHome);
  } else if (income < 9525) {
    taxRate = 0.10;
    taxedAmount = (income * taxRate);
    takeHome = (income - taxedAmount);
    console.log('Taxed amount witheld is $' + taxedAmount);
    console.log('Total amount of take home pay $' + takeHome);
  }
}

calculateFederalIncomeTax(5000);
