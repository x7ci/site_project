import { T } from '@/components/stitches';
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);

  return (
    <T
      as="time"
      dateTime={dateString}
      uppercase
      size={5}
      weight="3"
    >
      {format(date, 'LLLL d, yyyy')}
    </T>
  );
}
