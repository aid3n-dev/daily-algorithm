function solution(wallpaper) {
  let lux = Infinity;
  let luy = Infinity;
  let rdx = 0;
  let rdy = 0;

  wallpaper.forEach((row, rowIndex) => {
    let isHaveFile = false;
    let isRowChange = false;
    let isColChange = false;

    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      if (wallpaper[rowIndex][colIndex] === "#") {
        lux = Math.min(lux, rowIndex);
        luy = Math.min(luy, colIndex);
        if (rowIndex >= Math.max(rdx, rowIndex)) {
          isRowChange = true;
        }

        rdx = Math.max(rdx, rowIndex);

        if (colIndex >= Math.max(rdy, colIndex)) {
          isColChange = true;
        }

        rdy = Math.max(rdy, colIndex);

        isHaveFile = true;
      }
    }

    if (isHaveFile && isRowChange) {
      rdx++;
    }

    if (isHaveFile && isColChange) {
      rdy++;
    }
  });

  return [lux, luy, rdx, rdy];
}

console.log(solution([".#...", "..#..", "...#."]));
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
);
console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
);
console.log(solution(["..", "#."]));
