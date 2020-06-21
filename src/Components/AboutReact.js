import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { Spring } from "react-spring/renderprops";


class AboutReact extends React.Component {

    render() {

        return (

            <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop: 0 }}
            >
            {props => (
              <div style={props}>
            
                <Header/>
                <h1 className="heading">What is a single page application?</h1>
                <div className="textbox">
                <p>
                React is a JavaScript frameworks which enables you to break up your code into reusable chunks called components.
                </p>
                <p>
                This makes your code easier to debug and reuse across pages, which enables better scalability when your apps become larger and more complex.
                </p>
                <p>
                React enables you to create custom components, such as a &lt;NavBar&gt;, which can then be used in other parts of your app. 
                </p>
                <p>
                Traditional websites would use multiple HTML files with links between them, and send an HTTP request to a server whenever a different page of the website was loaded.
                </p>
                <p>
                Therefore when navigating a traditional website many HTTP server requests and page loads would occur.
                </p>
                <p>
                React tackles this problem by enabling you to create a single page application which rerenders in accordance with the client interaction with the page.
                </p>
                <p>
                A single page application, therefore, need only load once, and simply rerenders when the client navigates through the application.
                </p>
                </div>


                <h1 className="heading">What is React Router and how does it work?</h1>
                <div  className="textbox">
                <p>
                React router enables you to create multiple pages on a single page application. This enables you to load new content <em>without</em> requiring you to send a new HTTP request to a server.
                </p>
                <p>
                You must install react-router-dom in order to be able to use it as it does not come installed in the Create React App package. Once installed, the react router package should be visible in your node_modules folder.
                </p>
                <p>
                You must then import BrowserRouter, Route and Switch from "react-router-dom" as we will be using these three components. &lt;BrowserRouter&gt; and &lt;Switch&gt; are wrappers and &lt;Route&#47;&gt; is self-closing.
                </p>
                <p>
                In your App.js file, wrap a &lt;Route&#47;&gt; inside a &lt;BrowserRouter&gt; and wrap all this in a &lt;div&gt;. The &lt;Route&#47;&gt; component takes parameters, which will be the path to the new component we want to render. For example &lt;Route path="/Home" &#47;&gt;.
                </p>
                <p>
                The second parameter is the component the path will lead to, such as &lt;Route path="/Home" component={'{Home}'} &#47;&gt;. Once I enter localhost:3000/Home the Home component should render.
                </p>
                <p>
                Then we can wrap our &lt;Route&#47;&gt; components inside a &lt;Switch&gt; component. The &lt;Switch&gt; component will only render the first &lt;Route&#47;&gt; component that matches the path.
                </p>
                <p>
                Finally, we can import {'{ Link }'} from react-router-dom in the &lt;NavBar&gt; element, for example. Which enables us to create a link to a path. The syntax is {'<'}Link to="/Home"{'>'}{'<'}li{'>'}Home{'<'}li{'/>'}{'<'}Link{'/>'}
                </p>
                <p>
                And now we have multiple pages on a single page application!
                </p>
                </div>


                <h1 className="heading">What are components?</h1>
                <div className="textbox">
                <p>
                You wouldn't want to stick your entire web applicaiton code inside ReactDOM.render(). For a page with hundreds of elements on it, this would be impossible to maintain.
                </p>
                <p>
                One of the reasons React is popular is reusable web components.
                </p>
                <p>
                You can create either functional components by writing a function, or class-based components by creating a class. Most are done using class, as this gives you access to the functionalities of the React component, including state.
                </p>
                <p>
                It is a good convention to have each React component in its own, separate .js file. This enables better organised work on projects, reusable components and scalability of applications.
                </p>
                <p>
                When creating a component we start by importing React on the first line of the file, then exporting our component on the last line. We can then write our component, and it can be imported anywhere in our application.
                </p>
                <p>
                In React, you're going to have a heirarchy of components that eventually lead down to JSX elements. For example, &lt;App &#47;&gt; --> &lt;NavBar &#47;&gt; --> {'<'}ul{'>'}{'</'}ul{'>'}.
                </p>
                <p>
                Here, the HTML element is the most base root of this tree. The &lt;NavBar &#47;&gt; is the child of the &lt;App &#47;&gt; component, and also the parent of the unordered list. 
                </p>
                <p>
                The &lt;App &#47;&gt; component can also branch down into other eventual HTML elements. 
                </p>
                </div>

                <h1 className="heading">What are props?</h1>
                <div className="textbox">
                <p>
                Props is a keyword in React which stands for properties. It is used for passing data from a parent component to its child component. Data from props are passed unidirectionally (parent to child).
                </p>
                <p>
                Props is read-only, meaning data coming through props cannot be manipulated by child components. It can only be rendered/displayed. 
                </p>
                <p>
                Adding a prop to a component is similar to adding an attribute to an HTML element. {'<'}a href="value"{'>'}Link{'<'}a{'/>'} is similar to {'<'}Component property="value" {'/>'}.
                </p>
                <p>
                For example, the contact cards on the homepage pull data from an array of objects which list their contact details. In ContactCards.js, I added properties to the &lt;ContactCard&#47;&gt; component and assigned values to the properties like so: 
                </p>
                <p>
                {'<'}ContactCard name={'{'}ContactCardsData.name{'}'} phone={'{'}ContactCardsData.phone{'}'} email={'{'}ContactCardsData.email{'}'} key={'{'}ContactCardsData.id{'}'} {'/>'}
                </p>
                <p>
                In the ContactCard component we now have props data we can use and display:
                </p>
                <p>
                {'class ContactCard extends React.Component { render() { return ( <div className="ContactCard"><h3>{this.props.name}</h3><p>Phone: {this.props.phone}</p><p>Email: {this.props.email}</p></div>)}}}'}.
                </p>
                <p>
                Props (data) have now been passed from parent {'<ContactCards />'} to child {'<ContactCard />'}.
                </p>
                </div>

                <h1 className="heading">What is state?</h1>
                <div className="textbox">
                <p>
                State is simply the data that a component maintains. Props are immutable so can't be changed by the child component, for example we cannot say this.props.value = "some new value". We cannot change props.
                </p>
                <p>
                State is different in that it is a way that a component can maintain its own data and change its own data if it needs to.
                </p>
                <p>
                To introduce state to a component we first need to add a constructor method. A constructor is a place where you're going to be initialising some values. We initialise state here by adding this.state = 0 to our constructor.
                </p>
                <p>
                Our component now has state and we have given an initial value to to our state. 
                </p>
                <p>
                We can pass this state to child components using props. If we change the state using the setState() method, React will automatically update every child component that is receiving that state.
                </p>
                <p>
                For example, on Home I have a {'<Button />'} component which has its initial value set to 0. And every time the user clicks submit, I want this value to increment by one each time.
                </p>
                <p>
                I then added the event handler onClick which registers when the button is click, and created a function handleClick() which, every time the button is clicked, remembers the previous state (or previous value) and adds 1 to it.  
                </p>
                <p>
                Finally this function must be bound to the constructor() method by adding: this.handleClick = this.handleClick.bind(this) inside the constructor. This binds this function to this state within the context of this component.
                </p>
                <p>
                Now that we have the ability to make components maintain their own data in state this opens up a lot of possibilities as to what we can do with our React applications.
                </p>
                </div>

                <h1 className="heading">What are lifecycle methods?</h1>
                <div className="textbox">
                <p>
                React components go through a lifecycle of being created (mounted to the DOM), growing (updating) and dying (being unmounted or removed from the DOM).
                </p>
                <p>
                Lifecycle methods enable us to manipulate components depending on what stage of the lifecycle they are in. 
                </p>
                <p>
                The most commonly used lifecycle methods in React are render(), componentDidMount(), componentDidUpdate() and componentWillUnmount(), which correspond to the lifecycle of the component being rendered.
                </p>
                <p>
                For example, on the homepage the {'<Button />'} component uses the componentDidMount() and componentWillUnmount() to console log the comments 'component did mount' or 'component did unmount' depending on whether the button has been mounted or unmounted.
                </p>
                <p>
                componentDidMount() is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint.
                </p>
                <p>
                componentDidUpdate() is invoked as soon as the updating happens, and is most commonly used when updating the DOM in response to prop or state changes.
                </p>
                <p>
                componentWillUnMount() is called just before the component is unmounted and destroyed, and is a good place to do any cleanup actions that you need to do such as clearing timers, cancelling API calls, or clearing any caches in storage. Cleaning up code can free up resources for your app and make it run faster, and is important to do in large scale applications.
                </p>
                </div>

                <div className="react-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
                     <g fill="#61DAFB">
                      <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
                      <circle cx="420.9" cy="296.5" r="45.7"/>
                      <path d="M520.5 78.1z"/>
                     </g>
                </svg>
                </div>
            


                <Footer />
            
               
            </div>
            )}
            </Spring>
        )
    }
}

export default AboutReact

