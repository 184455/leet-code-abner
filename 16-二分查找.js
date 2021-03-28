/**
二分查找是一种算法，其输入是一个有序的元素列表（必须是有序的），如果查找的元素包含在列表中，二分查找返回其位置，否则返回NULL

比如说有一个1-100的数字，我随机的选择其中一个数字（假设为60），
你需要以最少的次数猜到我所选择的数字，每次猜测后，我会告诉你大了，小了，对了。

假设你第一次从1开始猜，小了

第二次：2  小了

第三次：3  小了

……

第五十九次：59 小了

第六十次：60 对了

这是简单的查找，每次猜测只能排除一个数字，如果我想的数字是100，那么你可能需要从1猜到100了！

那么有没有更好的查找方式呢？

答案当然是有的。

如果我选的数字是60

第一次：你从50开始猜，那么我告诉你小了，就排除了接近一半的数字，因为你至少知道1-50都小了

第二次：你猜75，那么我告诉你大了，这样剩下的数字又少了一半！
或许你已经想到了，我们每次猜测都是选择了中间的那个数字，从而使得每次都将余下的数字排除了一半。

第三次：接下来，很明显应该猜测63，大了

第四次：然后你猜56，小了

第五次：然后你猜59 小了

第六次：猜测61，大了

第七次，你就能很明确的告诉我，答案是60！

这样的查找方式，很明显比第一种要高效很多。
第一种需要猜测60次才能猜出正确答案，而使用第二种方式，只需要七次就能猜出正确答案

这个就是二分查找的简单理解，下面进行代码书写。
具体的代码参考这里：https://www.cnblogs.com/kyoner/p/11080078.html

 */

// 搜索区域：[left, right]
function binarySearch1 (numArr, target) {
  if (numArr.length === 0) { return -1 }

  let left = 0
  let right = numArr.length - 1
  let mid

  while (left <= right) {
    mid = Math.floor((left + right) / 2)

    if (numArr[mid] === target) {
      return mid
    } else if (numArr[mid] < target) {
      left = mid + 1
    } else if (numArr[mid] > target) {
      right = mid - 1
    }
  }

  return -1
}

// 这一版本的算法是有缺陷的。对于 numArr = [1, 2, 2, 2, 9]， target = 2 会返回中间的数字 2，而不是第一个。
// 这一点是不满足我们心里的预期的
// const numArr = [1, 2, 2, 2, 9]
// const target = 2
// console.log(binarySearch1(numArr, target)); // 2


// 搜索区域：[left, right)
function binarySearch2 (numArr, target) {
  if (numArr.length === 0) { return -1 }

  let left = 0
  let right = numArr.length
  let mid

  while (left < right) {
    mid = Math.floor((left + right) / 2)

    if (numArr[mid] > target) {
      right = mid - 1
    } else if (numArr[mid] < target) {
      left = mid + 1
    } else if (numArr[mid] === target) {
      // 向左搜索
      right = mid
    }
  }

  return numArr[right] === target ? right : -1
}

// const numArr = [1, 1, 2, 2, 9]
// const target = 2
// console.log(binarySearch2(numArr, target)); // 2

// 搜索区域：(left, right]
function binarySearch3 (numArr, target) {
  if (numArr.length === 0) { return -1 }

  let left = 0
  let right = numArr.length
  let mid

  while (left < right) {
    mid = Math.floor((left + right) / 2)

    if (numArr[mid] > target) {
      right = mid - 1
    } else if (numArr[mid] < target) {
      left = mid + 1
    } else if (numArr[mid] === target) {
      // 向右搜索
      left = mid + 1
    }
  }

  return numArr[right] === target ? left : -1
}

const numArr = [1, 2, 2, 2, 9]
const target = 2
console.log(binarySearch3(numArr, target)); // 2
