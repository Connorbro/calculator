import React, {Component} from 'react';
class Result extends Component{
    render(){
        const result = <p>{this.props.result}</p>
        //let {result} = this.props.result;
        return(
            <div className = "result">
            {result}
            {/* <p>{result}</p> */}
            </div>
        )
    }
}

export default Result;