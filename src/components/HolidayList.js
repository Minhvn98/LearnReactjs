import React, { useState } from 'react';

const list = [
  { id: 0, name: 'Đi biển', topDestination: true },
  { id: 1, name: 'Đi leo núi', topDestination: false },
  { id: 2, name: 'Đi phượt', topDestination: true },
  { id: 3, name: 'Đi ăn PHO', topDestination: false },
  { id: 4, name: 'Đi lang thang', topDestination: true },
];

const HolidayList = () => {
  const [showAll, setShowAll] = useState(true);

  return (
    <div>
      <h1>Holiday Destinations</h1>
      <ul>
        {list
          .filter((item) => (showAll ? true : item.topDestination === true))
          .map((item, idx) => (
            <li key={idx}>{item.name}</li>
          ))}
      </ul>
      <button onClick={() => setShowAll(true)}>Show All</button>
      <button onClick={() => setShowAll(false)}>Show Destinations</button>
    </div>
  );
};

export default HolidayList;
