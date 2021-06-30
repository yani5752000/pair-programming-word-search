const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    const newLetters = transpose(letters);
    const vertJoin = newLetters.map(ls => ls.join(''))
    for (l of vertJoin) {
        if (l.includes(word)) {
           return true;
        }
    }
    return false
}


const transpose = function(matrix) {
    let r = matrix.length;
    let c = matrix[0].length;
  
    let output = [];
    for (let i = 0; i < c; i++) {
      let inp = [];
      for (let j = 0; j < r; j++) {
        inp.push(matrix[j][i]);
      }
      output.push(inp);
    }
  
    return output;
  };


module.exports = wordSearch