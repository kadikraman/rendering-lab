import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Animation from './';

describe('Animation', () => {
  it('triggers the loading bar when a rerender is about to take place ', () => {
    const spy = expect.spyOn(Animation.prototype, 'showLoadingBar');
    const wrapper = shallow(<Animation />);
    wrapper.instance().componentWillUpdate();
    expect(spy.calls.length).toEqual(1);
  });
});
