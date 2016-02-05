import React, {
  View,
  Text
} from 'react-native'

import BackButton from './BackButton'

class COC extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <BackButton navigator={ this.props.navigator }  />
        <Text>
          Hello from COC
        </Text>
      </View>
    )
  }
}

export default BackButton