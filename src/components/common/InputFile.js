import React from 'react';
import T from 'prop-types';

import placeholder from '../../assets/images/placeholder.png';

const InputFile = ({ onChange, ...props }) => {
  const inputRef = React.createRef(null);
  const [src, setSrc] = React.useState(null);

  const loadSrcFromFile = file => {
    if (!file) {
      setSrc(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      setSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = ev => {
    const file = ev.target.files[0];
    loadSrcFromFile(file);
    onChange(ev);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleChange}
        {...props}
      />
      <img
        onClick={handleClick}
        src={src || placeholder}
        alt=""
        width="200"
        height="200"
        style={{ objectFit: 'contain' }}
      />
    </>
  );
}

InputFile.propTypes = {
  onChange: T.func.isRequired,
};

export default InputFile;
