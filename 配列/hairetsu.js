//forEactメソッド
 const numbers =  [1,2,3];
//forEach(引数) => {処理}
//引数に入っている関数はコールバック関数という
 numbers.forEach((number) => {console.log(number);});

 //findメソッド
 //コールバック関数の処理部分に記述した条件式に合う１つ目の要素を配列から取り出すメソッド
 
 const foundNumber = numbers.find((number) => {return number > 3;});

//filterメソッド
//条件に合う要素のみを取り出す

const evenNumbers = numbers.filter((number) => {return number % 2 === 0});
const underTwenty = characters.filter((character) => {return character.age < 20});
// evenNumbersを出力
console.log(evenNumbers);

//mapメソッドとは配列の全ての要素に配列を作るメソッド
//配列内のすべての要素に処理を行い、その戻り値から新しい配列を作成するメソッド

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

const names = {
  {firstName:"Kate",lastName:"jones"},
  {firstName: "Brian", lastName: "Smith"}
};

const fullNames = names.map((name)=> {
  return name.firstName + name.lastName;
});

console.log(fullnames);

const fullNames = names.map((name) => {
return name.firstName + name.lastName}); 
// 定数fullNamesを出力してください
console.log(fullNames);
