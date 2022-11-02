import dotenv from 'dotenv'
import app from './app'
import MongoConnection from './loader/mongo'

/** Connect to Mongo */
const mongoConnection = new MongoConnection('mongodb+srv://syflex:Simon@360@cluster0.ce4epid.mongodb.net/?retryWrites=true&w=majority')

dotenv.config()
const port = process.env.PORT ?? 3000



// Start Server
mongoConnection.connect(() => {
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
    })
})


