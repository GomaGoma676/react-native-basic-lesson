## Project setup : 
### 1-1. yarn + expo-cli install *インストールしていない場合
    sudo npm i -g yarn
    sudo npm i -g expo-cli
### 1-2.  expo init
    expo init basics
### 1-3.  Redux Toolkit
    yarn add @reduxjs/toolkit
    yarn add react-redux
### 1-4.  prettierの設定 : settingsでRequire Config + Format On Saveにチェック
    touch .prettierrc
~~~
{
    "singleQuote": true,
    "trailingComma": "all"
}
~~~  
### 1-5.  Tailwind CSS
~~~  
yarn add tailwind-rn
~~~  
    ↓settings.json
    "tailwindCSS.experimental.classRegex": ["tw\\('([^')]*)"],

### 1-6.  React native navigation
    yarn add @react-navigation/native
    yarn add @react-navigation/native-stack
    expo install react-native-screens react-native-safe-area-context
    yarn add react-native-gesture-handler
    yarn add react-native-elements

