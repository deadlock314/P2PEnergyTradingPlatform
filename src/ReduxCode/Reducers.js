import { createSlice ,current } from '@reduxjs/toolkit';
// import { getStorage } from '../HelperFun/browserStorageFuns';

export const UserAuthSlice=createSlice({
    name:'authContext',
    initialState:{
        value:false,
        isMailVerfied:false,
        isWalletConnected:false,
        userData:{},
        locationData:{}
    },
    reducers:{
        changeUserAuth:(state,action) => {return {...current(state),value:action.payload}},
        setUserData:(state,action)=>{
            return { ...current(state), userData:{ ...state.userData, ...action.payload}}
        },
        setUserLocation : (state,action) =>{
            return {...current(state),locationData : action.payload}
        },deleteUserData:(state,action)=>{
            return { ...current(state), userData:action.payload}
        },

    }
})


export const {changeUserAuth,setUserData , deleteUserData, setUserLocation}=UserAuthSlice.actions;

