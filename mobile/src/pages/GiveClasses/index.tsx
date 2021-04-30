import React from 'react'
import { View, ImageBackground, Text } from 'react-native'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import Styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function GiveClasses() {

    const { goBack } = useNavigation()

    function handleNavigateToBack() {
        goBack()
    }
    return (
        <View style={Styles.container}>
            <ImageBackground
                source={giveClassesBgImage}
                resizeMode="contain"
                style={Styles.content}>
                <Text style={Styles.title}>Quer ser um Proffy?</Text>
                <Text style={Styles.description}>
                    Para começar, você precisa
                    se cadastrar como professor
                    na nossa plataforma web.
                </Text>
            </ImageBackground>
            <RectButton onPress={handleNavigateToBack} style={Styles.okButton}>
                <Text style={Styles.okButtonText}>Tudo Bem</Text>
            </RectButton>
        </View>
    )
}

