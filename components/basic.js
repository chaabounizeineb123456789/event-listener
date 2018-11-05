import React, {Component} from "react";
import '../basic.css';



class Box extends Component{
	sayHi = () => { 
		return (
			document.getElementById('content').innerHTML = this.props.name ,
			document.getElementById('img').src  = this.props.image,
            document.getElementById('p').innerHTML = this.props.p
			)

	}	 
	
	render() {

		return(
          <div id="hi">
		    <button  onClick={this.sayHi}>{this.props.name}</button>

		  </div>
				);
	}
}
export default Box;