import axios from 'axios'

const URL = 'http://legis.senado.gov.br/dadosabertos/senador/lista/atual.json'

export const search = () => {
    return (dispatch) => {
        axios.get(`${URL}`)
            .then((resp) => {
                dispatch({type: 'TODO_SEARCHED', payload: resp.data.ListaParlamentarEmExercicio.Parlamentares.Parlamentar, version: resp.data.ListaParlamentarEmExercicio.Metadados})
            })
    }
}

export const modal = (infos, open = false) => {
    return dispatch => {
        let show_modal = {open_modal: open}
        if(show_modal.open_modal){
            show_modal.open_modal = !open;
        }else{
            show_modal.open_modal = open;
        }
        dispatch({type: 'OPEN_MODAL', payload: infos, show_modal})
    }
}