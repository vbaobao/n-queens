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
        console.log('There is a row conflict');
        solution.rows()[x][y] = 0;
        break;
      }
      if (solution.hasAnyColConflicts()) {
        // If there is col conflict
        console.log('There is a col conflict');
        solution.rows()[x][y] = 0;
        continue;
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;//undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
