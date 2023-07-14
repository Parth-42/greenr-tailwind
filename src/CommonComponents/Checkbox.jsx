import { useState } from 'react';

const Checkbox = ({ details, onCheck }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked, item) => {
    if (checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    onCheck(checked, item);
  };

  const { label, id } = details;

  return (
    <div className='space-x-2 flex'>
      <div className='flex justify-center items-center'>
        <input
          className='accent-green-600'
          type='checkbox'
          id={id}
          name={label}
          onChange={(e) => handleChange(e.target.checked, details)}
        />
      </div>
      <div>
        <label
          htmlFor={id}
          className={`text-gray-500 font-semibold	text-sm  ${
            checked ? 'font-bold' : undefined
          }`}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
