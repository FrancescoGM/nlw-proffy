import React, { useState } from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import Styles from './styles'

export interface Teacher {
    id: number,
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher,
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {

    const [isFavorited, setIsFavorites] = useState(favorited)

    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites')
        let favoritesArray = []

        if (favorites) {
            favoritesArray = JSON.parse(favorites)
        }
        if (isFavorited) {
            const favoritedIndex = favoritesArray.findIndex((teacherItem: Teacher) => teacherItem.id === teacher.id)
            favoritesArray.splice(favoritedIndex, 1)
            setIsFavorites(false)
        } else {
            favoritesArray.push(teacher)
            setIsFavorites(true)
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.profile}>
                <Image
                    style={Styles.avatar}
                    source={{ uri: teacher.avatar }} />
                <View style={Styles.profileInfo}>
                    <Text style={Styles.name}>{teacher.name}</Text>
                    <Text style={Styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={Styles.bio}>{teacher.bio}</Text>
            <View style={Styles.footer}>
                <Text style={Styles.price}>
                    Preço/hora {'   '}
                    <Text style={Styles.priceValue}>{teacher.cost}</Text>
                </Text>
            </View>
            <View style={Styles.buttonContainer}>
                <RectButton style={[Styles.favoriteButton, isFavorited
                    ? Styles.favorited
                    : {}]} onPress={handleToggleFavorite}>
                    {isFavorited
                        ? <Image source={unfavoriteIcon} />
                        : <Image source={heartOutlineIcon} />}
                </RectButton>
                <RectButton style={Styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={Styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>
            </View>
        </View>
    )
}

export default TeacherItem