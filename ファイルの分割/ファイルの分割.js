//エクスポートできるのはクラス以外にも、文字列、数値、関数などエクスポートが可能

//エクスポートは名前が違くてもOKだが１ファイル１つの値のみ使える
//複数の値をエクスポートしたい場合は、名前付きエクスポート"を用いる


// １つのエクスポート
export default Animal;


// １つ上のエクスポート
import dog flom "./dog.js" //ファイル名
//名前付きエクスポートの例
export {dog1};
export {dog1,dog2};

export {dog1,dog2,dog3};
//インポート側
import {dog1} from ".dogData";
dog1.info();