const start = 171309
const end = 643603
var totalMatched = 0

function checkIncreasingNumber(n) {
	var textNumber = n.toString()
  var textSplit = textNumber.split('')
  var textSplitLen = textSplit.length
	var currentNum = 0
  
	for (let i=0; i<textSplitLen; i++) {
    var textSplitNum = parseInt(textSplit[i])
    if (textSplitNum < currentNum) {
    	return false
    }
    
    currentNum = parseInt(textSplit[i])
  }
  
  return true
}

function checkDoubleDigitPair(n) {
  const patt = /(\d)\1{1}/g
  return patt.test(n)
}

for (let i=start; i<=end; i++) {
  var isNumberNotDecreasing = checkIncreasingNumber(i)
  var hasDouble = checkDoubleDigitPair(i)

  if (isNumberNotDecreasing && hasDouble) {
    totalMatched++
    console.log('Macthed number: ', i)
  }
}

console.log('Total matched: ', totalMatched)