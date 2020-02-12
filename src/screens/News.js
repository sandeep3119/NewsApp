import React, { useContext, useEffect, useState, forwardRef } from 'react'
import { View,Share, FlatList } from 'react-native'
import NewsComponent from '../components/NewsComponent'
import {Context as NewsContext} from '../context/NewsContext';
import {Context as BookmarkContext} from '../context/BookmarkedContext';
import { ActivityIndicator } from 'react-native-paper';
import Toast from 'react-native-simple-toast'

const News=(props)=> {
    const {fetchNews,state:{newsData}}=useContext(NewsContext);
    const {setBookmark,state:{bookmarkData}}=useContext(BookmarkContext)
    const [loading,setLoading]=useState(true);
    const [refreshing,setRefreshing]=useState(false)
    
   const handleRefresh=()=>{
        setRefreshing(true);
        fetchNews();
        setRefreshing(false);
    }
    useEffect(()=>{
        fetchNews();
        setTimeout(()=>{
            setLoading(false);
        },2000);
    },[loading])
     let openShareDialogAsync= (item) => {
       Share.share({
           title:item.title,
           message:item.url,
       }).then(result=>console.log(result))
       .catch(err=>console.log(err));
      };
    if(loading){
        return(
            <View style={{alignContent:'center',flex:1,justifyContent:'center'}}>
        <ActivityIndicator animating={true}
        color='#FF6666'
        size={50}
        style={{alignSelf:'center'}}/>
        </View>
        )
    }
    else{
        return(
            <View style={{backgroundColor:'white'}}>
            <FlatList
             onRefresh={handleRefresh}
             refreshing={refreshing}
             data={newsData} 
             keyExtractor={(item)=>item.title}
             renderItem={({item})=>{
                 return(
                     
                     <NewsComponent
                       onDetailedPress={()=>{
                           props.navigation.navigate('DetailedScreen',{newsItem:item})
                            
                       }}
                       onSharePress={()=>{
                           openShareDialogAsync(item)
                           
                       }}
                       onPressBookmark={()=>{
                           setBookmark(item);
                           Toast.show('Bookmarked',Toast.SHORT)
                       }}
                       url={item.urlToImage}
                        description={item.description}
                        title={item.title}/>
                        
                 )
             }}/>
            
             </View>
        )
    }
}

News.navigationOptions={
    headerTitle:'News 20',
    headerStyle:{
        backgroundColor:'#ff1744'
    },
    headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
}

export default News;
