import React from 'react';

export default class Rating extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.setState({
      increasing: this.props.rating < nextProps.rating,
      decreasing: this.props.rating > nextProps.rating
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      increasing: false,
      decreasing: false
    };
  }

  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}
