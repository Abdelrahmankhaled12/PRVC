import React from 'react'

type text = {
    text: string
}

const Subtitle = ({ text }: text) => {
    return (
        <p className="section-subtitle section-subtitle--center ">{text}</p>
    )
}

export default Subtitle