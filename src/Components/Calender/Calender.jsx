import { useState } from "react";
import PropTypes from "prop-types";

const CalenderDay = ({
  day,
  isSelected,
  isToday,
  onClick,
  dayClassName,
  selectedDayClassName,
  todayClassName,
}) => (
  <td
    className={`cursor-pointer p-2 text-center transition-all duration-200 text-gray-700 w-10 h-10 hover:bg-gray-100 hover:rounded-md ${
      isSelected
        ? selectedDayClassName ||
          "bg-blue-500 text-white font-semibold rounded-md"
        : ""
    } ${
      isToday
        ? todayClassName || "bg-blue-100 text-blue-800 font-semibold rounded-md"
        : ""
    } ${dayClassName || ""}`}
    onClick={() => onClick(day)}
  >
    {day}
  </td>
);

CalenderDay.propTypes = {
  day: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isToday: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  dayClassName: PropTypes.string,
  selectedDayClassName: PropTypes.string,
  todayClassName: PropTypes.string,
};

const CalenderWeek = ({ children, weekClassName }) => (
  <tr className={weekClassName}>{children}</tr>
);

CalenderWeek.propTypes = {
  children: PropTypes.node.isRequired,
  weekClassName: PropTypes.string,
};

const CalenderHeader = ({
  month,
  year,
  onPrevious,
  onNext,
  headerClassName,
  monthYearClassName,
  navigationClassName,
  weekdayClassName,
}) => (
  <thead className={headerClassName}>
    <tr>
      <th
        className={
          navigationClassName ||
          "cursor-pointer transition-all duration-200 p-2 text-lg text-gray-600 select-none hover:bg-gray-100 hover:text-gray-800 hover:rounded-md"
        }
        onClick={onPrevious}
      >
        ‹
      </th>
      <th
        className={
          monthYearClassName ||
          "text-base font-semibold text-center text-gray-800 p-3"
        }
        colSpan="5"
      >
        {month} {year}
      </th>
      <th
        className={
          navigationClassName ||
          "cursor-pointer transition-all duration-200 p-2 text-lg text-gray-600 select-none hover:bg-gray-100 hover:text-gray-800 hover:rounded-md"
        }
        onClick={onNext}
      >
        ›
      </th>
    </tr>
    <tr>
      <th
        className={
          weekdayClassName ||
          "p-2 font-medium text-gray-600 text-xs uppercase tracking-wide"
        }
      >
        Sun
      </th>
      <th
        className={
          weekdayClassName ||
          "p-2 font-medium text-gray-600 text-xs uppercase tracking-wide"
        }
      >
        Mon
      </th>
      <th
        className={
          weekdayClassName ||
          "p-2 font-medium text-gray-600 text-xs uppercase tracking-wide"
        }
      >
        Tue
      </th>
      <th
        className={
          weekdayClassName ||
          "p-2 font-medium text-gray-600 text-xs uppercase tracking-wide"
        }
      >
        Wed
      </th>
      <th
        className={
          weekdayClassName ||
          "p-2 font-medium text-gray-600 text-xs uppercase tracking-wide"
        }
      >
        Thu
      </th>
      <th
        className={
          weekdayClassName ||
          "p-2 font-medium text-gray-600 text-xs uppercase tracking-wide"
        }
      >
        Fri
      </th>
      <th
        className={
          weekdayClassName ||
          "p-2 font-medium text-gray-600 text-xs uppercase tracking-wide"
        }
      >
        Sat
      </th>
    </tr>
  </thead>
);

CalenderHeader.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  headerClassName: PropTypes.string,
  monthYearClassName: PropTypes.string,
  navigationClassName: PropTypes.string,
  weekdayClassName: PropTypes.string,
};

const CalenderGrid = ({
  month,
  year,
  selectedDate,
  onDateClick,
  gridClassName,
  dayClassName,
  selectedDayClassName,
  todayClassName,
  weekClassName,
}) => {
  const getDaysInMonth = (m, y) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (m, y) => new Date(y, m, 1).getDay();

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const isSelected = (day) => {
    return (
      selectedDate &&
      day === selectedDate.getDate() &&
      month === selectedDate.getMonth() &&
      year === selectedDate.getFullYear()
    );
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  const weeks = [];
  let dayCount = 1;

  for (let week = 0; week < 6; week++) {
    const days = [];
    for (let day = 0; day < 7; day++) {
      if (week === 0 && day < firstDay) {
        days.push(<td key={`empty-${day}`} />);
      } else if (dayCount <= daysInMonth) {
        days.push(
          <CalenderDay
            key={dayCount}
            day={dayCount}
            isSelected={isSelected(dayCount)}
            isToday={isToday(dayCount)}
            onClick={onDateClick}
            dayClassName={dayClassName}
            selectedDayClassName={selectedDayClassName}
            todayClassName={todayClassName}
          />
        );
        dayCount++;
      }
    }
    if (days.length > 0) {
      weeks.push(
        <CalenderWeek key={week} weekClassName={weekClassName}>
          {days}
        </CalenderWeek>
      );
    }
    if (dayCount > daysInMonth) break;
  }
  return <tbody className={gridClassName}>{weeks}</tbody>;
};

CalenderGrid.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  onDateClick: PropTypes.func.isRequired,
  gridClassName: PropTypes.string,
  dayClassName: PropTypes.string,
  selectedDayClassName: PropTypes.string,
  todayClassName: PropTypes.string,
  weekClassName: PropTypes.string,
};

const Calender = ({
  onDateSelect,
  onDateChange,
  onMonthChange,
  onYearChange,
  onOpen,
  onClose,
  defaultDate = new Date(),
  dateFormat = "DD-MM-YYYY",
  placeholder = "Select Date",
  disabled = false,
  // Control Props
  isOpen,
  onToggle,
  hideInput = false,
  // Date Control Props
  selectedDate: controlledSelectedDate,
  displayMonth: controlledDisplayMonth,
  displayYear: controlledDisplayYear,
  // CSS Customization Props
  containerClassName,
  inputClassName,
  iconClassName,
  dropdownClassName,
  tableClassName,
  headerClassName,
  monthYearClassName,
  navigationClassName,
  weekdayClassName,
  gridClassName,
  weekClassName,
  dayClassName,
  selectedDayClassName,
  todayClassName,
}) => {
  const [internalSelectedDate, setInternalSelectedDate] = useState(defaultDate);
  const [internalDisplayMonth, setInternalDisplayMonth] = useState(
    defaultDate.getMonth()
  );
  const [internalDisplayYear, setInternalDisplayYear] = useState(
    defaultDate.getFullYear()
  );
  const [internalOpen, setInternalOpen] = useState(false);

  // Use controlled or uncontrolled state
  const selectedDate =
    controlledSelectedDate !== undefined
      ? controlledSelectedDate
      : internalSelectedDate;
  const displayMonth =
    controlledDisplayMonth !== undefined
      ? controlledDisplayMonth
      : internalDisplayMonth;
  const displayYear =
    controlledDisplayYear !== undefined
      ? controlledDisplayYear
      : internalDisplayYear;
  const showCalender = isOpen !== undefined ? isOpen : internalOpen;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return dateFormat
      .replace("DD", day)
      .replace("MM", month)
      .replace("YYYY", year);
  };

  const handleDateClick = (day) => {
    if (disabled) return;
    const newDate = new Date(displayYear, displayMonth, day);

    // Update selected date if not controlled
    if (controlledSelectedDate === undefined) {
      setInternalSelectedDate(newDate);
    }

    onDateSelect?.(newDate);
    onDateChange?.(newDate);

    // Close Calender
    if (isOpen === undefined) {
      setInternalOpen(false);
    }
    onToggle?.(false);
    onClose?.();
  };

  const handlePrevious = () => {
    if (displayMonth === 0) {
      const newYear = displayYear - 1;
      if (controlledDisplayMonth === undefined) setInternalDisplayMonth(11);
      if (controlledDisplayYear === undefined) setInternalDisplayYear(newYear);
      onMonthChange?.(11);
      onYearChange?.(newYear);
    } else {
      const newMonth = displayMonth - 1;
      if (controlledDisplayMonth === undefined)
        setInternalDisplayMonth(newMonth);
      onMonthChange?.(newMonth);
    }
  };

  const handleNext = () => {
    if (displayMonth === 11) {
      const newYear = displayYear + 1;
      if (controlledDisplayMonth === undefined) setInternalDisplayMonth(0);
      if (controlledDisplayYear === undefined) setInternalDisplayYear(newYear);
      onMonthChange?.(0);
      onYearChange?.(newYear);
    } else {
      const newMonth = displayMonth + 1;
      if (controlledDisplayMonth === undefined)
        setInternalDisplayMonth(newMonth);
      onMonthChange?.(newMonth);
    }
  };

  const handleToggleCalender = () => {
    if (disabled) return;
    const newState = !showCalender;

    // Update state based on controlled/uncontrolled
    if (isOpen === undefined) {
      setInternalOpen(newState);
    }

    onToggle?.(newState);
    if (newState) {
      onOpen?.();
    } else {
      onClose?.();
    }
  };

  return (
    <div
      className={
        containerClassName ||
        `relative w-max font-sans ${
          disabled ? "opacity-60 pointer-events-none" : ""
        }`
      }
    >
      {!hideInput && (
        <div
          className={
            inputClassName ||
            "flex items-center justify-between gap-3 border-2 border-gray-300 rounded-lg px-4 py-3 bg-white cursor-pointer transition-all duration-200 min-w-52 hover:border-blue-500 hover:shadow-sm hover:shadow-blue-100"
          }
          onClick={handleToggleCalender}
        >
          <div className="text-sm text-gray-700 flex-1">
            {selectedDate ? formatDate(selectedDate) : placeholder}
          </div>
          <span className={iconClassName || "text-lg text-gray-600"}>📅</span>
        </div>
      )}

      {showCalender && !disabled && (
        <div
          className={
            dropdownClassName ||
            `absolute ${hideInput ? "top-0" : "top-full"} left-0 z-50 ${
              hideInput ? "" : "mt-1"
            } bg-white border border-gray-300 rounded-lg shadow-lg animate-in fade-in duration-200 slide-in-from-top-2`
          }
        >
          <table className={tableClassName || "text-sm border-collapse w-full"}>
            <CalenderHeader
              month={months[displayMonth]}
              year={displayYear}
              onPrevious={handlePrevious}
              onNext={handleNext}
              headerClassName={headerClassName}
              monthYearClassName={monthYearClassName}
              navigationClassName={navigationClassName}
              weekdayClassName={weekdayClassName}
            />
            <CalenderGrid
              month={displayMonth}
              year={displayYear}
              selectedDate={selectedDate}
              onDateClick={handleDateClick}
              gridClassName={gridClassName}
              dayClassName={dayClassName}
              selectedDayClassName={selectedDayClassName}
              todayClassName={todayClassName}
              weekClassName={weekClassName}
            />
          </table>
        </div>
      )}
    </div>
  );
};

Calender.propTypes = {
  // Event Handlers
  onDateSelect: PropTypes.func,
  onDateChange: PropTypes.func,
  onMonthChange: PropTypes.func,
  onYearChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onToggle: PropTypes.func,
  // Configuration
  defaultDate: PropTypes.instanceOf(Date),
  dateFormat: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  // Control Props
  isOpen: PropTypes.bool,
  hideInput: PropTypes.bool,
  // Date Control Props
  selectedDate: PropTypes.instanceOf(Date),
  displayMonth: PropTypes.number,
  displayYear: PropTypes.number,
  // CSS Customization
  containerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  dropdownClassName: PropTypes.string,
  tableClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  monthYearClassName: PropTypes.string,
  navigationClassName: PropTypes.string,
  weekdayClassName: PropTypes.string,
  gridClassName: PropTypes.string,
  weekClassName: PropTypes.string,
  dayClassName: PropTypes.string,
  selectedDayClassName: PropTypes.string,
  todayClassName: PropTypes.string,
};

export default Calender;
