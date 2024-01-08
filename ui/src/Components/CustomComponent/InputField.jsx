import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const InputField = (props) => {
  const {
    id,
    label,
    type,
    name,
    autoComplete,
    required,
    value,
    defaultValue,
    onBlur,
    onKeyUp,
    onKeyDown,
    autoFocus,
    disabled,
    placeholder,
    onChange,
    className,
    minLength,
    maxLength,
    min,
    max,
    pattern,
    title,
    marginTop,
    marginBottom,
    noBorder,
    noBoxShadow,
  } = props;

  console.log(required, "required")
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <div className={`${marginTop && 'mt-4'} ${marginBottom && 'mb-4'}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className='relative'>
        <input 
          className=" h-[62px] flex items-center w-full mt-2.5    appearance-none rounded-lg border-2 border-[#6161FF] px-[14px] py-[13px] placeholder-gray-400 shadow-primary focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          id={id}
          label={label}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder}
          pattern={pattern}
          title={title}
          value={value}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          autoFocus={autoFocus}
          disabled={disabled}
          defaultValue={defaultValue}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
          type={type === 'password' ? (hidePassword ? 'password' : 'text') : type}
        />
         {type === 'password' && (
          <span
            onClick={togglePasswordVisibility}
            className="flex  cursor-pointer absolute right-4 top-3"
          >
            {hidePassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        )}
        
      </div>
    </div>
  );
};

export default InputField;
