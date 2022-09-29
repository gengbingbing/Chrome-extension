/*
 * @Author: bingbing.geng
 * @Date: 2022-09-29 09:38:47
 * @LastEditTime: 2022-09-29 13:31:02
 * @FilePath: \Chrome-kuozhan\js\popup.js
 */
function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
      console.log('**************', response)
      if(callback) callback(response);
    });
  });
}

function save() {
  const search = $('#search').val()
  sendMessageToContentScript({cmd: 'search', value: search }, function(response) {
    console.log('来自content的回复：'+response);
  });
}

$(function () {
  $("#btn").click(function () {
    save()
  });

  $('#getBtn').click(() => {
    const query = {
      text: ''
    };
    chrome.history.search(query, res => {
      sendMessageToContentScript({cmd: 'getHistory', value: res }, function() {});
    })
  })

  $('#deleteBtn').click(() => {
    chrome.history.deleteAll(res => {
      sendMessageToContentScript({cmd: 'deldteHistory', value: 'delete history' }, function() {});
    })
  })
});