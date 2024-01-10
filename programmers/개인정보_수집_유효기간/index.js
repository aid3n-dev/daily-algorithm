const MONTH_DAY = 28;

const calculateDay = (date) => {
  const [year, month, day] = date.split(".");

  return (
    Number(year) * 12 * MONTH_DAY + Number(month) * MONTH_DAY + Number(day)
  );
};

function solution(today, terms, privacies) {
  const termsMap = new Map();
  const result = [];

  terms.forEach((term) => {
    const [termKey, termValue] = term.split(" ");

    termsMap.set(termKey, termValue);
  });

  const calculatedToday = calculateDay(today);

  privacies.forEach((privacy, index) => {
    const [currentDate, term] = privacy.split(" ");
    const expiryDate =
      calculateDay(currentDate) + termsMap.get(term) * MONTH_DAY;

    if (expiryDate <= calculatedToday) {
      result.push(index + 1);
    }
  });

  return result;
}

solution(
  "2022.05.19",
  ["A 6", "B 12", "C 3"],
  ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
);

solution(
  "2020.01.01",
  ["Z 3", "D 5"],
  [
    "2019.01.01 D",
    "2019.11.15 Z",
    "2019.08.02 D",
    "2019.07.01 D",
    "2018.12.28 Z",
  ]
);
