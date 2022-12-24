import { configureStore } from '@reduxjs/toolkit';
import { setStorage ,getStorage} from '../HelperFun/browserStorageFuns';
import {UserAuthReducer} from './Actions';


 const store=configureStore({
    reducer:{
      userAuth:UserAuthReducer,
    },
    preloadedState: getStorage("previousStoreData")||{}
});
    
    store.subscribe(()=>setStorage("previousStoreData",store.getState()))

export default store