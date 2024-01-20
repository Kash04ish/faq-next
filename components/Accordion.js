'use client'
import React, { useState } from "react";
import AccordionUI from "../components/AccordionUI";

const Accordion = () => {
  const [Index, setIndex] = useState(null);

  //data
  const data = [
    {
      id: 1,
      question: "What is the last name of Johnny, Moira, David, and Alexis?",
      answer: "Rose",
    },
    {
      id: 2,
      question: "David is played by what actor? ",
      answer: "Dan Levy",
    },
    {
      id: 3,
      question: "What is the name of the motel Johnny Rose owns? ",
      answer: "Rosebud Motel",
    },
    {
      id: 4,
      question:
        "How much money did Johnny Rose invest in his video rental business initially?",
      answer: "$2,000 How much money did Johnny Rose invest in his video rental business initially gdfcujhfhg",
    },
    {
      id: 5,
      question:
        "What's the name of the soap opera that Moira Rose is best known for?",
      answer: "Sunrise Bay",
    },
    {
      id: 6,
      question:
        "What's the name of the soap opera that Moira Rose is best known for?",
      answer: "Sunrise Bay",
    },
  ];

  return (
    <div className="h-full w-full md:w-full  bg-white">
      <div className="h-full mx-auto p-4 md:p-8 lg:p-16 xl:p-20 pl-5 ">
        {data.map((data) => (
          <AccordionUI
            key={data.id}
            title={data.question}
            Id={data.id}
            children={data.answer}
            Index={Index}
            setIndex={setIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
