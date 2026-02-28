import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Inputs/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    defaultValue: 'hello@example.com',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    hint: 'Must be 3–20 characters.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    defaultValue: 'not-an-email',
    error: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    placeholder: 'Cannot edit',
    disabled: true,
  },
};

export const NoLabel: Story = {
  args: {
    placeholder: 'Search...',
  },
};
