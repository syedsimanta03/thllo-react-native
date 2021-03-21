import { NativeModules } from "react-native";
//import AsyncStorage from "@react-native-async-storage/async-storage";

const deviceLanguage =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

var lang = deviceLanguage === "el_GR" ? "gr" : "en";
global.lang = lang;
global.imgpart = "camel.gif";
global.imgpart2 = "cyrano.png";
