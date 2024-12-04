import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title: string,
    handlePress: () => void,
    containerStyles: string,
    textStyles?: string,
    isLoading?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = (
    { title, handlePress, containerStyles, textStyles, isLoading = false }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary-200 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`} disabled={isLoading}>
            <Text className={`text-primary font-psemibold px-4 text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton
