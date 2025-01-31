// REACT
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// COMPONENTES
import { ItemList } from "../ItemList/ItemList"

// CSS
import './ItemListContainer.css';

// DB FIREBASE
import { db } from "../../config/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore";



// **************************************************
export const ItemListContainer = ({ greeting }) => {

  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  // productos desde DB ************************************
  const getProductsDB = (category) => {


    const myProducts = category ?
      query(collection(db, "products"), where("category", "==", category)) :
      collection(db, "products");

    //obtener los documentos de db
    getDocs(myProducts)
    
      .then(response => {
        const productList = response.docs.map(doc => {
          const item = {
            id: doc.id,
            ...doc.data()
          }
          return item;
        });

        // guardamos nuestros productos ordenados
        setProducts(productList);
        setLoading(false);

      });

  }

  // useEffect ************************************
  useEffect(() => {
    setLoading(true)
    getProductsDB(category)



  }, [category])
  // cuando 'category' cambia, carga nueva lista de productos
  // *********************************************

  // spinner bootstrap from...
  // https://getbootstrap.com/docs/4.2/components/spinners/
  return (
    <>

      {
        loading ?
          <div>
            <h2>Cargando Productos...</h2>
            <div className="spinner-border" role="status"></div>
          </div>
          
          :
          <>
            {products.length === 0 && <h2>Categoria sin productos</h2>}
            {products.length > 0 && 
            <div className="productsFlex">
            <ItemList products={products} />
            </div>
            }
          </>
      }
    </>
  )

  // --------------------------------------------------



}
