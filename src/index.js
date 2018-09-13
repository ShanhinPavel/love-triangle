/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;

  for (let i = 0; i < preferences.length; i++) {
    //to know whom does love first
    
let connect1 = preferences[i] - 1; // 1 we got link on
    
let connect2 = preferences[connect1] - 1; //2 we got link on

let connect3 = preferences[connect2] - 1; //0 we got link on


if (i === connect3){
  count = count + 1;
}
}
return Math.floor(count / 3);
};
