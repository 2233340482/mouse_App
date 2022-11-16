# マウスログ収集アプリのサンプルアプリケーション

```
$ http-server
```
上記のコマンドでローカルホストを起動
ポート番号はおそらく8080(既に使用されていたら8081,8082....)

```
$ node testserver.js
```
上記のコマンドでテストサーバを起動し送信されたログの確認を行う。

## sample.html
マウスログ収集するためのサンプルHTML
全てのid属性も持つタグ上にマウスポインタが乗るってから、離れるまでのログを収集する。
サンプルのため、ログが送信される箇所の色が変化する。
送信されるログはjavascriptコンソールでも確認できる。

## sample1.js
sample.htmlで用いられるjsファイルで、マウスログを収集し、サーバに送信する。 送信するログのフォーマットは以下の通りである。

```
 const data = {
    c: hashStudentID, //個人識別用ID(学籍番号)
    i: elemOfId, //id
    s: mouseOverTime, //starttime
    e: mouseLeaveTime, //endtime
    t: getPageTitle, //閲覧しているページのタイトル
    y: userAgentTerminal, //アクセス元の端末
    z: userAgentBrowser, //アクセス元のヴラウザ
    p: processID, ///プロセスID
  };
```


## testserver.js
sample1.jsで送信したログはtestserverに送信される。


 