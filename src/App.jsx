import { useState } from "react";
import Calender from "./Components/Calender/Calender";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [displayMonth, setDisplayMonth] = useState(new Date().getMonth());
  const [displayYear, setDisplayYear] = useState(new Date().getFullYear());
  const [isOpen, setIsOpen] = useState(false);
  const [hideInput, setHideInput] = useState(false);

  const handleDateSelect = (date) => {
    console.log("Date selected:", date);
    setSelectedDate(date);
  };

  const handleMonthChange = (month) => {
    console.log("Month changed:", month);
    setDisplayMonth(month);
  };

  const handleYearChange = (year) => {
    console.log("Year changed:", year);
    setDisplayYear(year);
  };

  const handleToggle = (open) => {
    console.log("Calender toggled:", open);
    setIsOpen(open);
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Calender Component Demo
      </h1>

      {/* Controls */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Controls</h2>
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => setHideInput(!hideInput)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {hideInput ? "Show Input" : "Hide Input"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {isOpen ? "Close Calender" : "Open Calender"}
          </button>
          <button
            onClick={() => setSelectedDate(new Date())}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Set Today
          </button>
        </div>
      </div>

      {/* Calendar with All Props */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Customized Calender</h2>
        <Calender
          // Event Handlers
          onDateSelect={handleDateSelect}
          onDateChange={(date) => console.log("Date changed:", date)}
          onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
          onOpen={() => console.log("Calender opened")}
          onClose={() => console.log("Calender closed")}
          onToggle={handleToggle}
          // Configuration
          defaultDate={new Date()}
          dateFormat="DD/MM/YYYY"
          placeholder="Choose a date..."
          disabled={false}
          // Control Props
          isOpen={isOpen}
          hideInput={hideInput}
          selectedDate={selectedDate}
          displayMonth={displayMonth}
          displayYear={displayYear}
          // CSS Customization - Modern Purple Theme
          containerClassName="relative w-max font-sans"
          inputClassName="flex items-center justify-between gap-3 border-2 border-purple-300 rounded-xl px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 cursor-pointer transition-all duration-300 min-w-64 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-100"
          iconClassName="text-xl text-purple-600"
          dropdownClassName="absolute top-full left-0 z-50 mt-2 bg-white border-2 border-purple-200 rounded-xl shadow-2xl shadow-purple-100 animate-in fade-in duration-300 slide-in-from-top-4"
          tableClassName="text-sm border-collapse w-full"
          headerClassName="bg-gradient-to-r from-purple-500 to-pink-500"
          monthYearClassName="text-lg font-bold text-center text-white p-4"
          navigationClassName="cursor-pointer transition-all duration-200 p-3 text-xl text-white select-none hover:bg-white hover:bg-opacity-20 hover:rounded-lg"
          weekdayClassName="p-3 font-semibold text-purple-700 text-xs uppercase tracking-wider bg-purple-50"
          gridClassName="bg-white"
          weekClassName=""
          dayClassName="cursor-pointer p-3 text-center transition-all duration-200 text-gray-700 hover:bg-purple-100 hover:text-purple-800 hover:rounded-lg hover:scale-105"
          selectedDayClassName="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg transform scale-105"
          todayClassName="bg-purple-100 text-purple-800 font-semibold rounded-lg ring-2 ring-purple-300"
        />
      </div>

      {/* Simple Calendar */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Simple Calender</h2>
        <Calender
          onDateSelect={(date) => console.log("Simple calender date:", date)}
          placeholder="Pick a date"
        />
      </div>

      {/* Inline Calendar */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">
          Inline Calender (Always Visible)
        </h2>
        <Calender
          hideInput={true}
          isOpen={true}
          onDateSelect={(date) => console.log("Inline calender date:", date)}
          dropdownClassName="relative shadow-none border-2 border-gray-200 rounded-lg"
        />
      </div>

      {/* Selected Date Display */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-xl font-semibold mb-4">Selected Date Info</h2>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong>Selected Date:</strong> {selectedDate?.toDateString()}
          </p>
          <p>
            <strong>Display Month:</strong> {displayMonth + 1}
          </p>
          <p>
            <strong>Display Year:</strong> {displayYear}
          </p>
          <p>
            <strong>Calender Open:</strong> {isOpen ? "Yes" : "No"}
          </p>
          <p>
            <strong>Input Hidden:</strong> {hideInput ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
