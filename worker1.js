onmessage = function (e) {
  let sum = 0;
  for (let i = 0; i < 544444000; i++) {
    sum += i;
  }
  postMessage(sum);
};
