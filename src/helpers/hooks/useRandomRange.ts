import { random } from 'lodash';
import { useState, useRef, useEffect } from 'react';

const parseNumber = (num: number, digits?: number): number => {
  return Number((num).toFixed(digits ?? 2));
};

interface Props {
  minValue: number
  maxValue: number
  updateInterval?: number
  digits?: number
  multiplyAdd?: number
}

/** Provides random number in specified range. Number is updated relative to previous number on set interval. */
const useRandomRange = (props: Props) => {
  const [number, setNumber] = useState<number>();

  /** Interval timer can't change after being initiated, so use a ref for the props. */
  const { current: config } = useRef<Props>(props);

  useEffect(() => {
    const randomNumber: number = randomNumberRange(config.minValue, config.maxValue);
    setNumber(randomNumber);

    const interval = setInterval(() => {
      setNumber((currentNumber) => randomNumberRange(config.minValue, config.maxValue, currentNumber));
    }, config.updateInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const randomNumberRange = (minValue: number, maxValue: number, currentNumber?: number): number => {
    const shouldIncrease: boolean = Math.random() < 0.5;

    if (currentNumber === undefined) {
      return parseNumber(random(minValue, maxValue, true), config.digits);
    }

    const randomDouble: number = config.multiplyAdd ? (Math.random() * config.multiplyAdd) : Math.random();

    if (currentNumber >= maxValue) { return parseNumber((currentNumber - randomDouble), config.digits); }

    if (currentNumber <= minValue) { return parseNumber((currentNumber + randomDouble), config.digits); }

    if (shouldIncrease) {
      return parseNumber((currentNumber + randomDouble), config.digits);
    }

    return parseNumber((currentNumber - randomDouble), config.digits);
  };

  return number;
};

export default useRandomRange;
