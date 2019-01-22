const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const url = 'https://i-debug.com/frontclub/wx';

const urlFunc = function(str){
  if (/^\//.test(str)){
    return url + str;
  }else{
    return url + '/' + str;
  }
}

const trim = str => {
  return str.replace(/^\s/g, '').replace(/\s$/g, '');
}

module.exports = {
  formatTime: formatTime,
  url: urlFunc,
  trim: trim
}
