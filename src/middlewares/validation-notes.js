import { notes } from '../routes/notes'
import { users } from '../routes/users'

export const validateMessageRegistration = (req, res, next) => {
    const { email, title, description } = req.body

    const existingUser = users.find(user => user.email === email)

    if (!existingUser) {
        return res.status(404).json({
            message: 'Email não encontrado no sistema, verifique ou crie uma conta.'
        })
    } else if (!email || !title || !description) {
        return res.status(400).json({
            message: 'Preencha todos os campos.'
        })
    }

    next()
}

export const validateMessagesReader = (req, res, next) => {
    const { email } = req.params
    const existingEmail = users.find(user => user.email === email)
 
    if (!existingEmail) {
        return res.status(404).json({
            message: 'Email não encontrado no sistema, verifique ou crie uma conta.'
        })
    }

    next()
}

export const validateMessagesUpdater = (req, res, next) => {
    const { id } = req.params
    const { title, description } = req.body

    const message = notes.find(message => message.id === id)

    if (!message) {
        return res.status(404).json({
            message: 'Por favor, informe um id válido da mensagem'
        })
    }
    
    if (!title || !description) {
        return res.status(400).json({
            message: 'Preencha todos os campos.'
        })
    }
    next()
}

export const validateMessagesDeletion = (req, res, next) => {
    const { id } = req.params

    const messageIndex = notes.findIndex(message => message.id === id)

    if (messageIndex === -1) {
        return res.status(404).json({
            message: 'Mensagem não encontrada, verifique o identificador em nosso banco.'
        })
    }

    next()
}