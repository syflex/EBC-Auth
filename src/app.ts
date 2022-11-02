import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

// should return hello world
app.get('/hello', (req: Request, res: Response) => {
    res.send('Hello world')
})

export default app
