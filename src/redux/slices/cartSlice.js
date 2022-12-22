import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuanlity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {

            const newItem = action.payload
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            state.totalQuanlity++;
            if (!existingItem) {

                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgThumb: newItem.imgThumb,
                    price: newItem.price,
                    quanlity: 1,
                    totalPrice: newItem.price,
                })
            }
            else {
                existingItem.quanlity++;
                existingItem.totalPrice = Number(existingItem.price) * existingItem.quanlity;
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quanlity), 0);

        },
        deleteItem: (state, action) => {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id);
            if (existingItem) {

                state.cartItems = state.cartItems.filter(item => item.id !== id);
                state.totalQuanlity -= existingItem.quanlity
                state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quanlity), 0);
            }
        },
        increItemQuanlity: (state, action) => {
            const id = action.payload
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quanlity++;
                existingItem.totalPrice = Number(existingItem.price) * existingItem.quanlity;
                state.totalQuanlity++;
                state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quanlity), 0);
            }
        },
        decreItemQuanlity: (state, action) => {
            const id = action.payload
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
                if (existingItem.quanlity <= 1) return;
                existingItem.quanlity--;
                existingItem.totalPrice = Number(existingItem.price) * existingItem.quanlity;
                state.totalQuanlity--;
                state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quanlity), 0);
            }
        },
    }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer