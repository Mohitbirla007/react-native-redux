import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({          // slices are the peices of store
    name:"user",
    initialState: {
        userName: ''
    },
    reducers: {
        setUserName(state, action) {
            state.userName = action.payload
        },
        removeUser(state, action) {},
        deleteUser(state, action) {},
    }
})

export {userSlice};
export const  {setUserName, removeUser, deleteUser}  = userSlice.actions

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
    },
    reducers: {
        increaseCounter(state) {
            state.counter +=1
        },
        decreseCounter(state){
            state.counter -=1
        }
    }
})
export {counterSlice}
export const {increaseCounter, decreseCounter} = counterSlice.actions