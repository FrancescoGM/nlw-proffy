import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },
    profileInfo: {
        marginLeft: 16,
    },
    name: {
        fontFamily: 'Roboto_700Bold',
        color: '#32264d',
        fontSize: 20,
    },
    subject: {
        fontFamily: 'Roboto_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4
    },
    bio: {
        marginHorizontal: 24,
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        lineHeight: 24,
        color: '#6a6180'
    },
    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        marginTop: 24,
        alignItems: 'center',
    },
    price: {
        fontFamily: 'Roboto_400Regular',
        color: '#6a6180',
        fontSize: 16,
    },
    priceValue: {
        fontFamily: 'Roboto_700Bold',
        color: '#8257e5',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 16,
    },
    favoriteButton: {
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8257e5',
        marginRight: 8,
    },
    favorited: {
        backgroundColor: '#e33d3d'
    },
    contactButton: {
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04d361',
        marginRight: 8,
    },
    contactButtonText: {
        color: '#fff',
        fontFamily: 'Roboto_700Bold',
        fontSize: 16,
        marginLeft: 16
    }
})

export default Styles