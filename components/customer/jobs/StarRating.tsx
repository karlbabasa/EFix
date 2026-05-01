import { Pressable, Text, View } from "react-native";

type StarRatingProps = {
  rating: number;
  onChange: (rating: number) => void;
};

export function StarRating({ rating, onChange }: StarRatingProps) {
  return (
    <View>
      <View className="flex-row gap-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <Pressable
            key={star}
            onPress={() => onChange(star)}
            className="active:opacity-70"
          >
            <Text className="text-4xl text-slate-950">
              {star <= rating ? "★" : "☆"}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text className="mt-3 text-sm text-slate-500">
        {rating > 0 ? `${rating} out of 5` : "Tap a star to rate"}
      </Text>
    </View>
  );
}