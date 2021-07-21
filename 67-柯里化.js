// 函数柯里化测试学习

// 测试用的函数
function add (a, b, c) {
  return [a, b, c]
}

/**
 * 柯里化实现 - 1：
 * 能够实现：add(1)(1,3)(4)()
 * 这种任意参数的形式。但是这种形式一定要以函数调用结尾。
 * 因为函数内部根据参数做判断，一旦传入的参数为空，就会执行函数，求结果
 * @param {function} fn 需要柯里化的函数
 * @returns {function} 柯里化的函数
 */
function currying (fn) {
  let args = []
  return function next () {
    const arg = Array.prototype.slice.call(arguments)
    if (arg.length) {
      args = args.concat(arg)
      return next;
    } else {
      return fn.apply(null, args)
    }
  }
}

/**
 * 柯里化实现 - 2：
 * 能够实现：add(1)(1,3)(4)
 * 注意看，这个和实现 - 1，在调用上是有一些区别的，柯里化函数没有显性调用函数
 * 说白了：就是函数求值的过程改变了！
 * 但是这种柯里化的方法并不是非常好，很多时候不能直接得到函数返回的结果。返回的都是函数类型的数据。
 * 这个方法巧妙就巧妙在 利用 JS 在不同的场景会默认调用 toString, valueOf 的行为
 * 相当于巧妙的拿到这了结果的值。
 * @param {*} fn 
 * @returns 
 */
function currying (fn) {
  let args = []
  function next () {
    // 这个函数不会求真实的值，只做参数的收集
    const arg = Array.prototype.slice.call(arguments)
    args = args.concat(arg)
    return next;
  }
  next.toString = function () {
    return fn.apply(null, args)
  }
  next.valueOf = function () {
    return fn.apply(null, args)
  }

  return next;
}

// ======================分割线===========================================
// == 以上的实现出自这里：https://juejin.cn/post/6844903645222273037 ======
// 它的实现很基础，很适合教学。但是参数缓存的处理不是很优雅，不好用
// 下面来看一个更实用，类似 lodash 的实现方法：https://juejin.cn/post/6844903882208837645

function createCurrying (fn, len = fn.length) {
  return curryingWrap.call(this, fn, len)
}
function curryingWrap (fn, len, ...args) {
  return function next (...params) {
    const _args = [...args, ...params]
    if (_args.length >= len) {
      return fn.apply(null, _args)
    } else {
      return curryingWrap.call(this, fn, len, ..._args)
    }
  }
}

const addCurrying = createCurrying(add)
console.log(addCurrying(1)(2, 3));

