module.exports = function toReadable (number) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrr = ['twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    if (0 <= number && number < 20) {
      return arr[number]
  } 
    if (20 <= number < 100) {
        let roundNumber= arrr[Math.floor(number/10) - 2];
        let i = number % 10;
        if(number%10 !== 0) {
            return roundNumber + arr[i];
        }
        return roundNumber.slice(0, -1);
    }
}
