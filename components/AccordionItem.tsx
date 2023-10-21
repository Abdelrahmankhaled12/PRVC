import React, { useState } from 'react'

type AccordionItemProps = {
    img : string,
    title : string,
    paragraph : string
}

const AccordionItem = ({img , title , paragraph}: AccordionItemProps) => {
    const [ accordion , setAccordion] = useState(false);


    const handleClick = () => {
        setAccordion(!accordion)
    }

    return (
        <li className="accordion__item">
            <h3 className={`${accordion ? "accordion__title accordion__title--active" : "accordion__title"}`} onClick={() => handleClick()}>
                <img src={img} className="accordion__icon" alt="Accordion Icon" />{title} </h3>
            <div className={`${accordion ? "accordion__content accordion__content-active" : "accordion__content"}`}>
                <p className={`${accordion ? "active" : ""}`}>{paragraph}</p>
            </div>
        </li>
    )
}

export default AccordionItem