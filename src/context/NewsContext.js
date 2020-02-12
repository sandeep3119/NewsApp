import createDataContext from './createDataContext';
import newsAPI from '../api/newsAPI';
const newsReducer=(state,action)=>{
    switch(action.type){
        case 'fetch_news':
            return {newsData:action.payload}
        default:
            return state;
    }
};

const fetchNews=dispatch=>async()=>{
    const response=await newsAPI.get();
    dispatch({type:'fetch_news',payload:response.data.articles})
}

export const {Provider,Context}=createDataContext(
    newsReducer,{
        fetchNews,
    },{
        newsData:[]
    }
);