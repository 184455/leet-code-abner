
/**
 * 基于 XMLHttpRequest, ajax 实现 Promise 封装
 */

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function XMLHttpRequestPromise1(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.statusText);
        console.log(xhr.responseText);
        resolve(xhr.responseText)
      }
    }

    xhr.addEventListener('abort', () => {
      console.log('abort');
      reject()
    });
    xhr.addEventListener('load', () => {
      console.log('load');
    });

    xhr.open(method, url)
    xhr.send('')
  })
}

function XMLHttpRequestPromise (method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)

    // 设置头
    // xhr.setRequestHeader() ...

    // 添加事件监听
    xhr.addEventListener('error', () => {
      reject()
    })
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        // success
        resolve(xhr.responseText)
      }
    })

    xhr.send('')
  })
}

const method = 'GET'
const url = 'http://192.168.17.180:8080/service/public/v1/homepage/partners'
XMLHttpRequestPromise(method, url).then(res => {
  console.log('I am res: ' + JSON.stringify(res));
})
