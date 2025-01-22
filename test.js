let arr = [1, 4, 5, 3, 53];

function printValue(num) {
  return new Promise((resoleve, reject) => {
    setTimeout(() => {
      console.log(num);
      resoleve();
    }, 2000);
  });
}

async function printAraay() {
  for (let i = 0; i < arr.length; i++) {
    await printValue(arr[i]);
  }
}

printAraay();
