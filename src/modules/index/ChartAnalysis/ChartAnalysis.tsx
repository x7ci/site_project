import { Text } from "@/components/ThemedElements";
import { useState, useEffect, useRef } from "react";
import { styled } from "stitches.config";
import DottedTopBorderBox from "@/components/DottedTopBorderBox";
import dayjs, { Dayjs } from 'dayjs';
import ReactECharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import EChartsReact from "echarts-for-react";
import { useTheme } from "@/contexts/ThemeProvider/ThemeProvider";

const option: EChartsOption = {
    textStyle: {
        fontFamily: '__Roboto_Condensed_615f39'
    },
    grid: {
        show: false,
    },
    // color: ['rgba(153, 250, 255, .8)'],
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
        splitNumber: 3,
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        // boundaryGap: [0, '100%'],
        // splitNumber: 111,
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        backgroundColor: '#181923',
        borderRadius: 0,
        borderColor: 'rgba(0, 0, 0, 0)'
    },
    series: [
        {
            name: 'ID 34-842',
            type: 'line',
            showSymbol: false,
        }
    ]
}

interface LineDataItemOption {
    name: string
    value: (string | number)[]
}

const ChartAnalysis = () => {
    const [date, setDate] = useState<Dayjs>();

    const [hover, setHover] = useState<boolean>(false);

    const [chartOptions, setChartOptions] = useState<EChartsOption>(option);

    const [chartData, setChartData] = useState<LineDataItemOption[]>();

    const chartRef = useRef<EChartsReact>(null);

    const nextDate = useRef<Dayjs>(dayjs());

    const nextDataValue = useRef<number>(Math.random() * 200)

    const { resolvedTheme } = useTheme();

    useEffect(() => {
        if (!chartRef.current) return;

        const chartInstance = chartRef.current.getEchartsInstance();

        const isLight: boolean = resolvedTheme === 'light';

        const newOption: EChartsOption = {
            series: [
                {
                    data: chartData,
                    color: isLight ?
                        ['rgba(0, 0, 0, .6)'] :
                        ['rgba(153, 250, 255, .8)'],
                }
            ],
            tooltip: {
                show: true,
                trigger: 'axis',
                backgroundColor: isLight ? '#f7f7f7' : '#181923',
                borderRadius: 0,
            },
        }

        chartInstance.setOption(newOption, false, true)
    }, [resolvedTheme]);

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

    const initializeData = (): LineDataItemOption[] => {
        let data: LineDataItemOption[] = [];

        for (var i = 0; i < 100; i++) {
            data.push(randomDataItem());
        }

        return data;
    }

    useEffect(() => {
        if (!chartRef.current) return;

        if (chartData?.length) {
            const chartInstance = chartRef.current.getEchartsInstance();
            const newOption: EChartsOption = {
                series: [
                    {
                        data: chartData,
                    }
                ]
            }

            chartInstance.setOption(newOption, false, true)
        }
    }, [chartData]);

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

    useEffect(() => {
        setDate(dayjs())
    }, []);


    const width = useWidth();

    useEffect(() => {
        if (!chartRef.current) return;

        const chartInstance = chartRef.current.getEchartsInstance();

        chartInstance.resize();

    }, [width]);

    return (
        <Wrapper>

            <DottedTopBorderBox>
                <Background>
                    <TextWrapper>
                        <TextRowWrapper>
                            <TextGroupWrapper>
                                <Text size={3} color="gray8">ID 255212</Text>
                                <Text size={3} color="gray8">DATA SET: POLARIS </Text>
                            </TextGroupWrapper>
                            <TextGroupWrapper align="right">
                                <Text size={3} color="gray8">LIVE DATA STREAM </Text>
                                <Text size={3} color="gray8">[CONNECTION ESTABLISHED]</Text>
                            </TextGroupWrapper>
                        </TextRowWrapper>
                        <TextRowWrapper>
                            <TextGroupWrapper>
                                <Text size={3} color="gray8">UNIT TEST: OK</Text>
                                <Text size={3} color="gray8">SAMPLE HEALTH: OK</Text>
                            </TextGroupWrapper>
                            <TextGroupWrapper align="right">
                                <Text size={3} color="gray8">APACHE ECHARTS</Text>
                                <Text size={3} color="gray8">V. 5.4.1 </Text>
                            </TextGroupWrapper>
                        </TextRowWrapper>
                    </TextWrapper>
                    <ChartWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
                        <ReactECharts
                            ref={chartRef}
                            option={chartOptions}
                            notMerge={true}
                            style={{ height: '300px' }}
                            lazyUpdate={true}
                            onChartReady={() => null}
                        />
                    </ChartWrapper>
                    <DottedTopBorderBox />
                </Background>
            </DottedTopBorderBox>
        </Wrapper>
    );
};

const useWidth = () => {
    const [width, setWidth] = useState(0); // default width, detect on server.
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    return width;
};

const Wrapper = styled('div', {
    minWidth: '390px'
});

const Background = styled('div', {
    background: '$cyan2',
});

const ChartWrapper = styled('div', {

});

const TextWrapper = styled('div', {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
});

const TextRowWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'space-between'
});

const TextGroupWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    variants: {
        align: {
            right: {
                alignItems: 'flex-end'
            }
        }
    }
});

export default ChartAnalysis;