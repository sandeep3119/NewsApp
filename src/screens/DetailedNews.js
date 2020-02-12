import React from 'react'
import { View, Text, ActivityIndicator,StyleSheet, ScrollView,Linking } from 'react-native'
import { Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native-paper';
const DetailedNews=(props)=> {
  const newsItem=props.navigation.getParam('newsItem');
    return (
        <View>
          <ScrollView>
      <Text style={styles.title}>{newsItem.title}</Text>
      <Image 
            PlaceholderContent={
           <ActivityIndicator
           animating={true}
           size={35}
           color='red'/>
        }   
        resizeMode='stretch'
            style={styles.image} 
            source={{uri:newsItem.urlToImage}}/>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{fontSize:15,fontWeight:'bold'}}>Source: {newsItem.source.name}</Text>
<Text style={{fontSize:15,fontWeight:'bold'}}>{newsItem.publishedAt}</Text>
            </View>
      <Text>{newsItem.description}</Text>
      <Text>{newsItem.content}</Text>
      <TouchableOpacity 
      onPress={()=>Linking.openURL(newsItem.url)}
      style={{flexDirection:'row',marginTop:5,marginLeft:5,padding:5,}}>
        <Text style={{color:'blue',fontWeight:'bold'}}>Visit Source</Text>
        <Icon
          name='internet-explorer'
          color={Colors.blue800}
          size={20}/>
      </TouchableOpacity>
      </ScrollView>
        </View>
    )
}
DetailedNews.navigationOptions={
  title:'Detailed News',
    headerStyle:{
        backgroundColor:'#ff1744'
    },
    headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
}
const styles=StyleSheet.create({
  image:{
    height:300,
    width:'100%',
    overflow:'hidden',
    resizeMode:'stretch',
    overflow:'hidden'
    
},
title:{
    fontSize:18,
    fontWeight:'bold'
},
})
export default DetailedNews;
