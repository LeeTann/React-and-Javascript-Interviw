# React Questions

1. What's React?
   Frontend library developed by Facebook. React uses component-based approach which helps ensures you build components that pocessess high reusability and independent of each other. Because of this component approach, UI testing becomes easier. Can build web and mobile. Boost performance and efficiency.

2. What is the virtual DOM?
   A simple JS object that is the exact copy of the real DOM. React uses the virtual DOM and updates only the JSX element that needs to be updated through a process called reconciliation.

3. What's the difference between the Virtual DOM and the Real DOM?
   Virtual DOM - Minimal memory wastage. Changes can easily be made and has fast updates. Cannot update HTML directly. Uses JSX.
   Real DOM - High memory wastage. Changes can be expensive and has slow updates. Can directly minipulate the real DOM.

4. What are some important features of React?
   React makes use of a single direction data flow model. React uses the Virutal DOM that has many advantages. React can handle and process server-side data.

5. What is JSX?
   An abbreviation of JavaScript XML. It brings out the essence of JS and HTML to React. Browsers cannot read JSX files directly. It has to transform into a JS object first using JSX transformer.

6. What's the disadvantages of React?
   Writing code can be complex for beginners because it uses JSX and inline template formating. The library contains a huge respository of information which can be overwhelming. React is a lightweight library and not a complete framework, so you have to add certain dependencies.

7. Difference between Angular vs React?
   Angular - Real DOM. Full MVC support. Unidirectional binding. Client side render support.
   React - Virtual DOM. Only the view aspect of MVC. Two-way data binding. Server side render support.

8. What is Higher order components?
   A technique in React for resuing component logic. A higher order component is a function that takes a component and returns a new component. We take that HOC and wrap it around our component to give it that reusable logic.

9. What's Redux and how does it work?
   Redux is a single source of truth. It stores all the data in a single entity. Redux requires code to be organize, making code more independent and testable, Redux tool to track state.

   Redux has a Store that keep tracks of all the state. You then declare a Reducer which takes in an action and a state. And when you dispatch an action, which contains your logic, the state gets updated and React rerenders the DOM with the state changes.

10. What are events in React?
    Events are whenever the user perform any action, like a mouse movement or click, and these actions trigger an event.

11. What are Prop types?
    Prop types are a way for you to know what types a component is expecting.

12. How does React rendering work?
    React listens for DOM updates and rerenders the DOM tree on every change. It does the rerender really quickly because it only rerenders the actual things that are changing instead of rerendering the whole DOM.

13. What's a container component and view component?
    A container component is just a component that contains all the logic and functions where as a view component only display the jsx.
