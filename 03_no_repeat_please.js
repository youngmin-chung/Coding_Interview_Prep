function permAlone(str) {
  // Create a regex to match repeated consecutive characters.
  var regex = /(.)\1+/

  // find permutaions with duplicates
  let findPermutations = (string) => {
    if (!string || typeof string !== 'string') {
      return 'Please enter a string'
    } else if (string.length < 2) {
      return string
    }

    let permutationsArray = []

    for (let i = 0; i < string.length; i++) {
      let char = string[i]
      //    filter duplicate ones here, if no need duplicates
      //    if (string.indexOf(char) != i)
      //    continue

      let remainingChars =
        string.slice(0, i) + string.slice(i + 1, string.length)

      for (let permutation of findPermutations(remainingChars)) {
        permutationsArray.push(char + permutation)
      }
    }

    return permutationsArray
  }

  if (typeof findPermutations(str) === 'string') {
    return findPermutations(str).length
  } else {
    // Filter the array of repeated permutations.
    var filtered = findPermutations(str).filter(function (string) {
      return !string.match(regex)
    })
    console.log(filtered.length)
    return filtered.length
  }
}

permAlone('aab')      // return 2
permAlone('aaa')      // return 0
permAlone('aabb')     // return 8
permAlone('abcdefa')  // return 3600
permAlone('abfdefa')  // return 2640
permAlone('zzzzzzzz') // return 0
permAlone('a')        // return 1
permAlone('aaab')     // return 0
permAlone('aaabb')    // return 12

