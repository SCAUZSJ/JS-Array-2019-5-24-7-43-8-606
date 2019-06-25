// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);//false
console.log(b instanceof Array);//true

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let i=0;i<a.length;i++){
    a[i]=a[i]*2;
}
console.log(a)

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
let caseResult1='',caseResult2='',caseResult3='';
for (let i=0;i<colors.length;i++) {
    caseResult1 += colors[i];
    caseResult2 += colors[i];
    caseResult3 += colors[i];
    if (i < colors.length - 1) {
        caseResult1 += ' ';
        caseResult2 += '+';
        caseResult3 += ','
    }
}
console.log(caseResult1);
console.log(caseResult2);
console.log(caseResult3);

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(a,b){
    if(a<b){
        return 1;
    }
    if(a>b){
       return -1;
    }
    return 0;
})
console.log(a)

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
let maxVal=null;
let maxNum=0;
let vals = {};//键值
for(let i=0;i<a.length;i++){
    let val = a[i];
    vals[val] ===undefined?vals[val]=1:(vals[val]++);
    if(vals[val]>maxNum){
        maxVal = val;
        maxNum = vals[val];
    }
}
console.log(maxVal);

