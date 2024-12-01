import './App.css'
import { AddToCart } from './Icons'
import dessertsProducts from './data.json'

console.log(dessertsProducts)

const BASE_URL ="https://res.cloudinary.com/dc2c49xov/desserts/"
function App() {
  return (
    <>
      <h1>hello world <AddToCart /></h1>
      
      {dessertsProducts.map((dessert) => {
        return (
          <div key={dessert.name}>
            <img src={`${BASE_URL}/${dessert.images.thumbnail}`} alt="" />
          </div>
        )
      })}
    </>
    
  )
}

export default App
