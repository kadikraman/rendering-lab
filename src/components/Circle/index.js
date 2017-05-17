import React from 'react';

export default class Circle extends React.Component {

  shouldComponentUpdate(nextProps) {
    return !(nextProps.color === this.props.color);
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}
