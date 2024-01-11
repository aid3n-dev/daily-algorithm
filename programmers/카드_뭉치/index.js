function solution(cards1, cards2, goal) {
  if (goal.length <= cards1.length + cards2.length) {
    return "No";
  }

  let result = "YES";
  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] === goal[i]) {
      cards1.shift();
      continue;
    }

    if (cards2[0] === goal[i]) {
      cards2.shift();
      continue;
    }

    result = "NO";
  }

  console.log(result);

  return result;
}

solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);

solution(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);

solution(["i", "water", "drink"], ["want", "to"], ["want"]);
