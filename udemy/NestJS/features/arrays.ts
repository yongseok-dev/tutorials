const carMaker = ['ford', '현대'];
// const carMaker: string[] = [];
// const carMaker: string[] = [];
const dates = [new Date(), new Date()];

// const carsByMake: string[][] = [['f150'], ['소나타']];
// const carsByMake = [['f150'], ['소나타']];
const carsByMake: string[][] = [];
// carsByMake.push([1])//오류
// carsByMake.push('ㅇㅇㅇ')//오류
// carsByMake.push(1)//오류

const car = carMaker[0];
const myCar = carMaker.pop();

// carMaker.push(100);
carMaker.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates: (string | Date)[] = [];
importantDates.push(new Date());
importantDates.push('2030-10-10');
// importantDates.push(2030-10-10)
