import React from 'react';
import { shallow } from 'enzyme';

import Rating from './';

describe.only('Rating', () => {
  it('sets the increasing state correctly', () => {
    const wrapper = shallow(<Rating rating={1} />);
    wrapper.setProps({ rating: 2 });
    expect(wrapper.state()).toEqual({ increasing: true, decreasing: false });
  });

  it('sets the increasing state correctly', () => {
    const wrapper = shallow(<Rating rating={1} />);
    wrapper.setProps({ rating: -4 });
    expect(wrapper.state()).toEqual({ increasing: false, decreasing: true });
  });

  it('sets the stable state correctly', () => {
    const wrapper = shallow(<Rating rating={1} />);
    wrapper.setProps({ rating: 1 });
    expect(wrapper.state()).toEqual({ increasing: false, decreasing: false });
  });
});
