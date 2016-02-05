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

import BackButton from './app/BackButton'
import About from './app/About'
import COC from './app/CodeOfConduct'

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
      <View style={ styles.container }>
        <MainImage />
        <Intro />
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

let MainImage = () => (
  <Image style={ styles.image } source={{ uri: 'http://developers.ms/images/bg1.jpg' }}>
    <Text style={[ styles.imageText, styles.imageTextMargin ]}>JACKSON AREA</Text>
    <Text style={ styles.imageText }>WEB AND APP DEVELOPERS</Text>
  </Image>
)

let Intro = () => (
  <View style={ styles.intro }>
    <Text style={ styles.introText }>{ introtext }</Text>
  </View>
)

let Link = ({ title, onPress }) => (
  <View>
    <TouchableHighlight onPress={ onPress } underlayColor="193161" style={ styles.link }>
      <Text style={ styles.linkText }>{ title.toUpperCase() }</Text>
    </TouchableHighlight>
  </View>
)

let Links = ({ onPress }) => (
  <View style={ styles.links }>
    {
      links.map((l, i) => {
        return <Link onPress={ () => onPress(l.nav) } key={ i } href={ l.href } title={ l.title } />
      })
    }
  </View>
)

let links = [ {title: 'About', nav: About }, { title: 'Code of Conduct', nav: COC }, { title: 'Useful Links' }, { title: 'Join the Meetup', href: 'http://www.meetup.com/Jackson-Area-Web-And-App-Developers/' }, { title: 'Give a Talk' }, { title: 'Useful Links' } ]
let introtext = "Meet other local Developers to network, share knowledge, to review the state of the art, or to dream up new applications. Meetups are free (as speech and beer)."

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '22396a',
  },
  link: {
    paddingTop:25,
    paddingBottom:25,
    borderBottomColor: 'rgba(255,255,255,.05)',
    borderBottomWidth:1,
    justifyContent: 'center'
  },
  linkText: {
    fontSize:16,
    fontWeight: '100',
    color: 'ffffff',
    paddingLeft:20,
    letterSpacing: 1
  },
  links: {
    marginTop: -20,
    backgroundColor: '1a3161'
  },
  intro: {
    padding:30,
    backgroundColor: 'DBDEDD'
  },
  introText: {
    color: '132752',
    textAlign: 'center'
  },
  image: {
    height:150,
    backgroundColor: 'transparent'
  },
  imageText: {
    color: 'ffffff',
    fontWeight: '200',
    fontSize:22,
    textAlign: 'center',
    paddingLeft:10,
    paddingRight:10,
  },
  imageTextMargin: {
    marginTop: 50
  }
});

AppRegistry.registerComponent('main', () => App);
