import React from 'react';

function Card(props){
    return (
      <>
      <div className='cards'>
        <div className='card'>
          <img src={props.imgsrc}
           alt="myPic"
           className='card_img'/>
           <br></br>
          <span className='card_category'>{props.title}</span>
          <h3 className='card_title'>{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </>
    )
  }

  export default Card;