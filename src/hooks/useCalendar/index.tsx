import { useState } from "react";
import { Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export function useCalendar(date: Date, onDateChange: (newDate: Date) => void) {
  const [showPicker, setShowPicker] = useState(false);

  const openCalendar = () => {
    setShowPicker(true);
  };

  const CalendarTrigger = () => (
    <>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "calendar"}
          onChange={(_, selectedDate) => {
            setShowPicker(false);
            if (selectedDate) onDateChange(selectedDate);
          }}
        />
      )}
    </>
  );

  return { openCalendar, CalendarTrigger };
}
