import React, { Component } from 'react'
import { connect } from 'react-redux'
import { search } from '../../political/politicalActions'
import { bindActionCreators } from 'redux'

import './loading.css';

class Loading extends Component {
    constructor(props){
        super(props)

        this.loadingData = this.loadingData.bind(this);
    }

    componentWillMount(){
        this.props.search();
    }

    loadingData(){
        if(this.props.list.length > 0){
            return this.props.children
        }else{
            return <div className="loading"><div className="fa fa-spinner loading"></div></div>
        }
    }

    render(){
        return(
            <div>
                {this.loadingData()}
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.political.list})
const mapDispatchToProps = dispatch => bindActionCreators({search}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Loading)