import React, { useState } from "react";
import { Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DateInput, ButtonText } from "./styles";

interface ScheduleCalendarProps {
  date: Date;
  onDateChange: (date: Date) => void;
}

export const ScheduleCalendar = ({
  date,
  onDateChange,
}: ScheduleCalendarProps) => {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <>
      <DateInput onPress={() => setShowPicker(true)}>
        <ButtonText>{date.toLocaleDateString()}</ButtonText>
      </DateInput>

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
};
