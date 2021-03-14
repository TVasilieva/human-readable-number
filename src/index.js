module.exports = function toReadable (number) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (0 <= number && number < 20) {
        return arr[number]
    } 

     if (20 <= number && number < 100) {
          let roundNumber= arrr[Math.floor(number/10) - 2];
          let i = number % 10;

          if(number%10 !== 0) {
              return roundNumber + ' ' + arr[i];
          } 
          return roundNumber;
      }
  
      if (100 <= number && number < 1000) {
          let hundreds = arr[Math.floor(number/100)];
          let dozens = arrr[Math.floor(number/10) -  Math.floor(number/100)*10 - 2];
          let num = arr[(number - (Math.floor(number/100)*100))%10];

          if (number%100 > 20 && number%10 !== 0) {
              return hundreds + ' hundred' + ' ' + dozens + ' ' + num;
          } else if (number%100 == 0) {
          return hundreds + ' hundred';
      } else if (number%100 > 0 && number%100 < 10) {
        return hundreds + ' hundred' + ' ' + num;
      } else if (number%100 >= 10 && number%100 < 20) {
        return hundreds + ' hundred' + ' ' + arr[(number - (Math.floor(number/100)*100))%10+10];
      }
      else if (number%10 == 0) {
          return hundreds + ' hundred' + ' ' + dozens;
      }
      }
}

