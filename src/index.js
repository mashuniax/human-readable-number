module.exports = function toReadable (number) {
    let arr1 = ['zero', 'one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    console.log(arr1[number%10])
    console.log(arr1[Math.floor(number/100)])
    console.log(arr2[Math.floor(number%100/10) - 2])
    if (number < 20) {
        return arr1[number]
    } else if (number <= 99) {
        if (number%10 === 0) { 
            return arr2[number/10 - 2]
      } else {
       return arr2[Math.floor(number / 10) - 2] + ' ' + arr1[number%10]
      }
    } else if (number < 1000) {
        if (number%100 == 0) {
            return arr1[Math.floor(number/100)] + ' hundred'
        } else if (number%100 < 20) {
            return arr1[Math.floor(number/100)] + ' hundred ' + arr1[Math.floor(number%100)]
        } else if (number%10 == 0) {
            return arr1[Math.floor(number/100)] + ' hundred ' + arr2[Math.floor(number%100/10) - 2]
        } else {
            return arr1[Math.floor(number/100)] + ' hundred ' + arr2[Math.floor(number%100/10) - 2] + ' ' + arr1[number%10]
        }
   
        
        
    }
}
