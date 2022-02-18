import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {Artist} from "./model/Artist";
import {Label} from "./model/OrgProject";
import {ProductionProject} from "./model/ProductionProject";
import {Track} from "./model/Track";
import React from "react";
import { NativeBaseProvider } from 'native-base';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {

    return (
        <NativeBaseProvider>
              <Navigation colorScheme={colorScheme}/>
              <StatusBar/>
        </NativeBaseProvider>
    );
  }
}
