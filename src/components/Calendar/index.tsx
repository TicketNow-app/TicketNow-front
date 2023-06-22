import React, { useEffect, useRef, useState } from 'react';
import { Calendar as Calendars, LocaleConfig } from 'react-native-calendars';
import { useTheme } from 'styled-components';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Março',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan.',
    'Fev.',
    'Mar',
    'Abril',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  today: 'Hoje',
};

LocaleConfig.defaultLocale = 'pt-br';

export function Calendar() {
  const [selected, setSelected] = useState('');

  return (
    <Calendars
      theme={{
        backgroundColor: '#24262E',
        calendarBackground: '#24262E',
        textSectionTitleColor: '#b6c1cd',
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: '#24262E',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#ffffff',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#24262E',
        selectedDotColor: '#b6c1cd',
        arrowColor: 'black',
        disabledArrowColor: '#d9e1e8',
        monthTextColor: '#b6c1cd',
        indicatorColor: '#b6c1cd',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
      }}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: { selected: true, disableTouchEvent: true },
      }}
    />
  );
}
