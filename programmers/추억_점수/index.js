function solution(name, yearning, photo) {
  const score = new Map();
  const answer = [];
  let result = 0;

  name.forEach((key, index) => {
    score.set(key, yearning[index]);
  });

  console.log(score);

  for (let i = 0; i < photo.length; i++) {
    photo[i].forEach((name) => {
      console.log(name, score.get(name));
      if (score.get(name)) {
        result += score.get(name);
      }
    });

    answer.push(result);
    result = 0;
  }

  return answer;
}

solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ]
);
