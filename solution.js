const fs = require('fs');

const decodeYValue = (base, value) => {
  return parseInt(value, base);
};

const lagrangeInterpolation = (points, xValue) => {
  let result = 0;
  const k = points.length;

  for (let i = 0; i < k; i++) {
    let term = points[i].y;
    for (let j = 0; j < k; j++) {
      if (i !== j) {
        term *= (xValue - points[j].x) / (points[i].x - points[j].x);
      }
    }
    result += term;
  }

  return result;
};

const findSecret = (inputFile) => {
  const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  const n = data.keys.n;
  const k = data.keys.k;

  let points = [];

  for (let i = 1; i <= n; i++) {
    if (data[i.toString()]) {
      const base = parseInt(data[i.toString()]["base"]);
      const value = data[i.toString()]["value"];
      const decodedY = decodeYValue(base, value);
      points.push({ x: i, y: decodedY });
    }
  }

  if (points.length < k) {
    throw new Error("Not enough points to solve the polynomial");
  }

  const secret = Math.round(lagrangeInterpolation(points.slice(0, k), 0));
  return secret;
};

const secret1 = findSecret('input1.json');
const secret2 = findSecret('input2.json');

const output = {
  "Secret for Testcase 1": secret1,
  "Secret for Testcase 2": secret2
};

console.log(output);

fs.writeFileSync('output.json', JSON.stringify(output, null, 2), 'utf8');
console.log('Output written to output.json');