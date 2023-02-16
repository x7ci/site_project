import dayjs, { type Dayjs } from 'dayjs';
import { useEffect, useRef, useState, startTransition } from 'react';

interface LineDataItemOption {
  name: string
  value: Array<string | number>
}

interface Props {
  dataLength: number
}

/** Custom React hook to stream randomly generated chart data. */
const useChartData = ({ dataLength }: Props) => {
  const [chartData, setChartData] = useState<LineDataItemOption[]>();

  const nextDate = useRef<Dayjs>(dayjs());

  const nextDataValue = useRef<number>(Math.random() * 200);

  /** Generate single random data item. */
  const randomDataItem = (): LineDataItemOption => {
    nextDate.current = nextDate.current.add(1, 'second');
    nextDataValue.current = nextDataValue.current + Math.random() * 21 - 10;

    return {
      name: nextDate.current.toString(),
      value: [
        nextDate.current.toISOString(),
        Math.round(nextDataValue.current)
      ]
    };
  };

  /** Push new data on interval. */
  useEffect(() => {
    nextDate.current = nextDate.current.subtract(dataLength, 'seconds');

    /** Seed data. */
    const initialData = [...Array(dataLength)].map(() => randomDataItem());

    setChartData(initialData);

    const interval = setInterval(() => {
      startTransition(() => {
        const newDataItem = randomDataItem();

        setChartData((currentChartData) => {
          if (currentChartData) {
            const [, ...rest] = currentChartData;

            return [...rest, newDataItem];
          }

          return [newDataItem];
        });
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return ({ chartData });
};

export default useChartData;
