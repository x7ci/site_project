import dayjs, { Dayjs } from "dayjs";
import { useEffect, useRef, useState } from "react";

interface LineDataItemOption {
    name: string
    value: (string | number)[]
}

interface Props {
    dataLength: number
}

/** Custom React hook to stream randomly generated chart data. */
const useChartData = ({ dataLength }: Props) => {
    const [chartData, setChartData] = useState<LineDataItemOption[]>();

    const nextDate = useRef<Dayjs>(dayjs());

    const nextDataValue = useRef<number>(Math.random() * 200)

    /** Seed data. */
    const initializeData = (): LineDataItemOption[] => {
        let data: LineDataItemOption[] = [];

        for (var i = 0; i < dataLength; i++) {
            data.push(randomDataItem());
        }

        return data;
    }

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
    }

    /** Push new data on interval. */
    useEffect(() => {
        const initialData = initializeData();

        setChartData(initialData);

        const interval = setInterval(() => {
            setChartData((currentChartData) => {
                const newChartData = currentChartData?.length ? [...currentChartData] : [];
                newChartData.shift();
                newChartData.push(randomDataItem());

                return newChartData;
            })

        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return ({ chartData });
};

export default useChartData;
