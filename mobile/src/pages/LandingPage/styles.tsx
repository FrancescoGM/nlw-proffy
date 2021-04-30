import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },
    banner: {
        width: '100%',
        resizeMode: 'contain',
    },
    title: {
        fontFamily: 'Roboto_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },
    titleBold: {
        fontFamily: 'Roboto_700Bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },
    button: {
        width: '48%',
        height: 150,
        borderRadius: 8,
        backgroundColor: '#333',
        padding: 24,
        justifyContent: 'space-between',
    },
    buttonText: {
        fontFamily: 'Roboto_400Regular',
        color: '#fff',
        fontSize: 20
    },
    buttonPrimary: {
        backgroundColor: '#9871f5'
    },
    buttonSecondary: {
        backgroundColor: '#04d361'
    },
    totalConnections: {
        fontFamily: 'Roboto_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40
    }
})
export default Styles