// 为了加深印象，使用一下 lodash 里面的函数

const {
  chunk, compact, concat,
  difference, differenceBy, differenceWith,
  drop, dropRight,
  fill, findIndex, findLastIndex,
  flatten, flattenDeep, flattenDepth,
  head, indexOf, intersection, pull
}  = require('lodash')
let arr = [], res

// Array 数组

// 1.数组分组
arr = ['a', 'b', 'c', 'd']
// console.log(chunk(arr, 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
// console.log(chunk(arr, 3)); // [ [ 'a', 'b', 'c' ], [ 'd' ] ]

// 2.过滤数组不合法的值：false, '', undefined, null, NaN, 0 都会被过滤
arr = [false, '', undefined, null, NaN, 0, 'Hello ~']
res = compact(arr)
// console.log(res); // [ 'Hello ~' ]

// 3.拼接数组，可以接受单个元素，也可以接受一个数组，支持传递多个参数
arr = [1, 2, 3]
res = concat(arr, 4, [5, 6])
// console.log(res); // [ 1, 2, 3, 4, 5, 6 ]

// 4.差集，参数1 - 参数2
arr = [ 1, 2, 3, 4, 5, 6 ]
res = difference(arr, [2, 4, 6])
// console.log(res); // [ 1, 3, 5 ]

// 5.差集，更强大，支持第三个参数（Array|Function|Object|String）：指定计算的方式
arr = [{x:1}, {x:2}, {x:3}, {x:4}, {x:5}]

// 字符串参数
res = differenceBy(arr, [{x:2}, {x:4}], 'x')
// console.log(res); // [ { x: 1 }, { x: 3 }, { x: 5 } ]

// 函数参数
res = differenceBy(arr, [{x:2}, {x:4}], o => o.x)
// console.log(res); // [ { x: 1 }, { x: 3 }, { x: 5 } ]

// 6.差集，接受第三个参数：一个对比函数，注意这个对比函数的参数：两个
arr = [{x:1}, {x:2}, {x:3}, {x:4}, {x:5}]
res = differenceWith(arr, [{x:2}, {x:4}], (a, b) => a.x === b.x)
// console.log(res); // [ { x: 1 }, { x: 3 }, { x: 5 } ]

// 7.删除前 N 个元素, 默认从1 开始去除，类似: slice 函数
arr = [ 1, 2, 3, 4, 5, 6 ]
res = drop(arr)
// console.log(res); // [ 2, 3, 4, 5, 6 ] 默认从 第一个切除
res = drop(arr, 3)
// console.log(res); // [ 4, 5, 6 ]

// 8. 行为和drop 一样，但是 从 右边 开始删除
res = dropRight(arr, 3)
// console.log(res); // [ 1, 2, 3 ]

// 9.填充函数, 第三，四 个参数，可以指定填充的起始结束位置；这个方法会改变数据
res = fill(Array(3), 6)
// console.log(res); // [ 6, 6, 6 ]

// 10.查找函数
arr = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

res = findIndex(arr, o => o.user === 'fred')
// console.log(res); // 1，返回索引

res = findLastIndex(arr, o => o.user === 'fred')
// console.log(res); // 1，返回索引, 从后面寻找

// 11.打平函数 flatten, 减少一层函数嵌套
res = flatten([1, [2, [3, [4]], 5]])
// console.log(res);

// 12.flattenDeep 打平所有数据
res = flattenDeep([1, [2, [3, [4]], 5]])
// console.log(res); // [ 1, 2, 3, 4, 5 ]

// 13.打平数组，可以指定层数
res = flattenDepth([1, [2, [3, [4]], 5]], 2)
// console.log(res); // [ 1, 2, 3, [ 4 ], 5 ]

// 14.获取数组第一个元素
res = head([ 1, 2, 3, 4, 5 ])
// console.log(res);

// 15.寻找函数 indexOf
res = indexOf([ 1, 2, 3, 4, 5 ], 3)
// console.log(res);

// 16. 交集
res = intersection([1, 2], [2, 3], [2, 4])
// console.log(res);

res = pull([ 1, 2, 3, 4, 5 ], 3, 4)
// console.log(res); // [ 1, 2, 5 ]
