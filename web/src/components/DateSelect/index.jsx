import Icon from "~/components/Icon";

import { addDays, subDays, format, formatISO } from "date-fns";
import { ptBR } from "date-fns/locale";

function DateSelect({ currentDate, onChange }) {
  const date = new Date(currentDate);

  const goToPrevDay = () => {
    const prevDay = subDays(date, 1);
    onChange(formatISO(prevDay));
  };

  const goToNextDay = () => {
    const nextDay = addDays(date, 1);
    onChange(formatISO(nextDay));
  };

  return (
    <div className="flex p-4 space-x-4 justify-center items-center">
      <Icon
        name="arrowLeft"
        className="text-red-500 hover:cursor-pointer"
        onClick={goToPrevDay}
      />
      <span className="font-bold text-base">
        {format(date, "d 'de' MMMM", { locale: ptBR })}
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
