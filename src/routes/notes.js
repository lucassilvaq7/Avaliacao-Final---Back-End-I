import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import { validateMessageRegistration, validateMessagesDeletion, validateMessagesReader, validateMessagesUpdater } from '../middlewares/validation-notes'

const router = express.Router()

export const notes = []

router.post('/message', validateMessageRegistration, (req, res) => {
    const { email, title, description } = req.body

    const newMessage = {
        id: uuidv4(),
        email,
        title,
        description
    }

    notes.push(newMessage)

    return res.status(201).json({
        message: `Mensagem criada com sucesso!`,
        newMessage
    })
})

router.get('/message/:email', validateMessagesReader, (req, res) => {
    const { email } = req.params

    const userMessages = notes.filter(message => message.email === email)

    return res.status(200).json({
        message: 'Seja bem-vindo! Lista de recados:',
        userMessages
    })
})

router.put('/message/:id', validateMessagesUpdater, (req, res) => {
    const { id } = req.params
    const { title, description } = req.body

    const message = notes.find(message => message.id === id)

    message.title = title
    message.description = description

    return res.status(200).json({
        message: 'Mensagem atualizada com sucesso!',
        updatedMessage: message
    })
})

router.delete('/message/:id', validateMessagesDeletion, (req, res) => {
    const { id } = req.params

    const messageIndex = notes.findIndex(message => message.id === id)
    
    const [deletedMessage] = notes.splice(messageIndex, 1)

    return res.status(200).json({
        message: 'Mensagem apagada com sucesso.',
        deletedMessage
    })
})

export default router