// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  let count1 = {};
  let count2 = {};

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] = (count1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    count2[str2[j]] = (count2[str2[j]] || 0) + 1;
  }

  for (let key in count1) {
    if (count1[key] !== count2[key]) return false;
  }

  return true;
}

// Given two positive integers,
// find out if the two numbers have the same frequency of digits.
