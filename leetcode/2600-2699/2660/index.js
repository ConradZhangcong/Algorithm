/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  const getScroe = (list) => {
    let score = 0
    for (let i = 0; i < list.length; i++) {
      if ((i > 0 && list[i - 1] === 10) || (i > 1 && list[i - 2] === 10)) {
        score += (list[i] * 2)
      } else {
        score += list[i]
      }
    }
    return score
  }

  const score1 = getScroe(player1)
  const score2 = getScroe(player2)
  if (score1 === score2) return 0
  return score1 > score2 ? 1 : 2
};
