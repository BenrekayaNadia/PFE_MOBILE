import PriceCard from '@/components/PriceCard';
import AuthService from '@/services/AuthService';
import { useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/slices/authSlice';
import { ApplicationScreenProps } from '@/types/navigation';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';



function ProfileScreen({ navigation}: ApplicationScreenProps) { 
    const goToPersonalInfo = () => {
        navigation.navigate('PersonalInfoScreen'); 
      };
      const goToSubscription = () => {
        navigation.navigate('PricingScreen'); 
      };
      const goToSecurity = () => {
        navigation.navigate('ChangePasswordScreen'); 
      }; 
      const dispatch  = useAppDispatch();
      const handleLogout = async (navigation: ApplicationScreenProps['navigation']) => {
        try{
          await AuthService.removeToken();
             dispatch(logout()); 
          navigation.navigate("LoginScreen");
        } catch (error) {
          console.log("error occured during logout:",error);
        }
     } 
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity style={styles.listItem} onPress={goToPersonalInfo}>
            <Text style={styles.listItemText}>Personal Info</Text>
            <View style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem} onPress={goToSecurity}>
            <Text style={styles.listItemText}>Security</Text>
            <View style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}  onPress={goToSubscription}>
            <Text style={styles.listItemText}>Subscriptions</Text>
            <View style={styles.arrowIcon} />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Informations de l'entreprise</Text>
            <View style={styles.arrowIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listItemText}>Expertise</Text>
            <View style={styles.arrowIcon} />
          </TouchableOpacity> */}
          <Text style={styles.disconnectText}  onPress={() => handleLogout(navigation)}>Logout</Text>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              ProxymFitHub
            </Text>
            <Text style={styles.footerText}>© 2024 Proxym</Text>
          </View>
       
        </View>
      );
      
    }
 /*    ProfileScreen.navigationOptions = ({ navigation }) => {
        return {
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 24, marginLeft: 10 }}>Back</Text>
                </TouchableOpacity>
            ),
            headerTitle: 'Profile',
        };
    }; */
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#F5ECF6",
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#000",
        textAlign: "center",
        padding: 15,
        
      },
      listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      listItemText: {
        fontSize: 16,
      },
      arrowIcon: {
        width: 10,
        height: 10,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderColor: '#000',
        transform: [{ rotate: '45deg' }],
      },
      disconnectText: {
        marginTop: 20,
        textAlign: 'center',
        color: '#CC8FED',
        fontSize: 16,
        fontWeight: 'bold',
      },
      footer: {
        alignItems: 'center',
        marginTop: 20,
      },
      footerText: {
        fontSize: 12,
        color: '#888',
      },
    });
    
export default ProfileScreen;


