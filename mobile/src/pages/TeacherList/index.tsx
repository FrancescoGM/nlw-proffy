import React, { useState, useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import Styles from './styles'
import api from '../../services/api'
export default function TeacherList() {

    const [isFilterVisible, setIsFilterVisible] = useState(false)
    const [favorites, setFavorites] = useState<number[]>([])

    const [teachers, setTeachers] = useState([])
    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response)
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {return teacher.id})
                setFavorites(favoritedTeachersIds)
            }
        })
    }
    useEffect(() => {
        loadFavorites()
    }, [])
    function handleFilterVisible() {
        setIsFilterVisible(!isFilterVisible)
    }
    async function handleFilterSubmit() {
        loadFavorites()
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })
        setIsFilterVisible(false)
        setTeachers(response.data)
    }

    return (
        <View style={Styles.container}>
            <PageHeader
                title='Proffys Disponíveis'
                headerRight={
                    <BorderlessButton onPress={handleFilterVisible}>
                        <Feather name='filter' size={20} color='#fff' />
                    </BorderlessButton>}>
                {isFilterVisible && (
                    <View style={Styles.searchForm}>
                        <Text style={Styles.label}>Matéria</Text>
                        <TextInput
                            style={Styles.input}
                            value={subject}
                            onChangeText={value => { setSubject(value) }}
                            placeholder='Qual a matéria?'
                            placeholderTextColor='#c1bccc'
                        />
                        <View style={Styles.inputGroup}>
                            <View style={Styles.inputField}>
                                <Text style={Styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={Styles.input}
                                    value={week_day}
                                    onChangeText={value => { setWeekDay(value) }}
                                    placeholder='Qual o dia?'
                                    placeholderTextColor='#c1bccc'
                                />
                            </View>
                            <View style={Styles.inputField}>
                                <Text style={Styles.label}>Horário</Text>
                                <TextInput
                                    style={Styles.input}
                                    value={time}
                                    onChangeText={value => { setTime(value) }}
                                    placeholder='Qual o horário?'
                                    placeholderTextColor='#c1bccc'
                                />
                            </View>
                        </View>
                        <RectButton
                            style={Styles.submitButton}
                            onPress={handleFilterSubmit}>
                            <Text style={Styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={Styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}>
                {teachers.map((teachers: Teacher) => {
                    return (
                        <TeacherItem
                            key={teachers.id}
                            teacher={teachers}
                            favorited={favorites.includes(teachers.id)}
                        />)
                })}
            </ScrollView>
        </View>
    )
}
