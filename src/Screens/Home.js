import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import News from './HomeBottomTabs/News'
import Chat from './HomeBottomTabs/Chat'
import Settings from './HomeBottomTabs/Settings'

export default createBottomTabNavigator({
    News: {
        screen: News,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='md-home' color={tintColor} size={24} />
            )
        }
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            tabBarLabel: 'Chat',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='md-people' color={tintColor} size={24} />
            )
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Tarefas',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='md-settings' color={tintColor} size={24} />
            )
        }
    }
},
    {
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: '#696969',
            labelStyle: {
                fontSize: 13
            },
            style: {
                backgroundColor: 'rgba(247, 199, 68, 0.85)'
            }
        }
    }
)