const req = new Promise((resolve, reject) => {
  resolve()
})

req.then(() => {
  console.error(111)
  throw new Error('333')
}).catch(err => {
  console.log(err)
  console.log('222')
})