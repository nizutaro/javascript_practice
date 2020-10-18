//コールバックとは
//引数に関数を渡される関数をコールバック関数という

callback(printwanko);

//関数は直接引数の中で定義することができる。
//直接定義した例
const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call(() => {
  console.log("にんじゃわんこ");
});//引数で関数を定義している

//事前に定義した例

const printWanko = () =>{
  console.log("にんじゃわんこ");
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call(printWanko);

const introduce = (callback) => {
  callback("にんじゃわんこ");
};

introduce((name) => {
  console.log(name)
});


//普通の関数の場合
const introduce = (name,age) => {
  console.log(`${name}は${age}歳です。`);
};

introduce("にんじゃわんこ",14);

//コールバック関数の場合
const introduce = (callback) => {
  callback("にんじゃわんこ",14);
};

introduce((name,age) => {
  console.log(`${name}は${age}歳です。`);
});

//コールバック関数は実務で使う場面が多いので、慣れていくこと