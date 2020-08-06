import { useEffect, useRef, useState } from "react";

interface Props {
  delay: number;
  selectedWeekDays: any;
  queryState: any;
  api: any;
}

function useClassesRequestWithDebouncer({
  delay,
  selectedWeekDays,
  queryState,
  api,
}: Props) {
  let timer = useRef(null) as any;
  const [response, setResponse] = useState<any[]>([]);

  useEffect(() => {
    const selectedDays = selectedWeekDays.reduce(
      (accumulator: any, day: { selected: any }, index: number) => {
        if (day.selected) return [...accumulator, index + 1];
        return accumulator;
      },
      [] as number[]
    );

    if (!queryState.subject || !queryState.time || selectedDays.length === 0) {
      setResponse((prevValue) => (prevValue.length !== 0 ? [] : prevValue));
      return;
    }

    clearTimeout(timer.current);

    timer.current = setTimeout(async () => {
      console.log("Api was called");
      const response = await api.get("classes", {
        params: {
          ...queryState,
          week_day: selectedDays.join(", "),
        },
      });

      setResponse(response.data);
    }, delay);
  }, [timer, delay, selectedWeekDays, queryState, api]);

  return response;
}

export { useClassesRequestWithDebouncer };
