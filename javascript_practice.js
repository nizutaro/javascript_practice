var hello = "hello World";
alert(hello);

// if文
var orange = 100;
var apple = 120;

if (orange < apple) {
  alert("みかんの値段がりんごより安い");
} else if (orange == apple) {
  alert("みかんとりんごが同じ値段");
} else {
  alert("みかんの値段がりんごより高い");
}
// while文
var max = 100;
var num = 1;
var count = 0;

//while(条件){
//  処理
//}
while (num < max) {
  num = num * 2;
  count = count + 1;
}

alert(
  "2をかけ続けて" + max + "を超えるのに必要だった回数は" + count + "回です"
);
var max = 100;
var num = 1;
var count = 0;

// for文
var i;
var num = 0;

for (i = 1; i < 11; i++) {
  num = num + i;
}

alert("1から10までの足し算した結果は" + num + "です");
