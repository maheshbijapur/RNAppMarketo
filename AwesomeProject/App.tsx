/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { NativeModules } from 'react-native';

const { RNMarketoModule } = NativeModules;

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>

        <Button
          title="Initialize Marketo"
          // onPress={() => RNMarketoModule.initializeWithMunchkin("849-BHY-433","ZjRWbG03UTV2alVBU0x0V01CaDFyR3lk")
          onPress={() => RNMarketoModule.initializeWithMunchkin("849-BHY-433","ZjRWbG03UTV2alVBU0x0V01CaDFyR3lk","React-Native")

          }
        />

      {/* <Separator /> */}
      </View>

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Button
          title="Custom Actions"
          color="#f194ff"
          onPress={() => RNMarketoModule.reportAction("Bought Shirt", {actionType:"Shopping", actionDetails: "Red Shirt", setLength : 20, setMetric : 30 })
          }
        />

      {/* <Separator /> */}
      </View>

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>

        <Button
          title="Associate Lead "
          onPress={() => RNMarketoModule.associateLead({ email: "mktoTestlead@adobe.com", firstName: "Marketo", lastName:"Testlead", city:"India"})
          }
        />

      {/* <Separator /> */}
      </View>

      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>

        <Button
          title="Logout"
          onPress={() => RNMarketoModule.uninitializeMarketoPush()
          }
        />

      {/* <Separator /> */}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
