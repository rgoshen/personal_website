import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

jest.mock('react-scroll');

expect.extend(toHaveNoViolations);

const mockLinks = [
  { label: 'Home', href: '#home', isScroll: true },
  { label: 'About', href: '#about', isScroll: true },
  { label: 'Projects', href: '#projects', isScroll: true },
  { label: 'Contact', href: '#contact', isScroll: true },
];

describe('Navbar accessibility tests', () => {
  test('renders Navbar component', () => {
    const { container } = render(
      <Navbar logoSrc='logo.png' links={mockLinks} />,
    );
    console.log(container.innerHTML); // Output the DOM to debug
  });

  test('Navbar has no accessibility violations', async () => {
    const { container } = render(
      <Navbar logoSrc='logo.png' links={mockLinks} />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Navbar toggle button is accessible', () => {
    render(<Navbar logoSrc='logo.png' links={mockLinks} />);
    const toggleButton = screen.getByLabelText(/toggle navigation/i);
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('Keyboard accessibility for Navbar links', () => {
    render(<Navbar logoSrc='logo.png' links={mockLinks} />);
    mockLinks.forEach((link) => {
      const navLink = screen.getByRole('link', { name: link.label });
      navLink.focus();
      expect(navLink).toHaveFocus();
    });
  });

  test('Navbar links have correct aria roles and labels', () => {
    render(<Navbar logoSrc='logo.png' links={mockLinks} />);
    mockLinks.forEach((link) => {
      const navLink = screen.getByRole('link', { name: link.label });
      expect(navLink).toHaveAttribute('href', link.href);
      expect(navLink).toHaveAccessibleName(link.label);
    });
  });
});
