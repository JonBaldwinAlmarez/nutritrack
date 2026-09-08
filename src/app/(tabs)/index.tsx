import { ScrollView, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";
import NutriGrid from "../components/NutriGrid";
import { globalStyles } from "../styles/global";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <NutriGrid />
    </ScrollView>
  );
}
