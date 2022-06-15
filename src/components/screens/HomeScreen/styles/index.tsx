import { StyleSheet, Platform } from "react-native"

export const styles = (isKeyboardVisible?: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignContent: 'center',
    backgroundColor: '#111121',
    paddingBottom: isKeyboardVisible ? Platform.OS === 'ios' ? 200 : 100 : 0
  },
  logo: {
    width: '100%',
    backgroundColor: '#111121',
  }
})