import React from 'react'

import Input from '../../components/input'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

export default function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Input name="subject" label="Matéria"/>
                    <Input name="weak-day" label="Dia da semana"/>
                    <Input name="time" label="Hora"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}
