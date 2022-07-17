import { StatusBar } from 'expo-status-bar';
import { useColorScheme, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Start_Stack } from './navigation/Start_Stack';

export default function App() {
  const AppDarkTheme = {
    dark: true,
    colors: {
      primary: '#3b4252',
      background: '#3b4252',
      secondary: '#88c0d0',
      tertiary: '#eceff4',
      darkLight: '#4c566a',
      brand: '#88c0d0',
      green: '#A3BE8C',
      red: '#BF616A',
      darkest: '#2e3440',
      greyish: '#D8DEE9',
      bronzeRarity: '#b08d57',
      darkestBlue: '#5E81AC',
      StatusBarColor: 'light',
      navFocusedColor: '#88C0D0',
      navNonFocusedColor: '#ECEFF4',
      borderColor: '#2E3440',
      orange: '#D08770',
      yellow: '#EBCB8B',
      purple: '#B48EAD',
      slightlyLighterGrey: '#434C5E',
      midWhite: '#E5E9F0',
      slightlyLighterPrimary: '#424a5c',
      descTextColor: '#abafb8',
      errorColor: '#FF0000', //red,
      darkerPrimary: '#252f42'
    },
  };

  const AppLightTheme = {
    dark: false,
    colors: {
      primary: '#eceff4',
      background: '#eceff4',
      secondary: '#88c0d0',
      tertiary: '#3b4252',
      darkLight: '#4c566a',
      brand: '#81A1C1',
      green: '#A3BE8C',
      red: '#BF616A',
      darkest: '#2e3440',
      greyish: '#D8DEE9',
      bronzeRarity: '#b08d57',
      darkestBlue: '#5E81AC',
      StatusBarColor: 'dark',
      navFocusedColor: '#5E81AC',
      navNonFocusedColor: '#2E3440',
      borderColor: '#D8DEE9',
      orange: '#D08770',
      yellow: '#EBCB8B',
      purple: '#B48EAD',
      slightlyLighterGrey: '#434C5E',
      midWhite: '#E5E9F0',
      slightlyLighterPrimary: '#424a5c',
      descTextColor: '#abafb8',
      errorColor: '#FF0000', //red,
      darkerPrimary: '#DFE2E7'
    }
  };

  const scheme = useColorScheme() || 'light'; // Get user preffered color scheme and if it gets returned as null make it default to light mode
  const appTheme = scheme == 'dark' ? AppDarkTheme : AppLightTheme;

  return (
    <>
      <StatusBar style={appTheme.StatusBarColor} />
      <NavigationContainer theme={appTheme}>
        <Start_Stack/>
      </NavigationContainer>
    </>
  );
}
