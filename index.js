module.exports = {
  isMatrixSquare,
  matrixColumns,  
  isValidSudoku    
}

function isMatrixSquare(matrix) {
  if(matrix.length !== matrix[0].length) {
    return false; 
  } else {
    return true;   
  }   
}

function matrixColumns(matrix) {
  let cols = [];  
  for(let i = 0; i < matrix[0].length; i++) {
    let col = []
      for(let j = 0; j < matrix.length; j++) {
        col.push(matrix[j][i]);
      }
    cols.push(col);
  }

  return cols;
}

function validNumbers(matrix) {
  let requiredNumbers = Array.from(Array(matrix.length), (_, i) => i + 1)

  for (let i = 0; i < matrix.length; i++) {
    let array = matrix[i];
    let sortedArray = array.sort();
    for (let j = 0; j < matrix.length; j++) {
      if(sortedArray[j] !== requiredNumbers[j]) {
        return false
      }    
    }
  }

  return true
}

// [ [1, 2, 3], [2, 1, 3], [3, 1, 2] ]
function isValidSudoku(matrix) {
   let rows = matrix;
   let cols = matrixColumns(matrix)
   let valid = true;

   valid = validNumbers(rows) && validNumbers(cols);

   if(!isMatrixSquare(matrix)) {
      valid = false 
   }

   return valid
}