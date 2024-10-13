import React, { useState } from 'react'
import { View, Button, Text, Pressable, ScrollView, Modal,FlatList } from 'react-native'
import styles from './MainScreenStyle'
import Icon from 'react-native-vector-icons/Ionicons';


const MainScreen = () => {
    const [value, setValue] = useState('0')
    const [bracketopen, setBracketOpen] = useState(false)
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const handlePress = (val) => {
        if (val == 'AC') {
            setValue('0')
        }
        else if (val == '=') {
            try {
                if ((value.match(/\(/g) || []).length == (value.match(/\)/g) || []).length) {

                    if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/') {
                        setValue(`${eval(value.replace('()', '(0)').slice(0, -1))}`)
                    }
                    else {
                        setValue(`${eval(value.replace('()', '(0)') + '*1')}`)
                    }
                }
            }
            catch (e) {
                setValue('Error')
            }
        }
        else if (val == 'back') {
            setValue(value.slice(0, -1))
        }
        else if (val == '()') {
            if (value == '0') {
                setValue('(')
                setBracketOpen(true)

            }
            else if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/') {
                setValue(value + '(')
                setBracketOpen(true)
            }
            else {
                if (bracketopen == true) {
                    setValue(value + ')')
                    setBracketOpen(false)
                }
                else {
                    setValue(value + '(')
                    setBracketOpen(true)
                }
            }
        }
        else {
            if (value == '0') {
                if (val == '+' || val == '-' || val == '*' || val == '/' || val == '00' || val == '%') {
                    setValue(value + val)
                }
                else {
                    setValue(val)
                }
            }
       
            else if (isNaN(val)) {
                console.log(value.slice(-1))
                if (value.slice(-1) == '+' || value.slice(-1) == '-' || value.slice(-1) == '*' || value.slice(-1) == '/' || value.slice(-1) == '00' || value.slice(-1) == '.' || value.slice(-1) == '%') {
                    setValue(value.slice(0, -1) + val)
                }
                else {
                    setValue(value + val)
                }
            }
            else if (!isNaN(val)) {
                setValue(value + val)
            }
        }


    };
    const dropdownItems = ['Scientific', 'HandWritten'];

    const handleDropdownSelect = (item) => {
        setSelectedOption(item);
        setDropdownVisible(false); 
    };

    
    return (
        <View style={styles.main_screen}>
              {/* GPT */}

            

            {/* Menu btn  */}
             <View style={styles.main_screen__header}>
                <Pressable style={styles.dropdownButton} onPress={() => setDropdownVisible(!dropdownVisible)}>
                    <Icon name="menu-outline" size={37} color="#000" />
                </Pressable>
                {dropdownVisible && (
                    <Modal
                        transparent={true}
                        animationType="fade"
                        visible={dropdownVisible}
                        onRequestClose={() => setDropdownVisible(false)}
                    >
                        <View style={styles.modalOverlay}>
                            <View style={styles.dropdownMenu}>
                                <FlatList
                                    data={dropdownItems}
                                    keyExtractor={(item) => item}
                                    renderItem={({ item }) => (
                                        <Pressable style={styles.dropdownItem} onPress={() => handleDropdownSelect(item)}>
                                            <Text style={styles.dropdownText}>{item}</Text>
                                        </Pressable>
                                    )}
                                />
                            </View>
                        </View>
                    </Modal>
                )}
            </View>

            {/* Calculator code */}

            <View style={styles.main_screen__keypad}>
            <ScrollView style={styles.main_screen__display} ref={ref => { this.scrollView = ref }}
                onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}>
                <Text style={styles.main_screen__display_text}>
                    {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
            </ScrollView>
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={() => handlePress('AC')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_button} >AC</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('back')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_button} >&lt;&lt;</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('%')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_button} >%</Text>
                        </View>
                    </Pressable>


                    <Pressable onPress={() => handlePress('/')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_button} >/</Text>
                        </View>
                    </Pressable>

                </View>
        
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={() => handlePress('7')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >7</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => handlePress('8')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >8</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('9')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >9</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('*')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_button} >*</Text>
                        </View>
                    </Pressable>
                </View>
        
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={() => handlePress('4')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >4</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('5')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >5</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('6')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >6</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('-')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_button} >-</Text>
                        </View>
                    </Pressable>
                </View>
       
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={() => handlePress('1')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >1</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('2')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >2</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('3')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >3</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('+')}>
                        <View style={styles.btn2_outer}>
                            <Text style={styles.bg2_button} >+</Text>
                        </View>
                    </Pressable>
                </View>
           
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={() => handlePress('0')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >0</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('00')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >00</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('.')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button} >.</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={() => handlePress('=')}>
                        <View style={styles.btn3_outer}>
                            <Text style={styles.bg3_button} >=</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default MainScreen