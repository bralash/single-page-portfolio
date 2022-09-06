import React from 'react'

interface ctaProps {
    image: string;
    header: string;
    button: string;
    children: string;
}

function CTA(props: ctaProps) {
  return (
    <div className='flex justify-between items-center mb-20'>
        <div className="image w-sp_cta_width">
            <img src={props.image} alt="CTA" />
        </div>
        <div className='info w-540'>
            <h3 className="font-bold text-sp_black text-sp_cta mb-8">{props.header}</h3>
            <p className="text-sp_grey text-lg font-medium mb-8">{props.children}</p>
            <div className="max-w-fit px-11 py-3.5 bg-sp_red text-sp_white rounded-3xl hover:bg-sp_orange cursor-pointer">{props.button}</div>
        </div>

    </div>
  )
}

export default CTA