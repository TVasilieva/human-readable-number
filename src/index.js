module.exports = function toReadable (number) {
    let arr = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    if (0 <= number < 20) {
      let i = number;
      return arr[i]
  }
}
