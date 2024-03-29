import React, { useEffect, useState } from "react"
import { Alert, ScrollView } from 'react-native'
import { useDispatch, useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { Button, Input } from "react-native-elements"
import {
  getInputDataDispatchAction,
  setSubmissionsDataDispatchAction
} from '../../../store/app/dispatchers'
import { DefaultState } from "../../../store/index"
import { DataResponse } from "../../../api/types/app"
import { IFormData } from "./Interfaces"
import { INavigation } from './Interfaces/index'
import Loader from "../Loader/Loader"
import { styles } from "./styles"

const Form: React.FunctionComponent = () => {
  const [userData, setUserData] = useState<IFormData | undefined>(undefined)
  const inputData = useSelector<DefaultState, DataResponse.InputField[]>(state => state.app.inputData)

  const navigation: INavigation = useNavigation()
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInputDataDispatchAction())
  })

  const handleTextChange = (text: string | number, label: string) => {
    setUserData({
      ...userData,
      [label]: text,
    })
  }

  const getInputs = inputData.map((input) => {
    return (
      <Input
        key={input.id}
        label={input.label}
        autoCompleteType={null}
        maxLength={input.maxLength}
        inputStyle={styles.inputStyle}
        placeholder={input.placeholder}
        value={userData ? userData[input.label] : ""}
        onChangeText={(text) => handleTextChange(text, input.label)}
        keyboardType={input.type === "number" ? "numeric" : "default"}
      />
    )}
  )

  const handleSubmit = () => {
    if (userData) {
      Alert.alert("Submit", "Are you sure?", [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK", onPress: () => {
            dispatch(setSubmissionsDataDispatchAction(userData as DataResponse.Sumbmission))
            setUserData(undefined)
            navigation.navigate("Subs")
          }},
      ])
    } else Alert.alert("Please, fill at least one field")
  }

  return inputData.length ?
    <ScrollView contentContainerStyle={styles.container}>
      {getInputs}
      <Button
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTitleStyle}
        containerStyle={styles.buttonContainer}
        onPress={handleSubmit}
        title='Submit'
      />
    </ScrollView>
    : <Loader />
}

export default Form
