const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  if (req.method === 'POST') {
    if (isAuthorized(req, res, next)) {
      next()
    } else {
      res.status(401).send({ error: 'Not Authorized' })
    }
  } else {
    next()
  }
})

server.use(router)

server.listen(3030, () => {
  console.log('JSON Server is running')
})

const isAuthorized = (req, res, next) => {
  if (req.url === '/signin') {
    if (req.body.email.indexOf('.com') > -1 && req.body.password === 'pass') {
      return true
    } else {
      return false
    }
  }
  return true
}
