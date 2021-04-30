import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },
    teacherList: {
        marginTop: -40,
    },
    searchForm: {
        marginBottom: 24,
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputField: {
        width: '48%'
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Roboto_400Regular'
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },
    submitButton: {
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04d361',
    },
    submitButtonText: {
        color: '#fff',
        fontFamily: 'Roboto_700Bold',
        fontSize: 16,
    }

})

export default Styles