import React, {
	View,
	Text,
	TouchableHighlight
} from 'react-native'

let BackButton = ({ navigator }) => (
  <View style={{ marginTop:30 }}>
    <TouchableHighlight onPress={ () => navigator.pop() }><Text>Back</Text></TouchableHighlight>
  </View>
)

export default BackButton