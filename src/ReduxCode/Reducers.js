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

export const PrevCartDataSlice=createSlice({
    name:'cartData',
    initialState: getStorage("previousCartData") ||{
        prevCartData:[],
        totalPrice:'0',
        countObj:{}
    },
    reducers:{
        updateCartData:(state,action) => { return {...current(state), prevCartData:[...current(state.prevCartData) ,action.payload] }},
        
        updatePrice:(state,action)=>{ 
            return {    ...current(state) , totalPrice: action.payload.totalPrice ,
             countObj:{ ...current(state.countObj) ,[action.payload.countObj.id]:action.payload.countObj.count} 
            } 
        },
        removeCartData:(state,action) => {
            return  { ...current(state) ,prevCartData:current(state).prevCartData.filter(data => data._id !== action.payload )}
         }
    }

})

export const {changeUserAuth,setUserData}=UserAuthSlice.actions;
export const {updateCartData,updatePrice,removeCartData}=PrevCartDataSlice.actions;
