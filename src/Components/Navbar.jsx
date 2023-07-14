import Text from '../CommonComponents/Text';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Icon from '../CommonComponents/Icon';

const Navbar = () => {
  return (
    <div className='mb-2 flex w-full m-x-0 border-b-2 border-grey-200 py-5 px-10'>
      <div className='w-72'>
        <Text>GreenR</Text>
      </div>

      <div className='flex justify-between w-full'>
        <div className='flex gap-x-10'>
          <Text className='underline underline-offset-8 decoration-green-600 h'>
            Shop
          </Text>
          <Text>Plant Care</Text>
          <Text>Workshops</Text>
          <Text>Blogs</Text>
        </div>

        <div className='flex gap-x-7'>
          <Icon>
            <AiOutlineHeart />
          </Icon>
          <Icon>
            <AiOutlineShoppingCart />
          </Icon>
          <Icon>
            <CgProfile />
          </Icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
