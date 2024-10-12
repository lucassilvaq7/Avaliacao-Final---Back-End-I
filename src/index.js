import express from 'express'
import cors from 'cors'
import usersRouter from './routes/users'
import notesRouter from './routes/notes'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/users', usersRouter)
app.use('/notes', notesRouter)

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Bem vindo à aplicação'
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`server rodando na porta ${PORT}`)
})