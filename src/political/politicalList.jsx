import React from 'react'
import { connect } from 'react-redux'
import { modal } from './politicalActions'
import { bindActionCreators } from 'redux'

import Modal from '../components/modal/modal'

import './political.css'

const PoliticalList = (props) => {
    const renderRows = () => {
        const list = props.list
        return list.map((political, index) => (
            <div key={index} className="political-item">
                <div className="image">
                    <a href="#" onClick={()=>props.modal(political, true)}>
                        <img src={political.IdentificacaoParlamentar.UrlFotoParlamentar}/>
                    </a>
                </div>
            </div>
        ))
    }

    return (
        <main className={Object.keys(props.infos).length > 0 ? 'none' : 'wrapper'}>
            <div className="political">
                {renderRows()}
            </div>
        </main>
    )
}

const mapStateToProps = state => ({list: state.political.list, infos: state.political.modal})
const mapDispatchToProps = dispatch => bindActionCreators({modal}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PoliticalList)