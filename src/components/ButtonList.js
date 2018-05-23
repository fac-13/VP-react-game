import React from 'react';
import Button from './Button';

export default class buttonList extends React.Component {
  render() {
    const buttons = [
      { type: '💜', value: 10 },
      { type: '🐶', value: 2 },
      { type: '⭐', value: 2 }
    ];
    return (
      <ul className="buttonList">
        {buttons.map(btn => {
          return <Button key={btn.type} {...btn} />;
        })}
      </ul>
    );
  }
}
