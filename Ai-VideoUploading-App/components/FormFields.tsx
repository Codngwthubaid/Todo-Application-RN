import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from "@/constants/icons"

interface FormTypes {
    title: string,
    value: string,
    handleChangeText: () => void,
    otherStyles: string,
    keyboardType: string,
    placeholder: string
}


const FormFields: React.FC<FormTypes> = ({ title, value, handleChangeText, otherStyles, keyboardType, placeholder }) => {

    const [showpassword, setShowpassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base font-pmedium text-white'>{title}</Text>

            <View className='w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary-100 mt-3 flex-row'>
                <TextInput
                    className='flex-1 text-white font-pmedium text-base'
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !setShowpassword}
                />

                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowpassword(!showpassword)}>
                        <Image
                            source={!showpassword ? icons.eye : icons.eyeHide}
                            className='w-5 h-5'
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormFields
