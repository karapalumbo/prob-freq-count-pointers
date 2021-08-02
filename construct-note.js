// add whatever parameters you deem necessary

function constructNote(msg, letters) {
  let msgChars = {};
  let letterChars = {};

  for (let char of msg) {
    msgChars[char] = ++msgChars[char] || 1;
  }

  for (let char of letters) {
    letterChars[char] = ++letterChars[char] || 1;
  }

  for (let char in msgChars) {
    if (!letterChars[char]) {
      return false;
    }
    if (msgChars[char] > letterChars[char]) {
      return false;
    }
  }
  return true;
}

constructNote("abcde", "abc");
