function solution(players, callings) {
  const result = [...players];
  const runnerPosition = new Map();

  result.forEach((player, index) => {
    runnerPosition.set(player, index);
  });

  callings.forEach((calling) => {
    const calledIndex = runnerPosition.get(calling);
    const runner = result[calledIndex - 1];

    [result[calledIndex], result[calledIndex - 1]] = [
      result[calledIndex - 1],
      result[calledIndex],
    ];

    runnerPosition.set(runner, calledIndex);
    runnerPosition.set(calling, calledIndex - 1);
  });

  return result;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
