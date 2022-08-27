import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home.js";
import Search from "./src/screens/Search.js";
import Icon from "react-native-vector-icons/Feather";
import CardCoin from "./componets/CardCoin.js";
import { Colors } from "react-native-paper";
import InputCardCoin from "./componets/InputCardCoin.js";

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarLabelStyle: { color: "black", fontSize: 13 },
        }}
      >
        <Tabs.Screen
          name="Home"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  color={focused ? "brown" : "black"}
                  size={25}
                  name="home"
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Filter"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  color={focused ? "brown" : "black"}
                  style={{ backgroundColor: "" }}
                  size={25}
                  name="filter"
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Search Card"
          component={InputCardCoin}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  color={focused ? "brown" : "black"}
                  size={25}
                  name="search"
                />
              );
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
