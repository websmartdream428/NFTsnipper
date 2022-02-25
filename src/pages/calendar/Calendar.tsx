import React from "react";
import { Header, CardPart } from "views/calendarPage";
import { CalendarPageWrapper } from "./Calendar.styles";

const CalendarPage = () => {
  return (
    <CalendarPageWrapper>
      <Header />
      <CardPart />
    </CalendarPageWrapper>
  );
};

export default CalendarPage;
