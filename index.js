function isPalindrome(word) {
  // Write your algorithm here
  const palindromeWord =  word.split("").reverse().join("");
  return word === palindromeWord
}

/* 
  Add your pseudocode here
*/
// we initialize a variable to store the reversed word,then split the word into an array ,
// Then reverse the array inorder 
// To join the array into a string and ,
// compare the word to the reversed word which,
// return true if they are the same and finally,
// return false if they are not the same.
/*
  Add written explanation of your solution here
  1.we have an inbuilt function to reverse arrays, we change our word into an array
//2.We use the split("") then reverse the array then join them together
//3.we create a function that compares the word and the reversedword, if both match return true otherwise return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;