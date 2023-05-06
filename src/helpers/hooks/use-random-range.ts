import { random } from 'lodash';
import { useState, useEffect, startTransition } from 'react';

const parseNumber = (num: number, digits?: number): number => {
  return Number((num).toFixed(digits ?? 2));
};

const randomNumberRange = (config: Props, currentNumber?: number): number => {
  let shouldIncrease: boolean = Math.random() < 0.5;

  if (currentNumber === undefined) {
    return parseNumber(random(config.minValue, config.maxValue, true), config.digits);
  }

  const randomDouble: number = config.multiplyAdd ? (Math.random() * config.multiplyAdd) : Math.random();

  if (currentNumber + randomDouble >= config.maxValue) {
    return parseNumber((currentNumber - randomDouble), config.digits);
  }

  if (currentNumber - randomDouble <= config.minValue) {
    return parseNumber((currentNumber + randomDouble), config.digits);
  }

  if ((currentNumber + randomDouble) > config.maxValue) {
    shouldIncrease = false;
  }

  if ((currentNumber - randomDouble) < config.minValue) {
    shouldIncrease = true;
  }

  if (shouldIncrease) {
    return parseNumber((currentNumber + randomDouble), config.digits);
  }

  return parseNumber((currentNumber - randomDouble), config.digits);
};

interface Props {
  /** Min value for the number. */
  minValue: number

  /** Max value for the number. */
  maxValue: number

  /** Update interval in milliseconds. */
  updateInterval?: number

  /** The number of digits after the decimal point. */
  digits?: number

  /** Multiple the next addition number with this. */
  multiplyAdd?: number
}

/** Provides random number in specified range. Number is updated relative to previous number on set interval. Useful for mocking data like percentage metrics. */
const useRandomRange = (props: Props) => {
  const [number, setNumber] = useState<number>();

  useEffect(() => {
    const randomNumber: number = randomNumberRange(props);

    startTransition(() => {
      setNumber(randomNumber);
    });

    const interval = setInterval(() => {
      startTransition(() => {
        setNumber((currentNumber) => randomNumberRange(props, currentNumber));
      });
    }, props.updateInterval);

    return () => {
      clearInterval(interval);
    };

    /** Intentionally exclude props from dependency array as we never want to to re-run this effect. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return number;
};

export default useRandomRange;
