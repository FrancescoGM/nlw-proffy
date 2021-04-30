import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png'
import logoIcon from '../../assets/images/logo.png'

import Styles from './styles'

interface PageHeaderProps {
    title: string,
    headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {

    const { navigate } = useNavigation()

    function handleGoBack() {
        navigate('landing')
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode='contain' />
                </BorderlessButton>
                <Image source={logoIcon} resizeMode='contain' />
            </View>
            <View style={Styles.header}>
                <Text style={Styles.title}>{title}</Text>
                {headerRight}
            </View>
            {children}
        </View>
    )
}
export default PageHeader
