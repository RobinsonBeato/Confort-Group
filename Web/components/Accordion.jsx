import React, { useState } from 'react';


const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item ">
      <div className="accordion-title " onClick={onClick}>
        <h3 className="h2 colored">{title}</h3>
        <span className="accordion-icon open accordion-content"  >{isOpen ? <ion-icon style={{ color: 'white'}} name="remove-outline"></ion-icon> : <ion-icon style={{ color: 'white'}} name="add-outline"></ion-icon> }</span>
      </div>
      {isOpen && <div className="accordion-content section-text">{content}
        <a href='#' className='link-accordion'>Ver más 
           <ion-icon style={{ marginLeft: '10px'}} name="arrow-forward-outline"></ion-icon>
        </a>
        </div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;