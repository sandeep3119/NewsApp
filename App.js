import React from 'react';
import News from './src/screens/News';
import DetailedNews from './src/screens/DetailedNews'
import Bookmarked from './src/screens/Bookmarked';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Provider as NewsProvider} from './src/context/NewsContext'
import {Provider as BookmarkProvider} from './src/context/BookmarkedContext'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from '@expo/vector-icons/FontAwesome'
const newsStack=createStackNavigator({
  NewsScreen:News,
  DetailedScreen:{screen:DetailedNews}

},{
  initialRouteName:'NewsScreen'
})
const bookmarkedStack=createStackNavigator({
  BookmarkedScreen:Bookmarked,
  DetailedScreen:{screen:DetailedNews}

})
const bottomNavigator=createMaterialTopTabNavigator({
  News:{
    screen:newsStack,
    navigationOptions:{
      tabBarLabel:'News',
      tabBarIcon:({tintColor})=>(
        <Icon
          name='newspaper-o'
          color={tintColor}
          size={20}/>
        
      )
    }
  },
  Bookmarked:{
    screen:bookmarkedStack,
    navigationOptions:{
      tabBarLabel:'Bookmarked',
      tabBarIcon:({tintColor})=>(
        <Icon
          name='bookmark'
          color={tintColor}
          size={20}/>
        
      )
    }

}},{
  tabBarPosition:'bottom',
  
  tabBarOptions:{
    showIcon:true,
    labelStyle:{
      fontWeight:'bold'
    },
    activeTintColor:'white',
    style:{
      backgroundColor:'#ff1744'
    },
    indicatorStyle:{
      backgroundColor:'white'
    }
  }
      
})

const App=createAppContainer(bottomNavigator);

export default()=>{
  return(
    <BookmarkProvider>
    <NewsProvider>
    <App/>
    </NewsProvider>
    </BookmarkProvider>
  )
}