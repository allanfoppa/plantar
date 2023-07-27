import app from "../app"

import { describe, it, assert } from "vitest"
import request from "supertest"



describe('GET /', function() {
  it('Responds with welcome text', () => {

    const HOME_MESSAGE = "Olá, eu sou uma das APIs do Plantar."

    request(app)
      .get('/')
      .then((response) => {
        assert(response.statusCode == 200)
        assert(response.body.message == HOME_MESSAGE)
      })
  })
})
