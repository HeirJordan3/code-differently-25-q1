/**
 * Returns true if the given year is a leap year, otherwise false.
 *
 * @param year
 * @returns
 */
export function isLeapYear(year: number): boolean {
  // want to check if the year is divisble by 4

   if (year % 400 === 0){
    return true;
  }

  if(year % 100 === 0){
    return false;
  }

 if(year % 4 === 0){
    return true
  }


  return false;
}

/**
 * Returns whether the given number is even or odd.
 *
 * @param num
 * @returns
 */
export function isEvenOrOdd(num: number): string {
 // If the number is divisible by 2, it's even
  if (num % 2 === 0) {
    return "even";
  }

  // If not divisible by 2, it's odd
  if (num % 2 !== 0) {
    return "odd";
  }

  // This return is just a fallback (should never hit this)
  return "";
}

/**
 * Returns whether a word contains a vowel or not.
 *
 * @param word
 * @returns
 */
export function hasVowel(word: string): boolean {
  const lowerCaseword = word.toLowerCase();


  if(lowerCaseword.includes('a')){
    return true;
  }

    if (lowerCaseword.includes("e")) {
      return true;
    }

      if (lowerCaseword.includes("i")) {
        return true;
      }


        if (lowerCaseword.includes("o")) {
          return true;
        }

          if (lowerCaseword.includes("u")) {
            return true;
          }

          return false;
}
