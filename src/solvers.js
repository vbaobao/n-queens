/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var numRows = n;
  var solution = new Board({n: numRows});
  // n x n we assume we have array matrix
  // assume n : rows, n : cols

  for ( var x = 0; x < n; x++) { // Traverse to x axis
    for (var y = 0; y < n; y++) { // Traverse y axis
      if (solution.rows()[x][y] === 1) {
        break;
      }
      solution.rows()[x][y] = 1;
      if (solution.hasAnyRowConflicts()) {
        // If there is row conflict
        solution.rows()[x][y] = 0;
        break;
      }
      if (solution.hasAnyColConflicts()) {
        // If there is col conflict
        solution.rows()[x][y] = 0;
        continue;
      }
    }
  }
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;//undefined; //fixme
  if (n < 2) {
    return 1;
  }

  solutionCount = n * window.countNRooksSolutions(n - 1);

  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let numRows = n;

  if ( n === 0 ) { return []; }
  if ( n === 1 ) { return [[1]]; }
  if ( n === 2 ) { return [[], []]; }
  if ( n === 3 ) { return [[], [], []]; }

  var solution = new Board({n: numRows});
  var solutionBoard = [];

  var recurse = function (row) {
    if ( row === n ) {
      solutionBoard = [];
      for ( let i = 0; i < solution.rows().length; i++) {
        solutionBoard.push([...solution.get(i)]);
      }
      return;
    } else {
      for ( var col = 0; col < n; col++) {

        solution.togglePiece(row, col);

        if (!solution.hasAnyQueensConflicts()) {
          recurse(row + 1);
        }

        solution.togglePiece(row, col);
      }
    }
  };

  recurse(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutionBoard));
  return solutionBoard;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let numRows = n;

  if ( n === 0 || n === 1 ) { return 1; }
  if ( n === 2 || n === 3 ) { return 0; }

  var solution = new Board({n: numRows});
  var solutionBoard = [];
  var solutionCount = 0;

  var recurse = function (row) {
    if ( row === n ) {
      solutionCount++;
      return;
    } else {
      for ( var col = 0; col < n; col++) {

        solution.togglePiece(row, col);

        if (!solution.hasAnyQueensConflicts()) {
          recurse(row + 1);
        }

        solution.togglePiece(row, col);
      }
    }
  };

  recurse(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

/* Time Complexity
 * hasRowConflictAt() -> O(n);
 * hasAnyRowConflicts() -> O(n**2);
 * hasColConflictAt() -> O(n);
 * hasAnyColConflicts() -> O(n**2);
 * hasMajorDiagonalConflictAt() -> O(n);
 * hasAnyMajorDiagonalConflicts() -> O(n**2);
 * hasMinorDiagonalConflictAt() -> O(n);
 * hasAnyMinorDiagonalConflicts() -> O(n**2);
 * findNRooksSolution() -> O(n**2);
 * countNRooksSolutions() -> O(n);
 * findNQueensSolution() -> O(n**2);
 * countNQueensSolutions() -> O(n**2);
 */