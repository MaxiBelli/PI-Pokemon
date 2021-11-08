import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './home';
import Nav from '../navBar/navBar';
import Footer from '../footer/footer';
import Loading from '../loading/loading';

configure({adapter: new Adapter()});

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper =  shallow(<Home />)
  })

  it('deberia renderizar 1 componente1 <Nav />', () => {
    expect(wrapper.find(Nav)).toHaveLength(1)
  })

  it('deberia renderizar 1 componente <Footer />', () => {
    expect(wrapper.find(Footer)).toHaveLength(1)
  })

  it('deberia renderizar 1 componente <Loading />', () => {
    expect(wrapper.find(Loading)).toHaveLength(1)
  })

});