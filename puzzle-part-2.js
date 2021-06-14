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

function checkDoublePair(n) {
  const patt = /(\d)\1{1}/g
  return patt.test(n)
}

function checkTrippleMorePair(n) {
  const patt = /(\d)\1{2,}/g
  return patt.test(n)
}

function returnMatchedDoublePair(n) {
  const str = n.toString()
  return str.match(/(\d)\1{1}/g)
}

function returnMatchedTrippleMorePair(n) {
  const str = n.toString()
  return str.match(/(\d)\1{2,}/g)
}

function checkPairGroup(n) {
  var matchedGroupDoublePair = returnMatchedDoublePair(n)
  var matchedGroupTrippleMorePair = returnMatchedTrippleMorePair(n)

  if (!matchedGroupTrippleMorePair) {
    return true
  }

  var hasNoPartOfLargerPair = false

  if (matchedGroupDoublePair.length > matchedGroupTrippleMorePair.length) {
    matchedGroupDoublePair.forEach((d) => {
      matchedGroupTrippleMorePair.forEach((t) => {
        if (!t.includes(d)) {
          hasNoPartOfLargerPair = true
        }
      })
    })
  }

  return hasNoPartOfLargerPair
}

for (let i=start; i<=end; i++) {
  var isNumberNotDecreasing = checkIncreasingNumber(i)
  var hasDouble = checkDoublePair(i)

  if (isNumberNotDecreasing && hasDouble) {
    var cpg = checkPairGroup(i)

    if (cpg) {
      totalMatched++
      console.log('Macthed number: ', i)
    }
  }
}

console.log('Total matched: ', totalMatched)