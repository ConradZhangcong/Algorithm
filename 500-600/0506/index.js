function findRelativeRanks(score) {
  const sortedScore = [...score].sort((x, y) => y - x);
  const map = {};
  for (let i = 0; i < sortedScore.length; i++) {
    if (i === 0) {
      map[sortedScore[0]] = "Gold Medal";
    } else if (i === 1) {
      map[sortedScore[1]] = "Silver Medal";
    } else if (i === 2) {
      map[sortedScore[2]] = "Bronze Medal";
    } else {
      map[sortedScore[i]] = i + 1 + "";
    }
  }

  for (let i = 0; i < score.length; i++) {
    score[i] = map[score[i]];
  }

  return score;
}
