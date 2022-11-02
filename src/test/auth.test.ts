import app from '../app'
const mongoose = require('mongoose')
import request from 'supertest'
import User from '../models/user.model'



describe('POST /api/auth/signup', () => {

  it('should return 201', async () => {
      const response = await request(app).post('/api/auth/signup').send({
          name: 'John',
          email: 'si@gmail.com'
      })
      expect(response.status).toBe(201)
  })

    it('should return 400', async () => {
        const response = await request(app).post('/api/auth/signup').send({
            name: 'John',
            email: 'si@gmail.com',
            password: '123456'
        })
        expect(response.status).toBe(400)
    })

})


describe('POST /api/auth/signin', () => {

  it('should return 200', async () => {
      const response = await request(app).post('/api/auth/signin').send({
          email: 'si@gmail.com',
            password: '123456'
        })
        expect(response.status).toBe(200)
    })

    it('should return 400', async () => {
        const response = await request(app).post('/api/auth/signin').send({
            email: 'si@gmail.com',
            password: '1234567'
        })
        expect(response.status).toBe(400)
    })
})

describe('GET /api/auth/me', () => {
    
      it('should return 200', async () => {
        const response = await request(app).get('/api/auth/me').send({
             email: 'si@gmail.com',
                password: '123456'
            })
            expect(response.status).toBe(200)
        })

        it('should return 401', async () => {
            const response = await request(app).get('/api/auth/me').send({
                email: 'si@gmail.com',
                password: '1234567'
            })
            expect(response.status).toBe(401)
        })
})
