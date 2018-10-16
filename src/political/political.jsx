import React, {Component} from 'react';

import Header from '../template/header'
import PoliticalList from './politicalList'
import Modal from '../components/modal/modal'

import Loading from '../components/loading/loading'

export default class Political extends Component {
    render(){
        return(
            <Loading>
                <Header />
                <PoliticalList />
                <Modal />
            </Loading>
        )
    }
}
