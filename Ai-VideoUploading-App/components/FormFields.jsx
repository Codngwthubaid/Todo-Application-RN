import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import icons from '../constants/icons'

const FormFields= ({ title, value, handleChangeText, otherStyles, keyboardType , }) => {

    const [showpassword, setShowpassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base font-pmedium text-white'>{title}</Text>

            <View className='w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary-100 mt-3 flex-row items-center'>
                <TextInput
                    className='flex-1 text-white font-pmedium text-base'
                    value={value}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    autoCapitalize='none'
                    secureTextEntry={title === "Password" && !showpassword}
                />

                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowpassword(!showpassword)}>
                        <Image
                            source={!showpassword ? icons.eyeHide : icons.eye}
                            className='w-6 h-6'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormFields
