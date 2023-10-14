const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

const [liczbaPrzekazanaWTerminalu1, liczbaPrzekazanaWTerminalu2] =
  process.argv.slice(2);

const temp = addTwoNumbers(
  liczbaPrzekazanaWTerminalu1 * 1,
  liczbaPrzekazanaWTerminalu2 * 1
);

console.log(`Wynik dodawnia to: ${temp}`);
