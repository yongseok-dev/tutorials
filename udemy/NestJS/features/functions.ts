const add = (a: number, b: number) => {
  return a + b;
};
//리턴값은 타입추론 동작하지만, annotation 사용
const subtract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}
function multiply(a: number, b: number): number {
  return a * b;
}

function loger(message: string): void {
  console.log(message);
}
