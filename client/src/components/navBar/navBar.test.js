import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Nav from './navBar';

configure({adapter: new Adapter()});

describe('<Nav />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Nav />)
  })

  it('Deberia renderizar un <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });
  it('El Link debe cambiar la ruta hacia "/pokemons".', () => {
    //el orden donde declaran los Links es importante
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/pokemons');
  });
})