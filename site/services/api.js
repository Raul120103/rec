import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {

    async ListaPessoas() {
        let r = await api.get('/lista/${idpessoa}')
        return r.data;
    }




    async addPessoa(Nome) {

        let r = await api.post('/tb_pessoas', { Nome })
        return r.data;
    }



}

