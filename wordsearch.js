const transpose = function(matrix) {
    if(matrix.length >0) { //need to check if we have values
      let tempArr =[];
      const rows = matrix.length;
      const col = matrix[0].length; //1st index length
      for(let j=0; j < col; j++) { //from col we creating rows
      tempArr[j] = Array(rows)
      };
    // console.log(tempArr)
      for(let i=0 ;i < rows ; i++){ 
        for(let j=0 ; j<col ; j++){
          tempArr[j][i]=matrix[i][j];
        }
      }
      return tempArr
    }
  }  
  
  const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
      for (l of horizontalJoin) {
        if (l.includes(word)) {
          return true;
            }
      }  
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
      if (l.includes(word)) {
        return true;
          }
        }
        return false;
      }


module.exports = wordSearch


