import React, {Component} from "react";

class Conec extends Component {

    constructor(props){
        console.log(props)
        super(props)
        this.state = {
            count:0,
            name:props.name
        }
    }

    increaseCount = () =>{
        //this.state.count = this.state.count + 1
        this.setState({
            count:this.state.count + 1
        })
    }
    decreaseCount = () => {
        //this.state.count = this.state.count + 1
        this.setState({
            count:this.state.count - 1
        })
    }
    render(){
        return(
            <div>
                <p>Count:{this.state.count}</p>
                <p>Count:{this.state.name}</p>

            </div>
        )
    }
}
