// 防抖和节流
export const throttle = function(fn: Function, delay, atleast) {
  let timer: number
  let rAFtimer: number
  let previous = 0

  return function() {
    let now = Date.now()
    if (now - previous > atleast) {
      console.log('now - previous > atleast')
      fn()
      previous = now
    } else {
      if (delay > 20) {
        console.log('delay > 20')
        clearTimeout(timer)
        timer = setTimeout(function() {
          fn()
          previous = 0
        }, delay)
      } else {
        console.log('delay < 20')
        cancelAnimationFrame(rAFtimer)
        rAFtimer = requestAnimationFrame(function() {
          ;(window as any).requestIdleCallback(fn)
        })
      }
    }
  }
}
