/**
 * 找出数组中第k大和第m大的数字相加之和
 * 说明：实现一个方法，找出数组中第k大的和第m大的数字相加之和
 * 示例：
 *   let arr = [1,2,4,4,3,5], k = 2, m = 4
 *   findTopSum(arr, k, m); // 第2大的数是4，出现2次，第4大的是2，出现1次，所以结果为10
 */
 function findTopSum(arr, k, m) {
  /** 代码实现 */
  const sortArr = arr.sort((a, b) => b - a);
  const temp = {}
  sortArr.forEach((o) => {
    if (temp[o]) {
      temp[o] = o + temp[index];
    }
    temp[o] = {
      index: ''
    };
  });
  return temp[k] + temp[m]
}

// 我的实现
function findTopSum(arr, k, m) {
  const sorted = [...new Set(arr)].sort((a, b) => b - a) // 从大到小
  const kVal = sorted[k - 1]
  const mVal = sorted[m - 1]
  let sum = 0
  for (let o of arr) {
    if (o === kVal || o === mVal) {
      sum += o
    }
  }

  return sum;
}

// test
console.log(findTopSum([1,2,4,4,3,5], 2, 4));


/**
 * 按条件合并相邻项
 * 说明：实现一个方法，可将数组中相邻的项按条件合并
 * 示例：
 *   adjoin([1, 2, 3, 4, 5], item => item !== 3); // [[1, 2], 3, [4, 5]]
 *   adjoin([1, 2, 3, 4], item => item < 3); // [[1, 2], 3, 4]
 */
function adjoin(arr, condition) {
  /* 代码实现 */
}

// 我的实现
function adjoin(arr, condition) {
  const res = []
  let tempArr = []
  for (let o of arr) {
    if (condition(o)) {
      tempArr.push(o)
    } else {
      if (tempArr.length) {
        res.push(tempArr)
      }
      tempArr = []
      res.push(o)
    }
  }

  if (tempArr.length) {
    res.push(tempArr)
  }

  return res
}

// 测试
console.log(adjoin([1, 2, 3, 4, 5], item => item !== 3));
console.log(adjoin([1, 2, 3, 4], item => item < 3));


/**
 * 实现一个EatMan
 * 说明：实现一个EatMan，EatMan可以有以下一些行为
 * 示例：
 *  1. EatMan("Hank")输出:
 *   Hi! This is Hank!
 *  2. EatMan("Hank").eat("dinner").eat("supper")输出
 *   Hi This is Hank!
 *   Eat dinner~
 *   Eat supper~
 *  3. EatMan("Hank").eat('dinner').eatFirst("lunch")输出
 *   Eat lunch~
 *   Hi This is Hank!
 *   Eat supper~
 *  4. EatMan("Hank").eat('dinner').eatFirst("lunch").eatFirst("breakfast")输出
 *   Eat breakfast~
 *   Eat lunch~
 *   Hi This is Hank!
 *   Eat supper~
*/

function EatMan(name){
  return new _eatman(name);
}
function _eatman(name) {
  /** 代码实现 */

  this.name = name
  this.action = []

  this.hello()
  setTimeout(() => this.nextAction())
}

_eatman.prototype.pushAction = function (_action, firstFlag) {
  if (firstFlag) {
    this.action.unshift(_action)
  } else {
    this.action.push(_action)
  }
}
_eatman.prototype.nextAction = function () {
  const _action = this.action.shift()
  return _action && _action()
}
_eatman.prototype.hello = function () {
  const helloAction = () => {
    console.log(`Hi! This is ${this.name}!`);
    this.nextAction()
  }
  this.pushAction(helloAction)
  return this
}
_eatman.prototype.eat = function (dinnerTime) {
  const eatAction = () => {
    console.log(`Eat ${dinnerTime}~`);
    this.nextAction()
  }
  this.pushAction(eatAction)
  return this
}
_eatman.prototype.eatFirst = function (dinnerTime) {
  const eatFirstAction = () => {
    console.log(`Eat ${dinnerTime}~`);
    this.nextAction()
  }
  this.pushAction(eatFirstAction, true)
  return this
}


console.log('========= EatMan ==================');
// EatMan('Hank')
// EatMan("Hank").eat("dinner").eat("supper")
// EatMan("Hank").eat('dinner').eatFirst("lunch")
EatMan("Hank").eat('dinner').eatFirst("lunch").eatFirst("breakfast")

// 这是一个面向对象的编程题目，中间还融合了事件循环的知识。
// 内部需要维护一个动作数组，同时结合注意执行的顺序；
// 在方法执行完毕，一个小小的动作：return this 就能解决链式调用的问题！
