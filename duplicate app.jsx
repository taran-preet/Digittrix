import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCards from "./components/ActionCards";
import ContactList from "./components/ContactList";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <ActionCards />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
