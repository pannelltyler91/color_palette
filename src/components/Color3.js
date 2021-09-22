import {Component} from 'react';

class Color3 extends Component{
    randomColor = () => {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
    
        return `rgb(${red}, ${green}, ${blue})`
    }
    render(){
        return(
            <div style={{backgroundColor:this.randomColor(),height:'100px',width:'100px'}}>
                <h1>Color3</h1>
                <button>Save Color</button>
            </div>
        )
    }
}

export default Color3;