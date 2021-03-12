import { shallow, configure } from 'enzyme';
import React from 'react'
import { getDate } from '../utils/getDate';
jest.mock('../utils/getDate');
import Order from './Order';
import Adapter from 'enzyme-adapter-react-16';
import { fakeOrders } from '../data/fakeOrders';

configure({ adapter: new Adapter() });

describe('Order.js', () => {
  beforeEach( () => {
    getDate.mockReturnValue('11 января');
  })

  afterEach( () => {
    getDate.mockClear();
  })

  afterAll( () => {
    jest.resetModules();
  })

  it('render with some fake data', () => {
    const order = fakeOrders[0]

    const wrapper = shallow(<Order
      order = {order}
    />); 

    expect(getDate).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot()
  });

  it('render with null props in order', () => {
    const props = {
      order: {
        shop: null,
        date: null,
      },
    };

    const result = shallow(<Order {...props}/>);

    expect(result).toMatchSnapshot();
  });

  it('render with items null', () => {
    const props  = {
      order: {
        shop: 'some shop',
        date: 1,
        items: null,
      },
    };

    const wrapper = shallow(<Order {...props}/>);

    expect(getDate).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  })

  it('render with props null', () => {
    const props = null

    const wrapper = shallow(<Order {...props}/>);

    expect(getDate).toHaveBeenCalledTimes(0);
    expect(wrapper).toMatchSnapshot();
  })
});

