import { useState } from 'react';
import Checkbox from '../CommonComponents/Checkbox';
import Text from '../CommonComponents/Text';
import { checkBoxItems } from '../constants/checkbox';
import TextInput from '../CommonComponents/TextInput';
import Button from '../CommonComponents/Button';
import ReviewStars from './ReviewStars';

const Panel = () => {
  const [checkedFilters, setCheckedFilters] = useState([]);

  const handleCheck = (checked, item) => {
    if (checked && !checkedFilters.includes(item.id)) {
      setCheckedFilters((prev) => [...prev, item]);
    } else if (!checked || checkedFilters.includes(item.id)) {
      setCheckedFilters((prev) => {
        return prev.filter((value) => value.id !== item.id);
      });
    }
  };

  return (
    <div className='border-r-2 border-gray-100 w-72 pl-10 pt-4 pr-16 h-screen'>
      <Text className='font-bold pb-8 text-gray-600'>Filter</Text>

      <div className='pb-8'>
        <Text className='font-bold pb-2 text-gray-600'>Categories</Text>
        {checkBoxItems?.map((item) => {
          return (
            <Checkbox
              className='space-y-4'
              details={item}
              onCheck={handleCheck}
            />
          );
        })}
      </div>

      <div className='pb-8'>
        <Text className='font-bold pb-2 text-gray-600'>Price Range</Text>
        <div className='flex pb-4 w-full justify-between'>
          <TextInput disabled value='Min' className='w-full' />
          <TextInput value={'$200'} />
        </div>
        <div className=''>
          <Button name='Set Price' />
        </div>
      </div>

      <div>
        <Text className='font-bold pb-2 text-gray-600'>Rating</Text>
        <div className='flex gap-2'>
          <Checkbox details={{ label: '', id: 0 }} />
          <ReviewStars />
        </div>
      </div>
    </div>
  );
};

export default Panel;
