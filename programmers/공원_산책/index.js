function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;
  let [positionX, positionY] = park.reduce(
    (position, row, rowIndex) => {
      const colIndex = row.indexOf("S");
      return colIndex !== -1 ? [rowIndex, colIndex] : position;
    },
    [0, 0]
  );

  routes.forEach((route) => {
    const [direction, steps] = route.split(" ");
    const numberSteps = Number(steps);
    const startPositionX = positionX;
    const startPositionY = positionY;

    let dx = 0;
    let dy = 0;

    if (direction === "N") dx = -1;
    if (direction === "S") dx = 1;
    if (direction === "W") dy = -1;
    if (direction === "E") dy = 1;
    let isEscape = false;

    for (let i = 0; i < numberSteps; i++) {
      if (
        positionY + dy >= W ||
        positionY + dy < 0 ||
        positionX + dx >= H ||
        positionX + dx < 0 ||
        park[positionX + dx][positionY + dy] === "X"
      ) {
        isEscape = true;

        break;
      }

      positionX += dx;
      positionY += dy;
    }

    if (isEscape) {
      positionX = startPositionX;
      positionY = startPositionY;
    }
  });

  return [positionX, positionY];
}

// console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
// console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
