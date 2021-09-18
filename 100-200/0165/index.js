/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const versionArr1 = version1.split(".");
  const versionArr2 = version2.split(".");
  const length1 = versionArr1.length;
  const length2 = versionArr2.length;

  const arr = length1 > length2 ? versionArr1 : versionArr2;

  for (let i = 0; i < arr.length; i++) {
    const v1 = versionArr1[i] ? parseInt(versionArr1[i]) : 0;
    const v2 = versionArr2[i] ? parseInt(versionArr2[i]) : 0;
    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    }
  }

  return 0;
};
