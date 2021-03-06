import React from 'react';
import Button from './Button';
import './css/buttonList.css';
import ErrorBoundary from './ErrorBoundary';

class ButtonList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const buttons = [
      { type: '💜', value: 3 },
      { type: '🐶', value: 2 },
      { type: '⭐', value: 1 }
    ];
    const { handleClick } = this.props;

    return (
      <ul className="buttonList">
        {buttons.map((btn, i) => {
          return <Button handleClick={handleClick} key={i} {...btn} />;
        })}
      </ul>
    );
  }
}

export default ErrorBoundary(ButtonList);
