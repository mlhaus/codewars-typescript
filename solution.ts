export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]): number {
  // let count = arrayOfSheep.reduce((accumulator, sheep) => {
  //   if(sheep != undefined && sheep != null && sheep) {
  //     return accumulator + 1;
  //   }
  //   return accumulator;
  // }, 0); // 0 refers to the inital value of the accumulator, which is the count of sheeps
  // return count;
  return arrayOfSheep.filter(Boolean).length;
}