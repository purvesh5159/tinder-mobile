import React from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import MainScreen from './src/screens/MainScreen';

const queryClient = new QueryClient();

export default function App() {
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex:1}}>
          {showSplash ? <SplashScreen /> : <MainScreen />}
        </SafeAreaView>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
