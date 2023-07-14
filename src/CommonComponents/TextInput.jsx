const TextInput = (props) => {
  return (
    <div>
      <input
        {...props}
        type='text'
        className='font-bold h-10 w-20 text-sm text-gray-500 text-center px-2 py-0.5 border-solid rounded-lg border border-gray-300 '
      />
    </div>
  );
};

export default TextInput;
