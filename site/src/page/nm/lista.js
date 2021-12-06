import { ConteinerLista } from "./styled"
import Api from "../../../services/api";
import { useState } from "react";
const api = new api();

export default function lista() {

        const [pessoa, setpessoas] = useState => ([]);

        const inserirpessoa = async () => {
                const lista = await api.pessoa(1);
                setpessoas(inserirpessoa)
        }

        return (

                <ConteinerLista>
                        <div className='lista'>
                                ListaPessoas
                                qwq

                        </div>
                </ConteinerLista>
        )
}