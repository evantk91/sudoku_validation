const assert = require('assert')
const { isValidSudoku, isMatrixSquare, matrixColumns } = require('../index')

describe('checks if matrix is square', () => {
   it('returns true, matrix #1 is square', () => {
     const matrix =
       [ [1, 2, 3],
         [2, 3, 1],
         [3, 1, 2] ]
     output = true
     result = isMatrixSquare(matrix)
     assert.equal(result, output) 
   }) 

   it('returns false, matrix #2 is not square', () => {
     const matrix =
       [ [1, 2, 3, 4],
         [4, 3, 1, 2],
         [3, 4, 2, 1] ]
      output = false
      result = isMatrixSquare(matrix)
      assert.equal(result, output) 
  })
  
  it('returns false, matrix #3 is not square', () => {
    const matrix =
      [ [1, 2, 3],
        [4, 3, 1],
        [3, 4, 2],
        [2, 1, 4] ]
     output = false
     result = isMatrixSquare(matrix)
     assert.equal(result, output) 
 }) 
})

describe('returns columns of matrix in an array', () => {
    it('returns correct columns for square 3 X 3 matrix', () => {
      const matrix =
        [ [1, 2, 3],
          [2, 3, 1],
          [3, 1, 2] ]
      result = 
        [ [1, 2, 3],
          [2, 3, 1],
          [3, 1, 2] ] 
      output = matrixColumns(matrix)
      assert.deepEqual(result, output) 
    }) 
 
    it('returns correct columns of a 3 X 4 matrix', () => {
      const matrix =
        [ [1, 2, 3, 4],
          [4, 3, 1, 2],
          [3, 4, 2, 1] ]
       output = 
        [ [1, 4, 3],
          [2, 3, 4],
          [3, 1, 2],
          [4, 2, 1] ]
       result = matrixColumns(matrix)
       assert.deepEqual(result, output) 
   })
   
   it('returns correct columns of a 4 X 3 matrix', () => {
     const matrix =
       [ [1, 2, 3],
         [4, 3, 1],
         [3, 4, 2],
         [2, 1, 4] ]
      output =
       [ [1, 4, 3, 2],
         [2, 3, 4, 1],
         [3, 1, 2, 4] ]
      result = matrixColumns(matrix)
      assert.deepEqual(result, output) 
  }) 
 })
 
describe("checks if matrix is a valid sudoku puzzle", () => {
    it("returns true, sudoku puzzle is valid", () => {
        const matrix = 
          [ [1, 2, 3],
            [2, 3, 1],
            [3, 1, 2] ]
        output = true
        result = isValidSudoku(matrix)
        assert.equal(result, output)
    })

    it("returns false, sudoku puzzle is valid", () => {
        const matrix = 
          [ [1, 2, 3, 4],
            [2, 3, 1, 4],
            [3, 1, 2, 5],
            [4, 5, 1, 3] ]
        output = false
        result = isValidSudoku(matrix)
        assert.equal(result, output)
    })

    it("returns false, matrix is not square", () => {
        const matrix = 
          [ [4, 2, 3],
            [2, 4, 1],
            [3, 1, 2],
            [1, 3, 4] ]
        output = false
        result = isValidSudoku(matrix)
        assert.equal(result, output)
    })


})