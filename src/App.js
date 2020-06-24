import React , {Component} from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import User from './profile/profile';
import Myimage from './profile/undraw_my_documents_ym8x.svg';

const user = 
  [
    {
      fullName:"Amel Benabdalleh" ,
     bio:"hello",
     profession: "Marketing",
     image: Myimage,
  }
  ]


class App extends Component {
 

  render() {
    return (
        <div className="App">
          <User x={user}/>
        </div>
      );
  }
 
}

export default App;
