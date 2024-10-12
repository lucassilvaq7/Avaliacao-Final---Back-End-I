import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcrypt'
import { validateUserLogin, validateUserRegistration } from '../middlewares/validation-users'

const router = express.Router()

export const users = []

router.post('/signup', validateUserRegistration, async (req, res) => {
    try {
        const { name, email, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = {
            id: uuidv4(),
            name,
            email,
            password: hashedPassword,
        }

        users.push(newUser)

        return res.status(201).json({
            message: `Seja bem vindo ${name}! Pessoa usuária registrada com sucesso!`
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Erro ao registrar usuário.',
            error
        })
    }
})

router.post('/login', validateUserLogin, (req, res) => {
    try {
        const { email } = req.body

        const user = users.find(user => user.email === email)

        return res.status(200).json({
            message: `Seja bem vindo ${user.name}! Pessoa usuária logada com sucesso!`
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Erro ao realizar o login.',
            error
        })
    }
})

export default router