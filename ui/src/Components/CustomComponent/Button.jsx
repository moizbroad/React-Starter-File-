import React from 'react'

const Button = (props) => {

  const {
    id,
    type,
    fullWidth,
    disabled,
    loading,
    loadingText,
    primary,
    onClick,
    className,
    children,

  } = props;

  return (

    <div >
      <button className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
        id={id}
        // type={Button}
        onClick={onClick}
      // loading={loading}



      >
        {children}
      </button>
    </div>

  )
}

export default Button;