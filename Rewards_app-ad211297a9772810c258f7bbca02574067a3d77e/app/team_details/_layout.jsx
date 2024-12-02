import { View, StyleSheet, Pressable, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

export default function _layout() {
    const navigation = useNavigation(); // Hook to access the navigation object

    const handleBackPress = () => {
        navigation.goBack(); // Navigate to the previous screen
    };

    return (
        <>
            <StatusBar style="light" translucent backgroundColor="black" />
            <Tabs
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#035e32',
                    tabBarInactiveTintColor: '#035e32',
                    tabBarActiveBackgroundColor: '#cdf2ce',
                    tabBarInactiveBackgroundColor: 'white',
                    tabBarStyle: styles.tabBarStyle,
                    tabBarItemStyle: styles.tabBarItemStyle,
                    headerStyle: { backgroundColor: '#035e32' },
                    headerTintColor: "white",
                    headerTitle: 'Team Details',
                    headerLeft: () => (
                        <Pressable onPress={handleBackPress} style={styles.backButton}>
                            <Ionicons name="chevron-back" size={24} color="white" />
                        </Pressable>
                    ),
                    tabBarIconStyle: { display: "none" },
                })}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Roster',
                        tabBarLabel: () => <CustomTabLabel lines={["Roster"]} />,
                    }}
                />
                <Tabs.Screen
                    name="games"
                    options={{
                        title: 'Games and Stats',
                        tabBarLabel: () => <CustomTabLabel lines={["Games and", "Stats"]} />,
                    }}
                />
                <Tabs.Screen
                    name="media"
                    options={{
                        title: 'Social Media',
                        tabBarLabel: () => <CustomTabLabel lines={["Social", "Media"]} />,
                    }}
                />
            </Tabs>
       
        </>
    );
}

// Custom tab label component
const CustomTabLabel = ({ lines }) => (
    <View style={styles.labelContainer}>
        {lines.map((line, index) => (
            <Text key={index} style={styles.tabLabelText}>
                {line}
            </Text>
        ))}
    </View>
);

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        height: 80,
        paddingHorizontal: 5,
        marginVertical: 93,
        paddingTop: 5,
    },
    tabBarItemStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    labelContainer: {
        alignItems: 'center',
    },
    tabLabelText: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
        lineHeight: 18,
    },
    backButton: {
        marginLeft: 10, // Add some margin
    },
});
