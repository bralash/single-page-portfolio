import React from 'react'

interface sloganProps {
    header: string;
    children: JSX.Element | string;
}
function Slogan(props: sloganProps) {
  return (
    <div className="text-center">
        <h1 className="font-bold text-sp_bold text-sp_black mb-6">
            {props.header}
        </h1>
        <p className='w-sp_sub_width text-center mx-auto text-lg text-sp_grey'>{props.children}</p>
    </div>
  )
}

export default Slogan