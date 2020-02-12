import createDataContext from './createDataContext';
import { AsyncStorage } from 'react-native';

const bookmarkReducer=(state,action)=>{
    switch(action.type){
        case 'save_fetch':
            return {...state,bookmarkData:action.payload}
        default:
            return state;
    }
};
const setBookmark=(dispatch)=>{
    return async(newsItem)=>{
      try{
         await AsyncStorage.setItem(newsItem.title,JSON.stringify(newsItem));
      }catch(err){
          console.log(err);
      }
    }
}
const clearAll=dispatch=>{
    return async()=>{
        await AsyncStorage.clear();
    }
}
const fetchBookmark=dispatch=>{
  return async()=>{
    try {
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);
    
        const news=result.map((req) =>{ 
           return JSON.parse(req[1])
        })
        dispatch({type:'save_fetch',payload:news})
      } catch (error) {
        console.error(error)
      }
  }
}

export const {Provider,Context}=createDataContext(
    bookmarkReducer,{
        fetchBookmark,setBookmark,clearAll
    },{
        bookmarkData:[]
    }
);