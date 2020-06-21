import React from "react";

class TodoItems extends React.Component {
    constructor(props) {
        super(props);
     
        this.createTasks = this.createTasks.bind(this);
      }
     
      delete(key) {
        this.props.delete(key);
      }

    createTasks(item) {
        return <li className="fade-in" onClick={() => this.delete(item.key)} 
              key={item.key}>{item.text}</li>
    }
   
    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);
   
      return (
        <ul className="theList">
            {listItems}
        </ul>
      );
    }
  };
   
  export default TodoItems;
    
// this code renders the value of this.state.items to our browser.
// in the render() for our <TodoList />, we have the following: <TodoItems entries={this.state.items}/>
// TodoList is given a property called "entries" which is assigned the value of the current state of the items array...
// these values are what we want to render to our browser in the form of a list.
// <TodoItems entries={this.state.items}/> ... here, a prop (called "entries" with the value of this.state.items of the TodoList component),
// is being passed down to its child component.
// It is a child component because it is rendered inside its parent component. 
// THIS IS WHAT PASSING PROPS MEANS, WHICH IS JUST PASSING DATA FROM PARENT TO CHILD.

//  Inside our render() method we define two variables.
// todoEntries, which is assigned the value of entries. var todoEntries = this.props.entries;
// listItems, which is a new array (created using the map() method) created from the todoEntries array (originally this.state.items in the todoList component)...
// Passed into the map method as a paremeter is a function called createTasks
/* The value stored by our listItems variable is an array of li elements containing the appropriate content to print. Notice that we are setting the key attribute (whose value, if you recall, we set earlier using Date.now()) on each element to make it easier for React to keep track of each element.

We turn this list of element into something we can show on screen with the following:

return (
  <ul className="theList">
      {listItems}
  </ul>
);*/

// finally TodoItems returns listItems and they are displayed in the browser.


