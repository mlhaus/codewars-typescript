export class Kata {
  static squareDigits(num: number): number {
    // if(num == 0) {
    //   return 0;
    // }
    // let result = "";
    // while (num > 0) {
    //   const lastDigit = num % 10;
    //   num = Math.floor(num / 10); // Everything but the last digit
    //   const squaredDigit = lastDigit * lastDigit;
    //   result = squaredDigit + result;
    // }
    // return parseInt(result); // Convert the result string back to a number
    return +num.toString() // 1. Convert the number into a string, 5. Convert the string into a number
               .split('') // 2. Convert the string into an array of characters
               .map(n => Math.pow(+n,2)) // 3. Convert each string into a number, then square its value
               .join(''); // 4. Convert the array back into a string
  }
}