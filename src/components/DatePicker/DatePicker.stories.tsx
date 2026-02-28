import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta = {
  title: 'Components/Inputs/Date Picker',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;

export const Default: StoryObj = {
  render: () => <DatePicker label="Label" />,
};

export const WithValue: StoryObj = {
  render: () => <DatePicker label="Date of birth" defaultValue="1990-01-15" />,
};

export const WithDescription: StoryObj = {
  render: () => (
    <DatePicker label="Label" description="Description" />
  ),
};

export const WithError: StoryObj = {
  render: () => (
    <DatePicker label="Label" description="Description" error="Please select a valid date." />
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <DatePicker label="Label" description="Description" defaultValue="2024-06-01" disabled />
  ),
};
