import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'brand', 'positive', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'md',
  },
};

export const Brand: Story = {
  args: {
    children: 'Brand Button',
    variant: 'brand',
    size: 'md',
  },
};

export const Positive: Story = {
  args: {
    children: 'Positive Button',
    variant: 'positive',
    size: 'md',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning Button',
    variant: 'warning',
    size: 'md',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'brand',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[12px]">
      <Button variant="default">Default</Button>
      <Button variant="brand">Brand</Button>
      <Button variant="positive">Positive</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="brand" disabled>Disabled</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-[12px]">
      <Button variant="brand" size="sm">Small</Button>
      <Button variant="brand" size="md">Medium</Button>
      <Button variant="brand" size="lg">Large</Button>
    </div>
  ),
};
