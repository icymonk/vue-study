export function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
export function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = getRandom(0, arr.length - 1)
    const temp = arr[i]
    arr[i] = arr[randomIndex]
    arr[randomIndex] = temp
  }
  return arr
}
export function delay(f, time = 0) {
  return new Promise(resolve =>
    setTimeout(_ => {
      resolve(f())
    }, time),
  )
}
export function setAll(arr, key, value) {
  arr.forEach((_, index) => {
    arr[index][key] = value
  })
}
