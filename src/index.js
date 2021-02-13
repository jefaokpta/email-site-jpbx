import bodyParser from 'body-parser';
import express from 'express'
import cors from 'cors';
import { sendEmail } from './email-service.js';


const app = express()
const port = process.env.PORT || 3000
const response = {
    message: 'vazio',
    status: 200,
    success: true,
    data: null
}

app.use(bodyParser.json());
app.use(cors())

app.post('/email', (req, res) => {
    response.message = req.body.name
    sendEmail(req.body).then(() => {
        res.json(response)
    }).catch(error => {
        console.log(error)
        res.sendStatus(400)
    })
})

app.listen(port, () => console.log(`App rodando na porta ${port}`))