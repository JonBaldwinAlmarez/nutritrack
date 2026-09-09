import { StyleSheet, View } from "react-native";
import { Meal } from "../storage/meals";
import NutriCard from "./NutriCard";

type NutriGridProps = {
  meals: Meal[];
};

export default function NutriGrid({ meals }: NutriGridProps) {
  const totals = meals.reduce(
    (acc, meal) => ({
      calories: acc.calories + meal.calories,
      protein: acc.protein + meal.protein,
      carbs: acc.carbs + meal.carbs,
      fat: acc.fat + meal.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );

  return (
    <View style={styles.grid}>
      <NutriCard
        label="Calories"
        value={`${totals.calories}g`}
        goal="2,000"
        color="#ff6b6b"
      />
      <NutriCard
        label="Protein"
        value={`${totals.protein}g`}
        goal="150g"
        color="#4ecdc4"
      />
      <NutriCard
        label="Carbs"
        value={`${totals.carbs}g`}
        goal="250g"
        color="#ffd93d"
      />
      <NutriCard
        label="Fat"
        value={`${totals.fat}g`}
        goal="65g"
        color="#6bcb77"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
