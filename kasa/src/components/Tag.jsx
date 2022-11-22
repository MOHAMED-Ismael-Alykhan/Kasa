import React from 'react';
import '../style/components/Tag.scss';

const Tag = (props) => {
  return (
    <div className="tag-container">
      <span className="tag-item">{props.tag}</span>
    </div>
  );
};

export default Tag;
