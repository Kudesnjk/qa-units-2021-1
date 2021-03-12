import React from 'react'
import { fakeOrders } from '../data/fakeOrders';
import {sortByDate, sortByItemCount, sortOrders} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('first order longer than second', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	})

	it('first order shorter than second', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	})

	it('items fields are null', () => {
		const order1 = {
			items: null,
		};

		const order2 = {
			items: null,
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	})

	it('orders are not objects', () => {
		const order1 = 1

		const order2 = 2

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	})
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('same dates', () => {
		const order1 = {
			date: 1,
		};

		const order2 = {
			date: 1,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('first date bigger than second', () => {
		const order1 = {
			date: 2,
		};

		const order2 = {
			date: 1,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	})

	it('first date smaller than second', () => {
		const order1 = {
			date: 1,
		};

		const order2 = {
			date: 2,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	})

	it('orders are not objects', () => {
		const order1 = 1

		const order2 = 2

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	})

	it('date fields are null', () => {
		const order1 = {
			date: null,
		};

		const order2 = {
			date: null,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	})
});

describe('sortOrders function', () => {
	it('sort function has been called', () => {
		const orders = fakeOrders;
		const func = jest.fn();
		
		sortOrders(orders, func);
		expect(func).toHaveBeenCalled();
	})
	
	it('orders are null', () => {
		const orders = null;
		const func = jest.fn();

		sortOrders(orders, func);
		expect(func).toHaveBeenCalledTimes(0);
	})
})

