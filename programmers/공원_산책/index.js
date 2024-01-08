function solution(park, routes) {
  let parkPositionIndex = park.reduce((accumulator, parkRow, index) => {
    if (parkRow.includes("S")) {
      return index;
    }

    return accumulator;
  }, 0);
  const result = [];

  routes.forEach((route) => {
    const trimmedRoute = route.split(" ").join("");
    const direction = trimmedRoute[0];
    const stepCount = Number(trimmedRoute[1]);
    const startPosition = park[parkPositionIndex].indexOf("S");
    const parkRowLength = park[parkPositionIndex].length;

    switch (direction) {
      case "E":
        if (parkRowLength > stepCount) {
          result[1] = stepCount;
        }

        break;
      case "W":
        if (result[1] >= stepCount) {
          result[1] -= stepCount;
        }

        break;
      case "S":
        const totalParkPosition = parkPositionIndex + stepCount;
        if (totalParkPosition < parkRowLength) {
          result[0] = stepCount;
          parkPositionIndex += stepCount;
        }

        break;
      case "N":
        if (parkPositionIndex - stepCount > 0) {
          result[0] -= stepCount;
          parkPositionIndex -= stepCount;
        }
    }
  });

  console.log(result);

  return result;
}

// solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]);
solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]);
