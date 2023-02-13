import React from "react";

const CourseCard = (props) => {
  const { imgUrl, title,desc } = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
      <h3 className="course__title mb-4">{title}</h3>
        
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        
                
                <p>{desc}</p>

        

        
      </div>
    </div>
  );
};

export default CourseCard;
