import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Pikachu from './';

describe('Pikachu', () => {
  it('calls the function to resize the pikachu whenever the component re-renders', () => {
    const spy = expect.spyOn(Pikachu.prototype, 'resizePikachu');
    const wrapper = shallow(<Pikachu />);
    wrapper.instance().componentDidUpdate();
    expect(spy.calls.length).toEqual(1);
  });
});
