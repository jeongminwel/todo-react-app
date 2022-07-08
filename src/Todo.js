import React from 'react'
class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          items : [
            { id : "1", title : "first", done: true },
            { id : "2", title : "second", done: false},
          ]
        }
    }
  
    render() {
      return (
        <div className="Todo">
          <input
            type="checkbox"
            id={this.state.item.id}
            name={this.state.item.name}
            checked={this.state.item.done}
          />
          <label id={this.state.item.id}>{this.state.item.title}</label>
        </div>
      )
    }
  }
  
  export default Todo;
  