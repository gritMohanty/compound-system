"use client";
import { useEffect, useState } from "react";

export const Calendar = () => {
  const [newMonth, setNewMonth] = useState<any>([]);
  const [selectedMonth, setSelectedMonth] = useState(0);

  const monthDatesmap = [
    { id: 0, month: "JAN", days: 31 },
    { id: 1, month: "FEB", days: 28 },
    { id: 2, month: "MAR", days: 31 },
    { id: 3, month: "APR", days: 30 },
    { id: 4, month: "MAY", days: 31 },
    { id: 5, month: "JUN", days: 30 },
    { id: 6, month: "JUL", days: 31 },
    { id: 7, month: "AUG", days: 31 },
    { id: 8, month: "SEP", days: 30 },
    { id: 9, month: "OCT", days: 31 },
    { id: 10, month: "NOV", days: 30 },
    { id: 11, month: "DEC", days: 31 },
  ];

  const days = [
    { id: 0, name: "Sunday" },
    { id: 1, name: "Monday" },
    { id: 2, name: "Tuesday" },
    { id: 3, name: "Wednesday" },
    { id: 4, name: "Thursday" },
    { id: 5, name: "Friday" },
    { id: 6, name: "Saturday" },
  ];

  useEffect(() => {
    //need to add logic for month change.
    calculateDates();
  }, []);

  const calculateDates = () => {
    const currDate = new Date().getDate();
    const currMonth = new Date().getMonth();
    const currYear = new Date().getFullYear();
    const currDay = new Date().getDay();
    formWeek({
      day: days.filter((day) => day.id === currDay)[0],
      date: currDate,
      month: monthDatesmap.filter((m) => m.id === currMonth)[0],
      year: currYear,
    });
    setSelectedMonth(currMonth);
  };

  const formWeek = ({ day, date, month, year }: any) => {
    let rem = date % 7;
    let k = day.id;
    while (rem !== 1) {
      if (k < 0) k = 6;
      rem--;
      k--;
    }
    let week = [];
    let monthMap = [];
    let dateCount = 1;
    for (let i = 0; dateCount <= month.days; i++) {
      if ((i % 7 === 0 && i !== 0) || dateCount === month.days) {
        monthMap.push(week);
        week = [];
      }
      if (i >= k) {
        week.push({
          day: days.filter((day) => day.id === i % 7)[0],
          date: dateCount++,
        });
      } else {
        week.push({
          day: "",
          date: 0,
        });
      }
    }

    setNewMonth(monthMap);
  };

  return (
    <div>
      <div className="actions">
        <select
          value={
            monthDatesmap.filter((month) => month.id === selectedMonth)[0]
              ?.month
          }
          style={{
            outline: "none",
            border: "1px solid white",
            width: 100,
            height: 25,
          }}
        >
          {monthDatesmap.map((month) => (
            <option key={month.id} onClick={() => setSelectedMonth(month.id)}>
              {month.month}
            </option>
          ))}
        </select>
      </div>
      <table style={{ padding: 8 }}>
        {days.map((day) => (
          <th
            key={day.id}
            style={{
              maxWidth: 150,
              padding: 12,
            }}
          >
            {day.name}
          </th>
        ))}
        {newMonth.map((week) => (
          <tr style={{ margin: 8, height: "100%", width: 150 }}>
            {week.map((days) => (
              <td
                style={{
                  height: 20,
                  width: 20,
                  border: "1px solid white",
                  padding: 8,
                }}
              >
                {days.date === 0 ? "" : days.date}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};
