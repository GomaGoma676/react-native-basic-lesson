import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { RootNavigator } from './navigations/RootNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
