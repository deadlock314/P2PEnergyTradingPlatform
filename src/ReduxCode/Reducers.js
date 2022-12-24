import { createSlice ,current } from '@reduxjs/toolkit';
import { getStorage } from '../HelperFun/browserStorageFuns';

export const UserAuthSlice=createSlice({
    name:'authContext',
    initialState:{
        value:false,
        isMailVerfied:false,
        isWalletConnected:false,
        userData:{}
    },
    reducers:{
        changeUserAuth:(state,action) => {return {...current(state),value:action.payload}},
        setUserData:(state,action)=>{
            return { ...current(state),userData:action.payload}
        },
        AddUserAddress:(state,action)=>{
            return {...current(state)}
        }
    }
})


export const {changeUserAuth,setUserData}=UserAuthSlice.actions;

