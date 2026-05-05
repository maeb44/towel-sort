module.exports = function towelSort(matrix = []) {
  const arr1 = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const element = [...matrix[i]];
    if (i % 2 !== 0) {
      arr1.push(...element.reverse());
    } else {
      arr1.push(...element);
    }
  }
  return arr1;
};
