import React, { useEffect, useState, createContext } from 'react'
import { products } from '../../frontend_assets/assets'
import axios from 'axios'


export const StoreContext = createContext()

const StoreContextProvider = (props) => {
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [selectedItem, setSelectedItem] = useState(null);
    const [relatedProd, setRelatedProd] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [placeOrder, setPlaceOrder] = useState(false);
    const [list, setList] = useState([]);

    const productData = async () => {
        const response = await axios.get('http://localhost:3000/products');
        if (!response.data.success) {
            console.log(response.data.message);
            return;
        }
        setList(response.data.data);
    };

    useEffect(() => {
        productData();
        console.log(relatedProd)
    }, []);

    const fixCategory = (newCategory) => {
        setCategory((prevCategory) =>
            prevCategory.includes(newCategory)
                ? prevCategory.filter((item) => item !== newCategory)
                : [...prevCategory, newCategory]
        );
    }

    const fixSubCategory = (newSubCategory) => {
        setSubCategory((prevSubCategory) =>
            prevSubCategory.includes(newSubCategory)
                ? prevSubCategory.filter((item) => item !== newSubCategory)
                : [...prevSubCategory, newSubCategory]
        );
    }

    const cartItems = (selected, size) => {
        if (selected && size) {
            const existingItemIndex = cart.findIndex(
                (item) => item.name === selected.name && item.selectedSize === size
            );

            if (existingItemIndex !== -1) {
                // Update existing item quantity
                const updatedCart = [...cart];
                updatedCart[existingItemIndex].quantity += 1;
                const updatedItem = updatedCart[existingItemIndex];
                updatedItem.total = updatedItem.price * updatedItem.quantity; // Calculate total for this item
                setCart(updatedCart);
            } else {
                // Add new item with quantity 1 and calculate the total
                setCart((prev) => [
                    ...prev,
                    { ...selected, selectedSize: size, quantity: 1, total: selected.price }
                ]);
            }

        } else if (selected) {
            // Remove item from cart
            const newCart = cart.filter((item) => item._id !== selected._id);
            setCart(newCart);
        }
    };

    useEffect(() => {
        // Calculate the subtotal for the entire cart
        let subTotal = 0;
        cart.forEach((item) => {
            subTotal += item.total;
        });
        setTotal(subTotal);

        console.log('Subtotal:', subTotal);
        console.log(cart);
    }, [cart]);

    useEffect(() => {
        console.log(selectedItem)
        if (selectedItem !== null) {
            const related = list.filter(
                (item) =>
                    item.name === selectedItem.name && item.image !== selectedItem.image
            );
            setRelatedProd(related);
        }
    }, [selectedItem]);

    return (
        <StoreContext.Provider value={{list, fixCategory, category, subCategory, fixSubCategory, setSelectedItem, selectedItem, relatedProd, cartItems, cart, setCart, total, placeOrder, setPlaceOrder }}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;
