const TextInput = (props) => {
  const { border = true } = props;

  return (
    <div>
      <input
        {...props}
        type='text'
        className={`outline-none font-bold h-10 w-full text-sm text-gray-500  px-2 py-0.5 ${
          border ? 'border-solid rounded-lg border border-gray-300' : ''
        }`}
      />
    </div>
  );
};

export default TextInput;
