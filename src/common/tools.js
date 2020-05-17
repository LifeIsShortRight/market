//防抖函数
export function debounce(func, delay = 20) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
//设置cookie
export function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
//删除cookie
export function delCookie(cname) {
  document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"
}