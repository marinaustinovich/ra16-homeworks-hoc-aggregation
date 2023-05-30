import dayjs from 'dayjs';
import React from 'react';

const transformList = (Component, format, sortBy) => {
    return function(props) {
        const transformedList = [];

        props.list.forEach((item) => {
            let transformedItem = {};

            if (format === 'month') {
                transformedItem = {
                    month: dayjs(item.date).format('MMM'),
                    amount: item.amount,
                };

            } else if (format === 'date') {
            transformedItem = {
                date: item.date,
                amount: item.amount,
            };
            } else if (format === 'year') {
            transformedItem = {
                year: dayjs(item.date).year(),
                amount: item.amount,
            };
            }

            transformedList.push(transformedItem);
        });

        if (sortBy) {
            transformedList.sort((a, b) => {
            if (sortBy === 'asc') {
                return dayjs(a.date).unix() - dayjs(b.date).unix();
            } else if (sortBy === 'desc') {
                return dayjs(b.date).unix() - dayjs(a.date).unix();
            } else {
                return 0;
            }
            });
        }

        return <Component list={transformedList} />;
    }
    
};

export default transformList;
