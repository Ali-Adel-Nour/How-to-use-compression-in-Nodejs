const express = require('express')
const compression = require('compression')

const app = express()

app.use(compression({
  level: 6,
  threshold: 10* 1000,
  // in bytes per second

  filter:(req, res)=>{
    if(req.headers['x-no-compression']){
      return false
    }
    return compression.filter(req,res)
  },
  })
)

app.get('/', (req, res) => {
  const payload = 'Faster app'
  res.send(payload.repeat(1000))
})

app.listen(3000,()=>console.log('listening on port 3000'))