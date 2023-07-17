import SearchBar from './SearchBar';
import Sort from './Sort';
import Card from '../CommonComponents/Card';
import { cards } from '../constants/cards';

const Products = () => {
  return (
    <div className=' px-10 pt-4 w-full'>
      <SearchBar />
      <Sort />
      <div className='flex gap-10 py-8 flex-wrap'>
        {cards.map((item) => {
          return (
            <Card
              name={item?.name}
              price={item?.price}
              imageUrl={item?.imageSrc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
