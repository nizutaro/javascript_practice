//2章

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

//3章

//メイン部分
var alertString;
alertString = addString("webCamp");

// 作成した関数を呼び出す
alert(alertString);

//作成した関数
function addString(strA) {
  var addStr = "Hello " + strA;
  return addStr;
}

//Math.floor() メソッドは、引数として与えた数以下の最大の整数を返します。
//Math は、数学的な定数と関数を提供するプロパティとメソッドを持つ、組み込みのオブジェクトです。関数オブジェクトではありません。

// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt(
  "じゃんけんの手をグー、チョキ、パーから選んでください。"
);

// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

//ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);

// 結果を表示する
alert(
  "あなたの選んだ手は" +
    user_hand +
    "です。\nJavascriptの選んだ手は" +
    js_hand +
    "です。\n結果は" +
    judge +
    "です。"
);
//ランダムでじゃんけんの手を作成する関数
function getJShand() {
  var js_hand_num = Math.floor(Math.random() * 3);
  var hand_name;
  if (js_hand_num == 0) {
    hand_name = "グー";
  } else if (js_hand_num == 1) {
    hand_name = "チョキ";
  } else if (js_hand_num == 2) {
    hand_name = "パー";
  }
  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js) {
  var winLoseStr;

  if (user == "グー") {
    if (js == "グー") {
      winLoseStr = "あいこ";
    } else if (js == "チョキ") {
      winLoseStr = "勝ち";
    } else if (js == "パー") {
      winLoseStr = "負け";
    }
  } else if (user == "チョキ") {
    if (js == "グー") {
      winLoseStr = "負け";
    } else if (js == "チョキ") {
      winLoseStr = "あいこ";
    }
  } else if (user == "パー") {
    if (js == "グー") {
      winLoseStr = "勝ち";
    } else if (js == "チョキ") {
      winLoseStr = "負け";
    } else if (js == "パー") {
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}

//課題3 演習課題
var user_hand = prompt("グー、チョキ、パーのいずれかを入力してください");
while (
  user_hand != "グー" &&
  user_hand != "チョキ" &&
  user_hand != "パー" &&
  user_hand != null
) {
  alert("グー・チョキ・パーのいずれかを入力して下さい");
  user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください");
}

var js_hand = getJShand();
var judge = winLose(user_hand, js_hand);
{
  if (user_hand != null) {
    alert(
      "あなたの選んだ手は" +
        user_hand +
        "です。\nJavascriptの選んだ手は" +
        js_hand +
        "です。\n結果は" +
        judge +
        "です。"
    );
  } else {
    alert("またチャレンジしてね");
  }
}
function getJShand() {
  var js_hand_num = Math.floor(Math.random() * 3);
  var hand_name;
  if (js_hand_num == 0) {
    hand_name = "グー";
  } else if (js_hand_num == 1) {
    hand_name = "チョキ";
  } else if (js_hand_num == 2) {
    hand_name = "パー";
  }
  return hand_name;
}

function winLose(user, js) {
  var winLoseStr;

  if (user == "グー") {
    if (js == "グー") {
      winLoseStr = "あいこ";
    } else if (js == "チョキ") {
      winLoseStr = "勝ち";
    } else if (js == "パー") {
      winLoseStr = "負け";
    }
  } else if (user == "チョキ") {
    if (js == "グー") {
      winLoseStr = "負け";
    } else if (js == "チョキ") {
      winLoseStr = "あいこ";
    }
  } else if (user == "パー") {
    if (js == "グー") {
      winLoseStr = "勝ち";
    } else if (js == "チョキ") {
      winLoseStr = "負け";
    } else if (js == "パー") {
      winLoseStr = "あいこ";
    } else {
      alert("エラー");
    }
    return winLoseStr;
  }
}
