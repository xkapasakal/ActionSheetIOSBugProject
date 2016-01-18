/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  ActionSheetIOS,
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class ActionSheetIOSBugProject extends Component {
  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Option 0', 'Option 1', 'Cancel'],
      cancelButtonIndex: 2,
      anchor: React.findNodeHandle(this._actionSheet),
    },
    (buttonIndex) => {
      console.log(buttonIndex);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} 
          ref={(c) => this._actionSheet = c} 
          onPress={() => this.showActionSheet()}>
          <Text>Show ActionSheet</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    top: 50,
  },
});

AppRegistry.registerComponent('ActionSheetIOSBugProject', () => ActionSheetIOSBugProject);
