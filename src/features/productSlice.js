import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        { id: '1', name: 'Banana', price: 130, quantity: '1 dozen' },
        { id: '2', name: 'Carrot', price: 75, quantity: '1 kg' },
        { id: '3', name: 'Milk', price: 180, quantity: '1 liter' },
    ],
    editingProduct: null
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = { 
                ...action.payload, 
                id: (state.products.length + 1).toString() 
              };
            state.products.push(newProduct);
        },
        deleteProduct: (state, action) => {
            const productIndex = state.products.findIndex(product => product.id === action.payload);
            if (productIndex !== -1) {
                state.products.splice(productIndex, 1);
            }
        },
        setEditingProduct: (state, action) => {
            state.editingProduct = action.payload;
        },
        updateProduct: (state, action) => {
            const productIndex = state.products.findIndex(product => product.id === action.payload.id);
            if (productIndex !== -1) {
                state.products[productIndex] = action.payload;
            }
        }
    }
});

export default productSlice.reducer;
export const { addProduct, deleteProduct, setEditingProduct, updateProduct } = productSlice.actions;
