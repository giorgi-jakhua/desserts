import './App.css'
import { AddToCart } from './Icons'
import dessertsProducts from './data.json'

console.log(dessertsProducts)

const BASE_URL ="https://res.cloudinary.com/dc2c49xov/desserts/"
function App() {
  

  return (
    <>
      <h1>Desserts</h1>
      <div className="container">
        <div className="desserts-container">
          {dessertsProducts.map((dessert) => {
            return (
              <div className='dessert-box' key={dessert.name} style={{ marginLeft: '3%' }}>
                <div className="dessert-img-box">
                  <picture>
                    <source
                      media="(min-width:1024px)"
                      srcSet={`${BASE_URL}/${dessert.images.desktop}`}
                    />
                    <source
                      media="(min-width:768px)"
                      srcSet={`${BASE_URL}/${dessert.images.tablet}`}
                    />
                    <img className='img'
                      src={`${BASE_URL}/${dessert.images.mobile}`}
                      alt={dessert.name}
                      style={{ width: '100%' }}
                    />
                  </picture>
                  <button className='add-to-cart-btn'>
                    <AddToCart /> Add to cart
                  </button>
                </div>
                <p>{dessert.name}</p>
                <h4>{dessert.category}</h4>
                <h3>{dessert.price * 10 % 10 === 0 ? dessert.price.toFixed(0) : dessert.price.toFixed(1)}$</h3>
              </div>
            ) 
          })}
          
        </div>
        <div className="cart">
          <h1>Your Cart(0)</h1>
          <p>Your added items will appear here</p>
        </div>
      </div>
    </>
    
  )
}

export default App
