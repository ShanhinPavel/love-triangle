/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;


for (var i = 0; i < preferences.length; i++){
  let pre = preferences[preferences[preferences[i]]];
  let pre1 = preferences[i + 1];

if (pre === pre1) {
  count++;
}
}
return count / 2;
};
