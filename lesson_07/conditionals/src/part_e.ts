/**
 * Write a function that takes a single character as an argument and
 * returns boolean value true if the character is an uppercase letter.
 *
 * @param char
 * @returns
 */
export function isUppercase(char: string): boolean {
  return false;
}

/**
 * Determine if a person is eligible for a driving license (age and test passed).
 *
 * @param age
 * @param passedTest
 * @returns
 */
export function canGetDriverLicense(age: number, passedTest: boolean): boolean {
  return false;
}

/**
 * Check if a store is open based on the day and time. The store is open
 * Monday to Saturday from 9 AM to 9 PM.
 *
 * @param day
 * @param hour
 * @returns
 */

//
export function isStoreOpen(day: string, hour: number): boolean {

  const lowerDay = day.toLowerCase();

  //if the day is sunday the store is closed 
  if(lowerDay === "sunday"){
    return false;
  }

  // if the store is open before 9am return false
  if(hour < 9){
    return false
  }

  return false;
}
