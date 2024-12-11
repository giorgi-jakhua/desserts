import './App.css'
import { AddToCart } from './Icons'
import dessertsProducts from './data.json'

console.log(dessertsProducts)

const BASE_URL ="https://res.cloudinary.com/dc2c49xov/desserts/"
function App() {
  return (
    <>
      <h1>Desserts</h1>
        
      <div className="desserts-container">
        {dessertsProducts.map((dessert) => {
          return (
            <div className='dessert-box' key={dessert.name}>
              <div className="dessert-img-box">
                <img src={`${BASE_URL}/${dessert.images.desktop}`} alt="" />
                <button className='add-to-cart-btn'> <AddToCart /> add to cart</button>
              </div>
              <p>{dessert.name}</p>
              <h4>{dessert.category}</h4>
              <h3>{dessert.price.toFixed(2)}$</h3>
            </div>
          )
        })}
      </div>
    </>
    
  )
}

export default App
