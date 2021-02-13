import bodyParser from 'body-parser';
import express from 'express'
import { sendEmail } from './email-service.js';


const app = express()
const port = 3000

app.use(bodyParser.json());

app.post('/', (req, res) => {
    sendEmail(req.body).then(() => {
        res.json({name: req.body.name, status: 200, success: true, data: null})
    }).catch(error => {
        console.log(error)
        res.sendStatus(400)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))