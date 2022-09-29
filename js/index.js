/*
 * @Author: bingbing.geng
 * @Date: 2022-09-29 08:54:54
 * @LastEditTime: 2022-09-29 13:26:19
 * @FilePath: \Chrome-kuozhan\js\index.js
 */

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  callback('我收到了你的消息！');
  if(request.cmd == 'search') {
    console.log(request.value) 
    return false;
  };
  if(request.cmd == 'getHistory') {
    console.log(request.value) 
    return false;
  };
  if(request.cmd == 'deldteHistory') {
    console.log(request.value) 
    return false;
  };

  if(request.menuItemId == 'test') {
    alert('点击了测试按钮...')
    return false;
  };

  switch (request.menuItemId) {
    case 'bing':
      url = 'https://cn.bing.com/search?q=';
      break;
    case '360':
      url = 'https://www.so.com/s?q=';
      break;
    case 'sogou':
      url = 'https://sogou.com/web?query=';
      break;
    case 'wiki':
      url = 'https://zh.wikipedia.org/wiki/';
      break;
    case 'google':
      url = 'https://www.google.com/search?q=';
      break;
    default:
      return
  }
  window.open(request.selectionText ? url + encodeURIComponent(request.selectionText) : new URL(url).origin);
});

