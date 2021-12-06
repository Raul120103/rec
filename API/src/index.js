import db from './db.js';
import express from 'express';
import cors from 'cors';

const app = new express()
app.use(cors())
app.use(express.json())


app.get('/pessoas', async (req, resp) => {
    try {
        let uuso = await db.tb_pessoas.findAll()

        resp.send(uuso)

    } catch (e) {
        resp.send({erro: e.toString()})
    }
});
app.post('/pessoa', async (req, resp) => {


    let pessoa = req.body;

    let p = await db.tb_pessoas.findOne({
        where: {
             nm_nome
        }
    })

    if(p == null)
    return resp.send({erro: 'erro'});

    resp.sendStatus(200);
});





app.listen(process.env.PORT,
    console.log(`Servidor na Porta ${process.env.PORT}`));