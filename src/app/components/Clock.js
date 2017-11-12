import React from 'react';

const Clock = ({hours, minutes, seconds}) => {
    var [h, m, s] = [hours, minutes, seconds].map(num => num < 10 ? '0' + num : num);
    <h1> {h} : {m} : {s} </h1>
};
