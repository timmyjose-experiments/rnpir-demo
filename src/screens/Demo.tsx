import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "../styles"
import { Pressable, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../App"
import useReferralCode from "../features/useReferralCode"

const Demo = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const { referrerInfo, referrerError } = useReferralCode()

  return (
    <SafeAreaView style={styles.container}>
      { referrerError && (<Text> Error: {referrerError} </Text>)}
      { referrerInfo && (<Text>{JSON.stringify(referrerInfo, null, 2)}</Text>)}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Demo
