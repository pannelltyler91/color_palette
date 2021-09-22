import {Component} from 'react';
import SingleColor from './Color2';

class Colors extends Component{
    randomColor = () => {
       let red = Math.floor(Math.random() * 255);
       let green = Math.floor(Math.random() * 255);
       let blue = Math.floor(Math.random() * 255);
   
       return `rgb(${red}, ${green}, ${blue})`
     }

     refreshColors = () =>{
         let newColors = this.state.colors.map((color) =>{
             if(color.locked){
                 return color
             }else{

                 return {color:this.randomColor(),locked:color.locked}
             }
         })
         this.setState({colors:newColors})
         
     }

     handle_Click = (e) =>{
         console.log(e.target.attributes.id)
         let newColors = this.state.colors;
    newColors[e.target.attributes.id.value].locked = !newColors[e.target.attributes.id.value].locked;

    this.setState({ colors: newColors })
        
     }

    constructor(){
        super()
        this.state ={
            colors:[

                {color:this.randomColor(),locked:false},
                {color:this.randomColor(),locked:false},
                {color:this.randomColor(),locked:false},
                {color:this.randomColor(),locked:false},
                {color:this.randomColor(),locked:false}
            ]
    }
    }
    render(){
        return(
            <div style={{backgroundColor:this.state.color,height:'100px',width:'100px'}}>
                {this.state.colors.map((colorObject, index) =>{
                    return <SingleColor color={colorObject.color} onClick={this.handle_Click} locked={colorObject.locked} id={index}/>
                })}
                <div>
                    <button onClick={this.refreshColors}>Refresh Colors</button>
                </div>
            </div>
        )
    }
}

export default Colors;