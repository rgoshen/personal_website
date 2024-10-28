import React from 'react';

const Link = ({ children, ...props }) => <a {...props}>{children}</a>;

module.exports = { Link, animateScroll: { scrollToTop: jest.fn() } };
