import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" translucent backgroundColor="black" />
      
      <Tabs screenOptions={{ 
        tabBarActiveTintColor: '#035e32',
        headerStyle: { backgroundColor: '#035e32' },
        headerTintColor: "white",
        tabBarStyle: styles.tabBarStyle,
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerTitle: 'Welcome user',
            headerTitleStyle: {
              textAlign: 'left'
            },
            headerRight: () => (
              <Link href="../user_profile/main" style={styles.profileContainer}>
                <Image
                  source={{ uri: 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D' }}
                  style={styles.profileImage}
                />
              </Link>
            ),
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="scan"
          options={{
            title: 'Scan',
            headerTitle: 'Scan the QR Code',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="qrcode" color={color} />,
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: 'Calendar',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
          }}
        />
        <Tabs.Screen
          name="rewards"
          options={{
            title: 'Rewards',
            headerTitle: 'Offers and Rewards',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="star" color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: '2%',
    width: '92%',
    left: '5%',
    right: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    paddingVertical: 5,
  },
  profileContainer: {
    marginRight: 10, // Adjusts distance from the edge of the screen
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Circular image
  },
});
