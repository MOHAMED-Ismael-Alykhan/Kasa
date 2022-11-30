import React from 'react';
import '../style/components/Tag.scss';

const Tag = ({ tag }) => {
  return (
    <div className="tag-container">
      <span className="tag-item">{tag}</span>
    </div>
  );
};

export default Tag;
