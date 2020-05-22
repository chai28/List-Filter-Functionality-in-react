import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      value: '',
      toDos: [
        {id: 1, value: "Vacuum the carpet"},
        {id: 2, value: "Clean the toilet"},
        {id: 3, value: "Go for a run"},
        {id: 4, value: "Yoga"},
        {id: 5, value: "do the groceries"},
        {id: 6, value: "Meditate"}
      ],
      toDoList: []
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.displayToDoList = this.displayToDoList.bind(this);
  }

  componentDidMount(){
    this.setState({toDoList: this.state.toDos});
  }

  displayToDoList(){
    //update to hold state for filtered list of user type in the input
    return this.state.toDoList.map(list => {
      return(
        <div key={list.id} className="toDoList">{list.value}</div>
      )
    })
  }

  searchHandler(e){
    let toDoList = [];
    // console.log(e.target.value);
    if(e.target.value === ''){
      this.setState({toDoList: this.state.toDos});
    }else{
      for(let i=0; i<this.state.toDos.length; i++){
        if(this.state.toDos[i].value.indexOf(e.target.value) >= 0){
          toDoList.push(this.state.toDos[i]);
        }
      }
      this.setState({toDoList: toDoList});
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>To do List</h1>
        </header>
          <div className="search-container">
            <input type="text" id="search-bar" defaultValue={this.state.value}
              onKeyUp={this.searchHandler}></input>
          </div>
          <div className="toDoList-container">
            {this.displayToDoList()}
          </div>
      </div>
    );
  }
}

export default App;
