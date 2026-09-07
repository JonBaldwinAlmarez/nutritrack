import { globalStyles } from "@/app/styles/global";
import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../app/components/HomeHeader";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <Link href="/app/meals" style={{ fontSize: 18, color: "#007bff" }}>
        Go to Meals
      </Link>
    </ScrollView>
  );
}
