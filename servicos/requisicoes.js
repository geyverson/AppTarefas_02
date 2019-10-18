import axios from 'axios'

const header = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${'sdfd%$%dfgghbn_h6w#'}`
    }
}

// Cadastrar uma tarefa
export const cadTarefa = obj => {
    let url = obj.url
    let params = {
        Parameters: [
            `itemTarefa=${obj.itemTarefa}`,
            `descricao=${obj.descricao}`
        ]
    }
    return axios.post(url, params, header)
}

// Recuperar tadas as tarefas
export const getTarefa = obj => {
    let url = obj.url
    let params = {}
    return axios.get(url, params, header)
}
