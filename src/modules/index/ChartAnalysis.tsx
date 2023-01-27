import { Box, SlicedButton, Text } from "@/components/ThemedElements";
import { useTheme } from "@/contexts/ThemeProvider/ThemeProvider";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image'
import { styled } from "stitches.config";
import DottedTopBorderBox from "@/components/DottedTopBorderBox";
import { keyframes } from "@stitches/react";
import { motion } from 'framer-motion';
import dayjs, { Dayjs } from 'dayjs';
import ReactECharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import EChartsReact from "echarts-for-react";

const option: EChartsOption = {
    textStyle: {
        fontFamily: '__Roboto_Condensed_615f39'
    },
    grid: {
        show: false,
    },
    color: ['rgba(153, 250, 255, .8)'],
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
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
        show: false,
        trigger: 'axis',
    },
    series: [
        {
            name: 'fake data',
            type: 'line',
            showSymbol: false,
        }
    ]
}

interface LineDataItemOption {
    name: string
    value: (string | number)[]
}

let now = dayjs();
let value = Math.random() * 1000;

const ChartAnalysis = () => {
    const [date, setDate] = useState<Dayjs>();

    const [hover, setHover] = useState<boolean>(false);

    const [chartOptions, setChartOptions] = useState<EChartsOption>(option);

    const [chartData, setChartData] = useState<LineDataItemOption[]>();

    const chartRef = useRef<EChartsReact>(null);

    function randomData() {
        now = now.add(1, 'second');
        value = value + Math.random() * 21 - 10;
        return {
            name: now.toString(),
            value: [
                now.toISOString(),
                Math.round(value)
            ]
        };
    }

    const initializeData = () => {
        let data: LineDataItemOption[] = [];

        for (var i = 0; i < 17; i++) {
            data.push(randomData());
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
                newChartData.push(randomData());

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

    return (
        <Wrapper>
            <DottedTopBorderBox>
                <TextWrapper>
                    <TextRowWrapper>
                        <TextGroupWrapper>
                            <Text size={3} color="gray8">ID 255212</Text>
                            <Text size={3} color="gray8">DATA SET: POLARIS </Text>
                        </TextGroupWrapper>
                        <TextGroupWrapper align="right">
                            <Text size={3} color="gray8">{date?.toISOString()}</Text>
                            <Text size={3} color="gray8">[UP TO DATE]</Text>
                        </TextGroupWrapper>
                    </TextRowWrapper>
                    <TextRowWrapper>
                        <TextGroupWrapper>
                            <Text size={3} color="gray8">UNIT TEST: OK</Text>
                            <Text size={3} color="gray8">SAMPLE HEALTH: OK</Text>
                        </TextGroupWrapper>
                        <TextGroupWrapper align="right">
                            <Text size={3} color="gray8">APACHE ECHARTS</Text>
                            <Text size={3} color="gray8">V. 2.9.83 ALPHA </Text>
                        </TextGroupWrapper>
                    </TextRowWrapper>
                </TextWrapper>
                <ChartWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
                    <ReactECharts
                        ref={chartRef}
                        option={chartOptions}
                        notMerge={true}
                        style={{ height: '200px' }}
                        lazyUpdate={true}
                        onChartReady={() => null}
                    />
                </ChartWrapper>
            </DottedTopBorderBox>
            <DottedTopBorderBox />
        </Wrapper>
    );
};

const Wrapper = styled('div', {
    width: '540px',
    height: '200px',
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