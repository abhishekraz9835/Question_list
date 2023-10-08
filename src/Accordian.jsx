import React,{useState} from 'react';
import {questions} from './api';
import "./index.css";
import MyAccordian from './MyAccordian';

const Accordian = () =>{
    const [data, setdata] = useState(questions);
    return (
        <>
        <section className="main_div">
        {
            data.map((curElem) =>{
                const {id} = curElem;
                 return <MyAccordian key={id}{...curElem}/>
            })
        }
        </section>
        </>
    )
}

export default Accordian;