let faker = require('faker')

function generateDB () {
  let posts = []
  let cart = []
  let signin = []

  for (let id = 0; id < 3; id++) {
    let title = faker.lorem.words(4)
    let body = faker.lorem.sentences(5)

    posts.push({
      'id': id,
      'title': title,
      'body': body
    })
  }

  for (let id = 0; id < 6; id++) {
    let name = faker.commerce.productName()
    let description = faker.lorem.words(12)
    let price = faker.commerce.price(12, 100, 2)

    cart.push({
      'id': id,
      'name': name,
      'description': description,
      'price': price
    })
  }

  for (let id = 0; id < 2; id++) {
    let email = faker.internet.email()
    let password = faker.internet.password()

    signin.push({
      'id': id,
      'email': email,
      'password': password
    })
  }

  return {
    'posts': posts,
    'cart': cart,
    'signin': signin

  }
}

// a function which generates the data for json-sever
module.exports = generateDB
