import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Footer } from './Footer';

const meta: Meta = { title: 'Components/Footer', tags: ['autodocs'], parameters: { layout: 'fullscreen' } };
export default meta;

export const Default: StoryObj = { render: () => <Footer /> };

export const TwoColumns: StoryObj = {
  name: 'Two columns',
  render: () => (
    <Footer
      columns={[
        { title: 'Product', links: [{ label: 'Features', href: '#' }, { label: 'Pricing', href: '#' }, { label: 'Changelog', href: '#' }] },
        { title: 'Company', links: [{ label: 'About', href: '#' }, { label: 'Blog', href: '#' }, { label: 'Contact', href: '#' }] },
      ]}
    />
  ),
};
