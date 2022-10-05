import { useState } from "react";
import Icon from "~/components/Icon";

import { addDays, subDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";

function DateSelect() {
  const [currentDate, setCurrentDate] = useState(
    new Date("2022-11-20T00:00:00Z")
  );

  const goToPrevDay = () => {
    const prevDay = subDays(currentDate, 1);
    setCurrentDate(prevDay);
  };

  const goToNextDay = () => {
    const nextDay = addDays(currentDate, 1);
    setCurrentDate(nextDay);
  };

  return (
    <div className="flex p-4 space-x-4 justify-center items-center">
      <Icon
        name="arrowLeft"
        className="text-red-500 hover:cursor-pointer"
        onClick={goToPrevDay}
      />
      <span className="font-bold text-base">
        {format(currentDate, "d 'de' MMMM", { locale: ptBR })}
      </span>
      <Icon
        name="arrowRight"
        className="text-red-500 hover:cursor-pointer"
        onClick={goToNextDay}
      />
    </div>
  );
}

export default DateSelect;
