/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let result = 0;
  for (let i = 0; i < preferences.length; i++) {
    let first = i;
    if (preferences[first] === 0) continue;

    let second = preferences[first] - 1;
    if (first === second) continue;
    if (preferences[second] === 0) continue;

    let third = preferences[second] - 1;
    if (second === third) continue;
    if (preferences[third] === 0) continue;

    let thirdLoves = preferences[third] - 1;
    console.log(first, second, third);
    if (thirdLoves === first) {
      preferences[first] = preferences[second] = preferences[third] = 0;
      result++;
    }
  }

  return result;
};
