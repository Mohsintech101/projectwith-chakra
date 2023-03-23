import { createReducer } from "@reduxjs/toolkit";

export const firstReducer = createReducer(
    {
        coins: []
    },
    {
        myFirstCase: (state, action) => {
            state.coins = action.payload
            console.log(action.payload)
        }
    }
)

export const countReducer = createReducer(
    {
        count: 0
    },
    {
        incrementCount: (state) =>{
            state.count += 1
        },
        decrementCount: (state) =>{
            state.count -= 1
        }
    }
)