import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LandingPage from '../pages/LandingPage'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from './StudyTabs.routes'

const { Navigator, Screen } = createStackNavigator()

const AppStack: React.FC = () => {
  return (
      <NavigationContainer>
          <Navigator screenOptions={{ headerShown: false}}>
              <Screen name="landing" component={LandingPage}/>
              <Screen name="give-classes" component={GiveClasses}/>
              <Screen name="study" component={StudyTabs}/>
          </Navigator>
      </NavigationContainer>
  )
}

export default AppStack