import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import AppStack from './src/routes/AppStack.routes'



export default function App() {

    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })
    if (!fontsLoaded) {
        return <AppLoading />
    }
    return (
        <>
            <StatusBar style="light" />
            <AppStack />
        </>
    )
}