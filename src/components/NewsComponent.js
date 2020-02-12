import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import {Image,Button} from 'react-native-elements';
import { ActivityIndicator, Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
const NewsComponent=(props)=> {
    return (
        <View style={styles.container}>
            <Image 
            PlaceholderContent={
           <ActivityIndicator
           animating={true}
           size={35}
           color='red'/>
        }   
        resizeMode='stretch'
            style={styles.image} 
            source={{uri:props.url}}/>
            <Text style={styles.title}>{props.title}</Text>
            <Text>{props.description}</Text>
           <View style={{flex:1,flexDirection:'row',paddingTop:10}}>
            <View style={{flex:0.6,paddingLeft:10}}>
            <TouchableOpacity onPress={()=>props.onDetailedPress()}
            >
              <Icon
          name='newspaper-o'
          color='#FF6666'
          size={30}/>
          <Text style={{fontWeight:'bold',color:'blue'}}>Read More...</Text>
              </TouchableOpacity>

            </View>
            <View style={{flex:0.4,flexDirection:'row',justifyContent:'space-evenly'}}>
              <TouchableOpacity onPress={()=>props.onSharePress()}>
              <Icon
          name='share-alt'
          color='green'
          size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>props.onPressBookmark()}>
              <Icon
          name='bookmark-o'
          color='blue'
          size={30}/>
              </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        height:550,
        borderBottomWidth:1,
        marginBottom:6,
        borderBottomColor:'#FF66',
        width:Dimensions.get('window').width,
        backgroundColor:Colors.white,
        borderRadius:10,
        elevation:5,
        overflow:'hidden'
        
        
    },
    image:{
        height:300,
        width:'100%',
        resizeMode:'stretch',
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    icon:{
        flex:1,
        flexDirection:'row',
        alignContent:'flex-end',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginBottom:50,
        marginRight:10,
        padding:5,
        marginVertical:10
    }
})
export default NewsComponent
