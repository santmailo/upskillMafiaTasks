const checkDivision = async (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Dividing ", a, "by", b);
      if (b != 0) resolve("Result: " + a / b + "\n");
      reject("Error: Division by zero is not allowed.\n");
    }, 1000);
  });
};

const checkResult = async (a, b) => {
  try {
    const data = await checkDivision(a, b);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

checkResult(10, 5);
checkResult(10, 0);
checkResult(100, 25);
checkResult(33, 3);
checkResult(99, 57);
