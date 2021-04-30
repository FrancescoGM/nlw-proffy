import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import classesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import Styles from './styles';
import api from '../../services/api';

const LandingPage: React.FC = () => {

    const { navigate } = useNavigation()
    const [totalConnections, setTotalConnection] = useState(0)

    useEffect(() => {
        api.get('connections').then(response => {
            const { connections } = response.data
            setTotalConnection(connections)
        })
    }, [])
    function handleNavigateToGiveClasses() {
        navigate('give-classes')
    }
    function handleNavigateToStudy() {
        navigate('study')
    }
    return (
        <View style={Styles.container}>
            <Image source={landingImage} style={Styles.banner} />
            <Text style={Styles.title}>
                Seja bem vindo {'\n'}
                <Text style={Styles.titleBold}>O que deseja fazer?</Text>
            </Text>
            <View style={Styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToStudy} style={[Styles.button, Styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={Styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton onPress={handleNavigateToGiveClasses} style={[Styles.button, Styles.buttonSecondary]}>
                    <Image source={classesIcon} />
                    <Text style={Styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>
            <Text style={Styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default LandingPage;
