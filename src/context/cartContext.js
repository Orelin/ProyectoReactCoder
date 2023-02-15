import React,{ useContext, useState, createContext } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => { return useContext(CartContext) }




const CartProvider = ({children}) => {

    //Estado CartProvider
    const [items, setItems] = useState([])
    const [itemsNumber, setItemsNumber] = useState(0)

    //Funciones CartProvider
    const mostrarMensaje = () =>{
        console.log("Mensaje desde proveedor al contexto...");
    }

    const addItemStore = (data) => {
        let storeProducts = items
        const existingProductIndex = storeProducts.findIndex(item => item.id === data.id)

        if (existingProductIndex !== -1) {
            const existingProduct = storeProducts[existingProductIndex]
            const productUpdated = { ...existingProduct, cantidad: data.cantidad + existingProduct.cantidad }
            storeProducts[existingProductIndex] = productUpdated
        } else {
            storeProducts.push(data)
        }
        setItems([...storeProducts])
        itemCount()
}

    const removeItemStore = (id) => {
        const filterId = items.filter(item => item.id !== id)
        setItems(filterId)
    }

    const clearItemStore = () => {
        setItems([]);
    }

    const validItems = (id) => {
        return items.find(item => item.id === id) ? true : false;
    }

    const itemCount = () => { //!Cantidad de itemsCart en Number
        let itemCant = 0
        items.forEach( item => itemCant += item.cantidad)
        return setItemsNumber(itemCant)
    }

    return (
        <CartContext.Provider 
            value={{
                items, 
                itemsNumber,
                mostrarMensaje,
                addItemStore,
                removeItemStore
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider