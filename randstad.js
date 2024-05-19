// Output
// {
//   "user1": {
//     "reading": 45,
//     "coding": 45
//   },
//   "user2": {
//     "coding": 120,
//     "reading": 60
//   }
// }

const activities = [
  { userId: "user1", activity: "reading", timeSpent: 30 },
  { userId: "user2", activity: "coding", timeSpent: 120 },
  { userId: "user1", activity: "coding", timeSpent: 45 },
  { userId: "user2", activity: "reading", timeSpent: 60 },
  { userId: "user1", activity: "reading", timeSpent: 15 },
];

function getOutPut(arr) {
  const output = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (output[el.userId]) {
      if (output[el.userId][el.activity]) {
        output[el.userId][el.activity] =
          output[el.userId][el.activity] + el.timeSpent;
      } else {
        output[el.userId][el.activity] = el.timeSpent;
      }
    } else {
      output[el.userId] = { [el.activity]: el.timeSpent };
    }
  }
  return output;
}

function getOutPut2(arr) {
  return arr.reduce((accumulator, current) => {
    const el = current;
    if (accumulator[el.userId]) {
      if (accumulator[el.userId][el.activity]) {
        accumulator[el.userId][el.activity] =
          accumulator[el.userId][el.activity] + el.timeSpent;
      } else {
        accumulator[el.userId][el.activity] = el.timeSpent;
      }
    } else {
      accumulator[el.userId] = { [el.activity]: el.timeSpent };
    }
    return accumulator;
  }, {});
}

console.log(getOutPut2(activities));
