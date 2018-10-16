import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './modal.css'

class Modal extends Component {
    constructor(props){
        super(props)

        this.openModal = this.openModal.bind(this);
    }

    openModal(){
        debugger;
        if(Object.keys(this.props.infos).length > 0){
            return <div className="modal-political">
                        <div className="close">
                            <a href="#" onClick={}></a>
                        </div>
                        <div className="modal-container">
                            <div className="image-political">
                                <img src={this.props.infos.IdentificacaoParlamentar.UrlFotoParlamentar}/>
                            </div>
                            <div className="description-political"></div>
                        </div>
                    </div>  
        }
    }

    render(){
        return(
            <div className="modal">
                {this.openModal()}
            </div>
        )
    }

}


const mapStateToProps = state => ({infos: state.political.modal})
export default connect(mapStateToProps)(Modal)