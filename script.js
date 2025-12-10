//字串
var word="一行字";
var word2="Hello world!";
document.write("這裡有"+word+"<br>");  //劃掉代表VS code不建議使用
document.writeln(word2.length);  //字串長度
document.writeln(word2.toUpperCase());  //全大寫
document.writeln(word2.toLowerCase());  //全小寫
document.writeln(word2.charAt(1));  //輸出位於1的字元
document.writeln(word2.substring(0,5));  //輸出位於0~5的字元
document.writeln(word2.indexOf("l"));  //輸出第一個l的位置
document.writeln(word2.indexOf("q")+"<br>");

//數字
document.writeln(parseInt("53"));  //字串轉整數
document.writeln(Math.abs(-6));  //取絕對值
document.writeln(Math.max(-6,4,6,12,8));  //回傳最大值，min是最小值
document.writeln(Math.round(2.6473));  //四捨五入
document.writeln(Math.pow(2,3));  //2的3次方
document.writeln(Math.sqrt(64));  //開平方根
document.writeln(Math.random()+"<br>");  //0~1亂數


//陣列 array
var a=[80,60,20,30,50];
document.writeln(a[2]);
document.writeln(a.length+"<br>");

//function
function F(x){
    document.writeln(x+"<br>");
    return x;
}
F(999)

//物件 object
var fruit={
    apple:20,
    banana:60,
    grape:10,
    print_money:function(){
        document.writeln(this.banana+"<br>");
    }
};
document.writeln(fruit.apple);
fruit.print_money();

//class
class Phone{
    constructor(number,year,is_waterproof){
        this.number=number;
        this.year=year;
        this.is_waterproof=is_waterproof;
    }
    phone_age(){
        return 2025-this.year;
    }
}

var phone1=new Phone("123",2020,true);
var phone2=new Phone("456",2014,false);
document.writeln(phone1.phone_age());
document.writeln(phone2.is_waterproof+"<br>");

//取得html元素
var text=document.getElementById("abcde");
console.log(text);
text.innerText="改過的"
text.style.backgroundColor="gray"

