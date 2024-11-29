/* 最終変更者：（田村謙悟）　最終変更日時：（2024/11/30 23:59）*/
/* 句の入力の仕方
constのあとの定数名（現在，kansaiA，kansaiBなどとなっている部分）には，各チームを推測できる定数名をつけること．
たとえば，チーム名が阪神タイガースであれば，hanshinやtigersなどとつければよい．
なお，定数名に使ってよいのは半角アルファベットと半角数字のみである．
また，短すぎる定数名は避け，5文字以上程度にするとよい．ただし，長すぎても面倒である．
定数名は，必ずすべて相異なるものにしなければならない．

現在，

    ["関西文芸高等学校Ａ"],

などとなっている行は，チーム名を入力する行である（関西文芸高等学校Ｂなども同様）．
ここの，半角ダブルクォーテーションマークの中に入力した内容がチーム名として表示される．
半角ダブルクォーテーションマークは「削除してはならない」．
また，この項目では、アルファベットや数字は全角にすること．

次に，現在，

    ["", "兼題1先鋒句", "", "兼題1中堅句", "", "兼題1大将句"],

などとなっている行は，上の行で入力したチームの，兼題1における使用句を入力する欄である．
兼題の順番に注意すること．兼題の順番は，公式サイト等で上から書かれている順番である．
battleフォルダ内の，kendai.jsにも，兼題の順番はすでに反映されている．

それぞれ，「兼題1先鋒句」などの部分を，各チームの俳句に置き換えればよい．
ただし，コンマや括弧，ダブルクォーテーションマーク，セミコロン，半角スペースなどは削除したり，変更したりしてはならない．
つまり，入力したあとに，以下のようになっていればよい．

    ["", "一月の甘納豆のあはははは", "", "一月の甘納豆のいひひひひ", "", "一月の甘納豆のうふふふふ"],

これを兼題1から兼題4まで繰り返す．なお，兼題4は決勝戦の題であるから，先鋒，次鋒，中堅，副将，大将の5本勝負となるので，兼題4の行は

    ["", "四月なり甘納豆はあはははは", "四月なり甘納豆はいひひひひ", "四月なり甘納豆はうふふふふ", "四月なり甘納豆はえへへへへ", "四月なり甘納豆はおほほほほ"]

のようになっていればよい．（この行は末尾にコンマを「つけてはならない」．）

以下が，入力し終わった後の1チーム分の見本である．これが6チーム分存在すればよい．

    const kansaiA = [
        ["関西文芸高等学校Ａ"],
        ["", "一月の甘納豆のあはははは", "", "一月の甘納豆のいひひひひ", "", "一月の甘納豆のうふふふふ"],
        ["", "二月です甘納豆があはははは", "", "二月です甘納豆がいひひひひ", "", "二月です甘納豆がうふふふふ"],
        ["", "三月に甘納豆があはははは", "", "三月に甘納豆がいひひひひ", "", "三月に甘納豆がうふふふふ"],
        ["", "四月なり甘納豆はあはははは", "四月なり甘納豆はいひひひひ", "四月なり甘納豆はうふふふふ", "四月なり甘納豆はえへへへへ", "四月なり甘納豆はおほほほほ"]
    ];
    
なお，繰り返すが，括弧，ダブルクォーテーションマーク，コンマ，セミコロンなどは決して削除したり，変更しないこと．
変更してよいのは，ダブルクォーテーションマークに挟まれた内部のみである．
入力が終わったら，必ず各試合、各対戦で正しく句が表示されているか，表記に誤りがないかを確認すること．

なお，この説明文，アスタリスクや半角スラッシュも消去してはならない．

※HTMLタグについて．各ダブルクォーテーションマークの中でHTMLタグを使用できる（使用するとしても，以下の例のようなルビや縦中横ぐらいだと思われるが）．HTMLタグととられるような表記を句の中に取り込んでいる場合など，きわめて特殊な事例の場合は，該当句の読み込み用jsコード（各試合のフォルダに存在する各試合対応のjsファイルに存在するコード）をinnerHTMLではなくtextContentにすることで対応可能である（同一の句内でHTMLタグとの併用は不可）．これは，ブラウザで正しく表示されるか確認した際に，意図と違う表示がされたり，エラーが出たりする場合に考えればよい．これについては，多くの場合は気にする必要はない．

HTMLタグを使用するときの注意．
ルビは，
    <ruby>兼題<rt>けんだい</rt></ruby>1<ruby>
のようにすれば振ることができる．詳細は，rubyタグについて解説しているWebサイトなどで確認せよ．
また，
    <span class='tcy'>2025</span>
のようにすれば，縦中横を設定できる．ただし，この中の文字を1行分の幅に圧縮して表示するため，文字数が多くなるにつれて不格好になる．これについての対処方法は現状存在しないと思われる（2024年11月）．ただ，この場合でも，縦中横にせよという指示があった場合は縦中横にしておくのがよいであろう（可能であれば，表記についてチームに問い合わせるのが良さそうであるが．）．
ここで注意すべきなのは，一般のcssと違って，ここではclass='tcy'は「シングルクォーテーションマーク」で囲まれていることである．ここをダブルクォーテーションマークにするとエラーとなり，句がすべて表示されなくなるので注意せよ．これは，jsのリストをダブルクォーテーションマークで区切っているためである．
なお，このtcyクラスについては，battle.cssで定義してあるものであり，一般に使用できるものではないことにも注意せよ．もし追加情報が必要であれば，「縦中横　css」などで調べるとよい．（補足：spanタグはHTMLのタグである．こちらについての追加情報が必要な場合は，「spanタグ　HTML」などと検索すればよい．）
*/

const kansaiA = [
    ["関西文芸高等学校Ａ"],
    ["", "<span class='tcy'>2025</span><ruby>兼題<rt>けんだい</rt></ruby>1<ruby>先鋒<rt>せんぽう</rt></ruby>句", "", "兼題1中堅句", "", "兼題1大将句"],
    ["", "兼題2先鋒句", "", "兼題2中堅句", "", "兼題2大将句"],
    ["", "兼題3先鋒句", "", "兼題3中堅句", "", "兼題3大将句"],
    ["", "兼題4先鋒句", "兼題4次鋒句", "兼題1中堅句", "兼題4副将句", "兼題1大将句"]
];
const kansaiB = [
    ["関西文芸高等学校Ｂ"],
    ["", "兼題1先鋒句", "", "兼題1中堅句", "", "兼題1大将句"],
    ["", "兼題2先鋒句", "", "兼題2中堅句", "", "兼題2大将句"],
    ["", "兼題3先鋒句", "", "兼題3中堅句", "", "兼題3大将句"],
    ["", "兼題4先鋒句", "兼題4次鋒句", "兼題1中堅句", "兼題4副将句", "兼題1大将句"]
];
const kansaiC = [
    ["関西文芸高等学校Ｃ"],
    ["", "兼題1先鋒句", "", "兼題1中堅句", "", "兼題1大将句"],
    ["", "兼題2先鋒句", "", "兼題2中堅句", "", "兼題2大将句"],
    ["", "兼題3先鋒句", "", "兼題3中堅句", "", "兼題3大将句"],
    ["", "兼題4先鋒句", "兼題4次鋒句", "兼題1中堅句", "兼題4副将句", "兼題1大将句"]
];
const kansaiD = [
    ["関西文芸高等学校Ｄ"],
    ["", "兼題1先鋒句", "", "兼題1中堅句", "", "兼題1大将句"],
    ["", "兼題2先鋒句", "", "兼題2中堅句", "", "兼題2大将句"],
    ["", "兼題3先鋒句", "", "兼題3中堅句", "", "兼題3大将句"],
    ["", "兼題4先鋒句", "兼題4次鋒句", "兼題1中堅句", "兼題4副将句", "兼題1大将句"]
];
const kansaiE = [
    ["関西文芸高等学校Ｅ"],
    ["", "兼題1先鋒句", "", "兼題1中堅句", "", "兼題1大将句"],
    ["", "兼題2先鋒句", "", "兼題2中堅句", "", "兼題2大将句"],
    ["", "兼題3先鋒句", "", "兼題3中堅句", "", "兼題3大将句"],
    ["", "兼題4先鋒句", "兼題4次鋒句", "兼題1中堅句", "兼題4副将句", "兼題1大将句"]
];
const kansaiF = [
    ["関西文芸高等学校Ｆ"],
    ["", "兼題1先鋒句", "", "兼題1中堅句", "", "兼題1大将句"],
    ["", "兼題2先鋒句", "", "兼題2中堅句", "", "兼題2大将句"],
    ["", "兼題3先鋒句", "", "兼題3中堅句", "", "兼題3大将句"],
    ["", "兼題4先鋒句", "兼題4次鋒句", "兼題1中堅句", "兼題4副将句", "兼題1大将句"]
];
