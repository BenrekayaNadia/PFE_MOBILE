import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';

import ApplicationNavigator from './navigators/Application';
import './translations';
import store from './store/store';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import { useEffect } from 'react';
import messaging from "@react-native-firebase/messaging";


const queryClient = new QueryClient();

export const storage = new MMKV();

function App() {
	useEffect(() => {
		//arrrow function
		const request = async ()=>{
			const result = await messaging().requestPermission();
			console.log("result notif",result);
		}
		request();
	  }, []);
	return (
		<>
		
		<QueryClientProvider client={queryClient}>
			 <Provider store={store}>
			<ThemeProvider storage={storage}>
				<ApplicationNavigator />
				<Toast/>
			</ThemeProvider>
			</Provider>
		</QueryClientProvider>
		</>
	);
	
}

export default App;
