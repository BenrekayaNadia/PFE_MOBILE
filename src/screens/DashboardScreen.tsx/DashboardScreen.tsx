import React, { useEffect } from 'react';
    import { ApplicationScreenProps } from '@/types/navigation';
    import { StyleSheet, Text, View } from 'react-native';
    import { BarChart, LineChart, PieChart, PopulationPyramid } from "react-native-gifted-charts";
import { ImageVariant } from '@/components/atoms';
import Workoutschedule from '@/components/Workoutschedule';

    interface IncomeDataItem {
        value: number;
        label: string;
    }
    
    interface GenderDataItem {
        value: number;
        label: string;
    }
    
    const DashboardScreen: React.FC<ApplicationScreenProps> = ({ navigation, route}: ApplicationScreenProps) => {
        const dataR = route.params?.data;
    
        useEffect(() => {
            if(dataR){
        console.log('Email:', dataR?.email);
        console.log('Password:', dataR?.password);
        }
    }, [dataR]);

    const incomeData = [
        { value: 2400, label: 'Page A' },
        { value: 1398, label: 'Page B' },
        { value: 9800, label: 'Page C' },
        { value: 3908, label: 'Page D' },
        { value: 4800, label: 'Page E' },
    /*  { value: 3800, label: 'Page F' }, */
    ];

    const genderData = [
        { value: 1, label: 'Male' },
        { value: 2, label: 'Female' },
    ];

    const incomeDataItems = {
        data: incomeData,
    };

    const genderDataItems = {
        data: genderData,
    };
    


    //const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]


    return (
        <View style={styles.container}>
            <ImageVariant  source ={{uri:'C:/Users/benre/Documents/pfe/front_mobile/coach-privee-pfe-2024-front/src/theme/assets/images/logo.png'}}  />
            <Text style={styles.title}>Workout Tracker</Text>
        <View style={styles.chartContainer}>
        <View style={styles.card}>
            <LineChart
            data={incomeDataItems.data}
            spacing={70}
            thickness={2}
            color="#fff"
            />
        </View>
        <View style={styles.separator} />
        <View style={styles.card}>
            <BarChart
            data={genderDataItems.data}
            />
        </View>
        
        </View>
      {/*   <Workoutschedule title={'Fullbody Workout'} subtitle={'Today,03:00'}  />
        <Workoutschedule title={'Upperbody Workout'} subtitle={'June 05,02:00pm'}  /> */}
        <Text style={styles.title}>What do you want to Train</Text>
    </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
    },
    chartContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 16,
    },
    card: {
    flex: 1,
    backgroundColor: '#F5ECF6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    },
    separator: {
    height: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign:'center',
    },
    });

    export default DashboardScreen;
