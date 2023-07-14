/* eslint-disable react/prop-types */
const Text = (props) => {
  return <p {...props}>{props.children}</p>;
};

export default Text;
