// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My Solution:
function findShort(s){ 
    let convertToArray = s.split(" ")
    let answer = convertToArray.reduce((a, b) => a.length <= b.length ? a : b)
    return answer.length
  }
  