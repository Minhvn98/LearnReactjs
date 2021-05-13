import React from 'react';

const list = [
  { id: 0, name: 'Đi biển', topDestination: true },
  { id: 1, name: 'Đi leo núi', topDestination: false },
  { id: 2, name: 'Đi phượt', topDestination: true },
  { id: 3, name: 'Đi ăn PHO', topDestination: false },
  { id: 4, name: 'Đi lang thang', topDestination: true },
];

const HolidayList = () => {
  return (
    <div>
      <h1>Holiday Destinations</h1>
      <ul>
        {Object.keys(list).map((key, idx) => (
          <li key={idx}>{list[key].name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HolidayList;
