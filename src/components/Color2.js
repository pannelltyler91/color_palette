import {Component} from 'react';

class SingleColor extends Component{
    render(){
        return(
            <div style={{backgroundColor:this.props.color,height:'100px', width:'100px'}} onClick={this.props.onClick} locked={this.props.locked} id={this.props.id} >
                {this.props.locked ? 'I am locked' : 'I am not locked'}
            </div>
        )
    }
}

export default SingleColor;