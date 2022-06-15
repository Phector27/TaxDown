import React, { useEffect, useState } from "react"
import { View, Image, TouchableWithoutFeedback, Keyboard } from "react-native"
import { styles } from "./styles"
import Form from "../../common/Form/Form"

const HomeScreen: React.FunctionComponent = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true))
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false))
    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  })

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles(isKeyboardVisible).container}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles().logo}
          resizeMode="contain"
        />
        <Form />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen
