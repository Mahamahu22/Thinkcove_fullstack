
let inputValue = "car"; 
console.log(`Checking if "${inputValue}" is a palindrome...`);

const reverseInput = (text) => {
  return [...text].reverse().join('');
};

const isPalindrome = (original) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const reversed = reverseInput(original);
      if (original === reversed) {
        resolve(`Yes, "${original}" is a palindrome`);
      } else {
        reject(`No, "${original}" is not a palindrome`);
      }
    }, 500); 
  });
};

const check = async () => {
  try {
    const result = await isPalindrome(inputValue);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};


check();
