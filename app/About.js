import React, {
  View,
  Text
} from 'react-native'

import BackButton from './BackButton'

class About extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <BackButton navigator={ this.props.navigator } />
        <Text>Hello from About view</Text>
      </View>
    )
  }
}

export default About