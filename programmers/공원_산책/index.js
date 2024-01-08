const findStartPosition = (park) => {
  return park.reduce(
    (position, row, rowIndex) => {
      const colIndex = row.indexOf("S");
      return colIndex !== -1 ? [rowIndex, colIndex] : position;
    },
    [0, 0]
  );
};

function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;
  let [positionX, positionY] = findStartPosition(park);

  const canMove = (dx, dy, steps) => {
    let newX = positionX;
    let newY = positionY;

    for (let i = 0; i < steps; i++) {
      newX += dx;
      newY += dy;

      if (
        newY >= W ||
        newY < 0 ||
        newX >= H ||
        newX < 0 ||
        park[newX][newY] === "X"
      ) {
        return false;
      }
    }

    return true;
  };

  routes.forEach((route) => {
    const [direction, steps] = route.split(" ");
    const numberSteps = Number(steps);

    let dx = 0;
    let dy = 0;

    if (direction === "N") dx = -1;
    if (direction === "S") dx = 1;
    if (direction === "W") dy = -1;
    if (direction === "E") dy = 1;

    if (canMove(dx, dy, numberSteps)) {
      positionX += dx * steps;
      positionY += dy * steps;
    }
  });

  return [positionX, positionY];
}

// console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
// console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));
