import React, { useContext, useEffect } from 'react'
import { View, Text,TouchableOpacity,Alert } from 'react-native'
import {withNavigationFocus, FlatList, NavigationEvents} from 'react-navigation'
import {Context as BookmarkContext} from '../context/BookmarkedContext';
import Icon from 'react-native-vector-icons/FontAwesome';
const Bookmarked=(props)=> {
  const {fetchBookmark,clearAll,state:{bookmarkData}}=useContext(BookmarkContext);
 const clearAllHandler= async()=>{
      await clearAll();
      fetchBookmark();

  }
  useEffect(()=>{
     props.navigation.setParams({clearAll:clearAllHandler})
  },[])
    return (
        <View>
          <NavigationEvents onWillFocus={fetchBookmark}/>
          {bookmarkData.length===0
          ?(<View style={{flex:1,alignItems:'center',marginTop:200}}>
            <Icon
             name='search-minus'
             size={100}
             color="#FF6666"/>
             <Text style={{fontSize:20}}>No Bookmarks Available!</Text>
          </View>)
          :<FlatList
          data={bookmarkData}
          keyExtractor={(item,index)=>index.toString()}
          renderItem={({item})=>{
            return(
              <View style={{borderBottomColor:'black',borderBottomWidth:1,marginVertical:5}}>
                <TouchableOpacity onPress={()=>{
                  props.navigation.navigate('DetailedScreen',{newsItem:item})
                }}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>{item.title}</Text>
          <Text>{item.description}</Text>
          </TouchableOpacity>
            </View>
            )
          }}
          
          />}
        </View>
    )
}
Bookmarked.navigationOptions=navdata=>{
  return{
  title:'Bookmarked News',
    headerStyle:{
        backgroundColor:'#ff1744'
    },
    headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    headerRight:()=>(
      <TouchableOpacity 
      style={{marginRight:15}}
      onPress={()=>{
        Alert.alert(
          'Clear All',
          'Do You want to Clear All Bookmarks',[
            {
              text:'Yes',onPress:()=>{
               const fun=navdata.navigation.getParam('clearAll');
               fun();
              }
            },
            {
              text:'No',onPress:()=>{},style:'cancel'
            }
          ]
        )
      }}>
         <Icon
          name='trash-o'
          color='white'
          size={30}/>
      </TouchableOpacity>
    )
  }
}

export default withNavigationFocus(Bookmarked);
