import { T, DescriptionContainer, TableDescriptionCell } from '@/components/stitches';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { styled } from 'stitches.config';

interface Props {
  days: string[]
}

interface DayCellContent {
  shortDay: string
  numberDay: string
}

const WeekDaysDescription = ({ days }: Props) => {
  const [daysList, setDaysList] = useState<DayCellContent[]>([]);

  useEffect(() => {
    setDaysList(days.map((day) => ({
      shortDay: dayjs(day).format('ddd'), numberDay: dayjs(day).format('DD')
    })));
  }, [days]);

  return (
    <>
      <DescriptionContainer flex="column">
        {daysList.map((day, i) => {
          const firstDayInList: boolean = i === 0;

          if (firstDayInList) {
            return (
              <TableDescriptionCell key={day.shortDay}>
                <T size={4} color="cyan4" weight={3}>{day.shortDay.toUpperCase()}</T>
              </TableDescriptionCell>
            );
          }

          return (
            <TableDescriptionCell key={day.shortDay}>
              <T size={4} color="cyan7">{day.shortDay.toUpperCase()}</T>
            </TableDescriptionCell>
          );
        })}
      </DescriptionContainer>
      <DescriptionContainer flex="column">
        {daysList.map((day, i) => {
          const firstDayInList: boolean = i === 0;

          if (firstDayInList) {
            return (
              <TableDescriptionCell key={day.numberDay}>
                <T size={4} color="cyan4" weight={3}>{day.numberDay}</T>
              </TableDescriptionCell>
            );
          }

          return (
            <TableDescriptionCell key={day.numberDay}>
              <T size={4} color="cyan7">{day.numberDay}</T>
            </TableDescriptionCell>
          );
        })}
      </DescriptionContainer>
    </>
  );
};

export default WeekDaysDescription;
