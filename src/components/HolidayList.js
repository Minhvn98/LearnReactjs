import React, { useState } from 'react';

const list1 = [
  'Đi biển',
  'Đi leo núi',
  'Đi phượt',
  'Đi ăn PHO',
  'Đi lang thang',
];

const list2 = [
  'Đi biển',
  'Đi ăn PHO',
  'Đi phượt',
  'Đi lang thang',
  'Đi leo núi',
];

const HolidayList = () => {
  const [list, setList] = useState(list1);

  const onClickHandler = () => {
    setList(list === list1 ? list2 : list1);
  };

  const displayList = () => {
    return (
      <ul>
        {list.map((item, index) => (
          <li key={item}>
            <label htmlFor={`item-${index}`}>{item}</label>
            <input id={`item-${index}`} type="text"></input>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Holiday List</h1>
      {displayList()}
      <button onClick={onClickHandler}>Change List</button>
    </div>
  );
};

export default HolidayList;
