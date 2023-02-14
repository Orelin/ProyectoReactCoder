import React,{ useContext, useState, createContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => { return useContext(CartContext) }




const CartProvider = ({children}) => {

    //Estado CartProvider
    const [items, setItems] = useState([])

    //Funciones CartProvider
    const mostrarMensaje = () =>{
        console.log("Mensaje desde proveedor al contexto...");
    }

    const addItemStore = (data) => {
        const storeProducts = items
        storeProducts.push(data)
        setItems(storeProducts)
        console.log(storeProducts);
    }

    const removeItemStore = (id) => {
        const filterId = items.filter(item => item.id !== id)
        setItems(filterId)
        console.log(id);

        console.log(filterId);
    }

    const clearItemStore = () => {
        setItems([]);
    }

    const validItems = () => {


    }



    return (
        <CartContext.Provider 
            value={{
                items, 
                mostrarMensaje,
                addItemStore,
                removeItemStore
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider