export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    }catch(e) {}
  },
  changeManual (state, manual) {
    state.manual = true
    try {
      localStorage.manual = true
    }catch(e) {}
    console.log( "state.manual:"+state.manual )
  },
  changeCode (state, code) {
    state.code = code
    try {
      localStorage.code = code
    }catch(e) {}
    console.log( "state.code:"+state.code )
  },
}
