(() => {
  function range(start: number, end: number, step = 1) {
    return {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        if (start < end) {
          const result = {
            done: false,
            value: start,
          };

          start += step;
          return result;
        }
        return { done: true, value: end };
      },
    };
  }

  function* genRange(start: number, end: number, step = 1) {
    while (start < end) {
      yield start;
      start += step;
    }
  }

  // 일반 함수
  for (const n of range(0, 100, 5)) {
    console.log(n);
  }

  // 제너레이터 함수
  for (const n of genRange(0, 100, 5)) {
    console.log(n);
  }
})();
