function findRelativeRanks(score: number[]): string[] {
  const sortedScore = [...score].sort((x, y) => y - x);
  const map: { [index: string]: string } = {};
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

  const result: string[] = [];
  for (let i = 0; i < score.length; i++) {
    result[i] = map[score[i]];
  }

  return result;
}
