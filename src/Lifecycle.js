import React from 'react';
 class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:true,
            count:0,
        };
    }
    delHeader = () => {
        this.setState({show:false});
    }

    componentDidMount() 
{
    console.log("componentDidMount Method");
}

componentDidUpdate() 
{
    console.log("componentDidupdate Method");
}


    render() {
       let myHeader;
       if(this.state.show){
        myHeader = <Child/>
       };
       return (
        <div>
            <center>
                {myHeader}
                <button type="button" onClick={this.delHeader}>Delete</button><hr/><hr/>
                <h3>count:{this.state.count}</h3>
                <button type="button" onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
                <button type="button" onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
            
            </center>
        </div>
       )
       }
    }
     class Child extends React.Component{
       
        componentWillUnmount() 
        {
            console.log("componentWillUnmount Method");
        }
        render(){
            return(
                <h1>Hi Codilar!</h1>
            )
        }

     }
     export default Lifecycle
    
      