import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends = [ 'Arif', 'Swati', 'Ummi', 'Ashik', 'Amit', 'Jemi', 'Sana' ]
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$89.99'},
    {name: 'Adobe XD', price: 'Free'},
    {name: 'Adobe Premiere EL', price: '$289'},
    {name: 'Adobe PDF', price: '$2'}
  ]
  
  // const productNames = products.map(product => product.name);
  // console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            friends.map( friends => <li> {friends} </li> )
          }
          {/* {
            products.map(products => <li> {products.name} </li> )
          } */}
        </ul>
          {
            products.map(pd => <Product product={pd} ></Product> )
          }
        {/* <Product product= {products[0]} ></Product>
        <Product product = {products[1]} ></Product>
        <Product product = {products[2]} ></Product> */}

        {/* <Person name= 'Arif Ali' live='USA'></Person>
        <Person name= 'Ali Akram' live='Australia'></Person> */}
      </header>
    </div>
  );
}

// increase count [start]
function Counter(){
  const [count, setCount] = useState(0); 
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove= {() => setCount(count - 1)} >Decrease</button>
      <button onClick={() =>  setCount(count + 1)} >Increase</button>
    </div>
  )
}
// increase count [finish]


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then( res => res.json())
    .then(data => setUsers(data));
  }, [] )
  return(
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map( user => <li> {user.name} </li> )
        }
      </ul>
    </div>
  )
}


//product style
function Product(props) {
  const productStyle = {
    border: '1px solid grey',
    borderRadius: '5px',
    backgroundColor: 'red',
    height: 'auto',
    width: '300px',
    float: 'left',
    margin: '10px',
    padding: '18px 32px',
    boxShadow: '5px 5px 3px pink'
    
  }


// destructing 
  const {name, price} = props.product;
  return (
    <div style={productStyle} >
      <h3>{name} </h3>
      <h5> {price} </h5>
      <button>Buy now</button>
    </div>
  )
}


// function Person(props) {
//   return(
//     <div style= {{border: '2px solid gold', width: '400px', margin: '20px', borderRadius: '10px'} } >
//       <h3>My friend: {props.name} </h3>
//       <p>He lives in: {props.live} </p>
//     </div>
//   )
// }

export default App;
