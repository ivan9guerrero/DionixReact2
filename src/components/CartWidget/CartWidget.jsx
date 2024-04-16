
import { useContext } from "react"
import { Link } from 'react-router-dom'
// CONTEXTO...
import { CartContext } from "../../context/CartContext"
// ESTILOS....
import './CartWidget.css'



export const CartWidget = () => {


  const { totalItems } = useContext(CartContext)

  return (

      <Link to="/cart" className="cart">
        <i className="fas fa-shopping-cart"></i>
        <span className="dot">{ totalItems }</span>
      </Link>
      
  )
}