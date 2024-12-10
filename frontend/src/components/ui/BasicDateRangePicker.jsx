import { DateRangePicker } from "@nextui-org/date-picker";
import { parseDate } from "@internationalized/date";

const today = new Date();

// Oblicz datę sprzed miesiąca
const lastMonth = new Date();
lastMonth.setMonth(today.getMonth() - 1);

const BasicDateRangePicker = () => {
    return (
        <DateRangePicker
            className="max-w-xs"
            defaultValue={{
                start: parseDate(
                    `${lastMonth.getFullYear()}-${String(lastMonth.getMonth() + 1).padStart(2, "0")}-${String(
                        lastMonth.getDate()
                    ).padStart(2, "0")}`
                ),
                end: parseDate(
                    `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(
                        today.getDate()
                    ).padStart(2, "0")}`
                ),
            }}
        />
    );
};
export default BasicDateRangePicker;
