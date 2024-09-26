import React, {Component} from 'react'

class Cones extends Component {

    clickAlert = () => {
        alert("hello")
    }

    render(){
        return (
            <div>
                <button onClick={this.clickAlert}>Click Me</button>
            </div>
        )
    }
}
export default Cones
