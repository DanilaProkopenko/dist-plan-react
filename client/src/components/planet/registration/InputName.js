import React from "react";
import Radio from './Radio';

const InputName = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Имя" />
      <input type="text" placeholder="Фамилия" />
      <input type="text" placeholder="Количество людей" />
      <Radio />
      <input type="text" placeholder="Номер телефона" />
    </div>
  );
};


export default InputName;
