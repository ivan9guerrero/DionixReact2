// REACT...
import { BrowserRouter, Route, Routes } from "react-router-dom";

// CONTEXT...
import { CartContextProvider } from "./context/CartContext";

// COMPONENTES... 
import { NavBar } from "./components/NavBar/NavBar"
import { Cart } from "./components/Cart/Cart";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CheckOut } from "./components/CheckOut/ChekOut"


// -----------------------------

const App = () => {




  return (
    <>


      <CartContextProvider>
        <BrowserRouter>
          <NavBar />

          <main>
            <Routes>

              <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />

              {/* PAGINA DE ERROR */}
              <Route path="*" element={<h1>Error 404</h1>} />

            </Routes>
          </main>

          <footer>
            <p>© 2021 DioniX - Todos los derechos reservados</p>
          </footer>

        </BrowserRouter>
      </CartContextProvider>

    </>
  )
}

export default App
