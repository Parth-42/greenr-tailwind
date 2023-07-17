import TextInput from '../CommonComponents/TextInput';
import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';

const SearchBar = () => {
  return (
    <div className='bg-gray-100 px-2 py-0.5 rounded-lg relative flex '>
      <div className='absolute top-3.5 left-3.5 flex justify-center items-center text-gray-400'>
        <BsSearch />
      </div>
      <div className='ml-6 w-full mr-6 '>
        <TextInput
          border={false}
          className='w-72 border-none'
          placeholder='Search Here'
        />
      </div>
      <div className='absolute top-3.5 right-3.5 flex justify-center items-center text-gray-400'>
        <RxCross1 />
      </div>
    </div>
  );
};

export default SearchBar;
