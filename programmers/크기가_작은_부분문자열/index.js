function solution(t, p) {
  const strLength = p.length;
  let result = 0;

  for (let i = 0; i < t.length; i++) {
    const slicedStr = t.substr(i, strLength);

    if (slicedStr.length === strLength) {
      if (Number(slicedStr) <= Number(p)) {
        result++;
      }
    }
  }

  return result;
}

solution("3141592", "271");
