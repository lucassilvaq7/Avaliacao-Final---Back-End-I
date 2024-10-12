import bcrypt from 'bcrypt'
import { users } from '../routes/users'

export const validateUserRegistration = (req, res, next) => {
    const { name, email, password } = req.body

    const existingEmail = users.find(user => user.email === email)

    if (!name) {
        return res.status(400).json({
            message: 'Por favor, verifique se passou o nome.'
        })
    } else if (!email) {
        return res.status(400).json({
            message: 'Por favor, verifique se passou o email.'
        })
    } else if (!password) {
        return res.status(400).json({
            message: 'Por favor, verifique se passou a senha.'
        })
    } else if (existingEmail) {
        return res.status(400).json({
            message: 'Email já cadastrado, insira outro.'
        })
    }

    next()
}

export const validateUserLogin = async (req, res, next) => {
    const { email, password } = req.body

    const user = users.find(user => user.email === email)

    if (!email) {
        return res.status(400).json({
            message: 'Insira um e-mail válido'
        })
    } else if (!password) {
        return res.status(400).json({
            message: 'Insira uma senha válida'
        })
    } else if (!user) {
        return res.status(404).json({
            message: 'Email não encontrado no sistema, verifique ou crie uma conta.'
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(400).json({
            message: 'usuario ou senha incorretos.'
        })
    }

    next()
}