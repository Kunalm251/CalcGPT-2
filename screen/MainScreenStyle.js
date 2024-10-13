module.exports = {
    main_screen: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#eeeeee',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    main_screen__header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        width: '100%',
    },

    main_screen__display: {
        width: '100%',
        backgroundColor: '#eeeeee',
        borderRadius: 10,
        display: 'flex',
        marginTop: 110,
        padding: 20,
    },
    main_screen__display_text: {
        fontSize: 30,
        textAlign: 'right',
        color: 'black',
        
    },
    main_screen__keypad: {
        width: '97%',
        height: '77%',
        display: 'flex',
        justifyContent: 'center',
    },
    main_screen__keypad_row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 7,
    },
    btn_outer: {
        width: 65,
        height: 65,
        backgroundColor: 'white',
        borderRadius: 100,
        elevation: 8,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg_button: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 25,
    },


    btn1_outer: {
        width: 65,
        height: 65,
        backgroundColor: '#FF5757',
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg1_button: {
        backgroundColor: '#FF5757',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },


    btn2_outer: {
        width: 65,
        height: 65,

        backgroundColor: 'grey',
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg2_button: {
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    btn3_outer: {
        width: 65,
        height: 65,

        backgroundColor: 'orange',
        borderRadius: 100,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg3_button: {
        backgroundColor: 'orange',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },

    // menu btn style 

    dropdownButton: {
        padding: 60,
        left: 240,
    
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    dropdownMenu: {
        backgroundColor: 'white',
        width: 130,
        borderRadius: 10,
        elevation: 15,
        bottom: 250,
        left: 80,
    },
    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    dropdownText: {
        fontSize: 16,
        color: '#000',
    },
   
}