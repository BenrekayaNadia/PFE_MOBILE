import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchNotifications } from '@/store/slices/notificationSlice';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const NotificationScreen = () => {
  const dispatch = useAppDispatch();
  const { notifications, loading } = useAppSelector((state) => state.notifications);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const getIcon = (title: string) => {
    if (title.includes('Congratulations')) {
      return require('../../theme/assets/images/icon2.png');
    } else if (title.includes('Ups')) {
      return require('../../theme/assets/images/icon1.png');
    }
    return require('../../theme/assets/images/icon2.png');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      {loading && <Text>Loading...</Text>}
      {!loading && notifications.map((notification) => (
        <TouchableOpacity key={notification.id} style={styles.notificationItem}>
          <View style={styles.iconContainer}>
            <Image source={getIcon(notification.message)} style={styles.icon} />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{notification.message}</Text>
            <Text style={styles.subtitle}>{notification.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5ECF6',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  icon: {
    width: 30,
    height: 30,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  moreIcon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreIconText: {
    fontSize: 18,
    color: '#888',
  },
});

export default NotificationScreen;
