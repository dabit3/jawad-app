/**
 * This is the entry point for your experience that you will run on Exponent.
 *
 * Start by looking at the render() method of the component called
 * FirstExperience. This is where the text and example components are.
 */
'use strict';

let React = require('react-native');
let {
  Animated,
  AppRegistry,
  Easing,
  Image,
  ScrollView,
  StatusBarIOS,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS
} = React;

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

class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
      style={{ flex:1 }}
      navigationBarHidden={true}
      initialRoute={{
        component: FirstExperience,
        title: 'JAWAD',
      }} />
    )
  }
}

class FirstExperience extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      
    };
  }

  onPress(nav, title) {
    this.props.navigator.push({
      component: nav,
      title: 'heloo'
    })
  }

  render() {

    return (
      <View style={{ flex:1 }}>
        <Header />
        <MainImage />
        <ScrollView>
          <Links onPress={ (nav) => this.onPress(nav) } />
        </ScrollView>  
      </View>      
    );
  }

  componentDidMount() {
    if (StatusBarIOS) {
      StatusBarIOS.setStyle('light-content', true);
      StatusBarIOS.setHidden(false, 'fade');
    }
  }

  _handleColorSelected(color) {
    this.setState({ headerColor: color });
  }
}

let BackButton = ({ navigator }) => (
  <View style={{ marginTop:30 }}>
    <TouchableHighlight onPress={ () => navigator.pop() }><Text>Back</Text></TouchableHighlight>
  </View>
)

let MainImage = () => (
  <Image style={ styles.image } source={{ uri: 'http://developers.ms/images/bg1.jpg' }}>
    <Text style={ styles.imageText }>JACKSON AREA WEB AND APP DEVELOPERS</Text>
  </Image>
)

let Header = () => (
  <View style={ styles.header }>
    <Text style={ styles.headerText }>JAWAD</Text>
  </View>
)

let Link = ({ title, onPress }) => (
  <View>
    <TouchableHighlight onPress={ onPress } underlayColor="f8f8f8" style={ styles.link }>
      <Text style={ styles.linkText }>{ title }</Text>
    </TouchableHighlight>
  </View>
)

let Links = ({ onPress }) => (
  <View>
    {
      links.map((l, i) => {
        return <Link onPress={ () => onPress(l.nav) } key={ i } href={ l.href } title={ l.title } />
      })
    }
  </View>
)

let links = [ { title: 'About', nav: About }, { title: 'Code of Conduct', nav: COC }, { title: 'Useful Links' }, { title: 'Join the Meetup', href: 'http://www.meetup.com/Jackson-Area-Web-And-App-Developers/' } ]

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'ededed',
    borderBottomWidth:1
  },
  headerText: {
    fontSize: 32,
    paddingTop:20,
    paddingBottom:20,
    fontWeight: '100'
  },
  link: {
    paddingTop:25,
    paddingBottom:25,
    borderBottomColor: 'f8f8f8',
    borderBottomWidth:1,
    justifyContent: 'center'
  },
  linkText: {
    fontSize:18,
    color: '666666',
    paddingLeft:20,
    fontWeight:'100'
  },
  image: {
    height:150,
    backgroundColor: 'transparent'
  },
  imageText: {
    color: 'ffffff',
    fontWeight: '300',
    fontSize:24,
    textAlign: 'center',
    paddingLeft:40,
    paddingRight:40,
    marginTop:45
  }
});

AppRegistry.registerComponent('main', () => App);
