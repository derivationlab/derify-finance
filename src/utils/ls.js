export const setItem = (key, val) => {
  // const theType = typeof val
  // console.log('setItem ====> theType :', key, theType)
  val = JSON.stringify(val)
  window.localStorage.setItem(key, val)
}

export const getItem = (key, defaultVal) => {
  let val = window.localStorage.getItem(key)
  if (val === 'undefined')
    return defaultVal

  val = JSON.parse(val)
  // console.log(`getItem ====> ${key}:`, val)

  return val
}

// ls.setItem('aString', 'a string')
// ls.setItem('aInt', 10)
// ls.setItem('aFloat', 10.00001)
// ls.setItem('anArray', ['aaa', 'bbbb'])
// ls.setItem('anObject', { aaa: 'valA', bbbb: 'valB' })

// const rz1 = ls.getItem('aString', 'a string')
// const rz2 = ls.getItem('aInt', 10)
// const rz3 = ls.getItem('aFloat', 10.00001)
// const rz4 = ls.getItem('anArray', ['aaa', 'bbbb'])
// const rz5 = ls.getItem('anObject', { aaa: 'valA', bbbb: 'valB' })
