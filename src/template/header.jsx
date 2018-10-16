import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../political/politicalActions'

import './header.css';


class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header>
                <div className="title">
                    <h1>Lista de Políticos</h1>
                </div>
                <div className="infos">
                    <h2>Atualizado em: {this.props.version.Versao}</h2>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({version: state.political.version})
export default connect(mapStateToProps)(Header)