let defaultCity = '全国'
let defaultmanual = false
let defaultCode = ''
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
    defaultmanual = localStorage.manual
    defaultCode = localStorage.code
  }
}catch(e) {}

export default {
  city: defaultCity,
  manual: defaultmanual,
  code: defaultCode
}
