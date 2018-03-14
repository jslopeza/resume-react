import React from 'react';

import './sectionBody.scss';

const SectionBody = ({ title, subTitle, rightText, body }) => {
  let sectionBody = null;

  if (typeof body === 'object') {
    sectionBody = (
      <ul className="section-body--content section-body--list">
        {body.map((item, i) => (
          <li className="section-body--list--item" key={i}>
            {item}
          </li>
        ))}
      </ul>
    );
  } else {
    sectionBody = <div className="section-body--content">{body}</div>;
  }

  return (
    <div className="section-body">
      <div className="section-body--header">
        <div className="section-body--info">
          <h2 className="section-body--title">{title}</h2>
          <h3 className="section-body--subtitle">{subTitle}</h3>
        </div>
        <div className="section-body--right-text">{rightText}</div>
      </div>
      {sectionBody}
    </div>
  );
};

export default SectionBody;
