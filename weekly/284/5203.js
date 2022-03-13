/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
var digArtifacts = function (n, artifacts, dig) {
  const arr = new Array(n).fill(0).map((i) => new Array(n).fill(0));

  console.log(arr);
  for (let i = 0; i < artifacts.length; i++) {
    const areas = getWidth(artifacts[i]);
    artifacts[i] = areas;

    for (let i = 0; i < areas.length; i++) {
      const [x, y] = areas[i];
      arr[x][y] = 1;
    }
  }

  for (let i = 0; i < dig.length; i++) {
    const [x, y] = dig[i];
    if (arr[x][y] === 1) {
      arr[x][y] = 2;
    }
  }

  const result = []
  for (let i = 0; i < artifacts.length; i++) {
    const artifact = artifacts[i];
    const artifactLength = artifact.length;
    let r = 0;
    for (let j = 0; j < artifactLength; j++) {
      const [x, y] = artifact[j];
      if (arr[x][y] === 2) r++;
    }
    if (r === artifactLength) result.push(i);
  }

  return result.length
};

const getWidth = (artifact) => {
  const [r1, c1, r2, c2] = artifact;

  const result = [];

  for (let i = 0; i <= r2 - r1; i++) {
    for (let j = 0; j <= c2 - c1; j++) {
      result.push([r1 + i, c1 + j]);
    }
  }

  return result;
};

let n = 2,
  artifacts = [
    [0, 0, 0, 0],
    [0, 1, 1, 1],
  ],
  dig = [
    [0, 0],
    [0, 1],
  ];
console.log(digArtifacts(n, artifacts, dig));
