import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from './DateInput';

const meta: Meta = {
  title: 'Components/Inputs/Date Input',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;

export const Default: StoryObj = {
  render: () => <DateInput label="Label" />,
};

export const WithValue: StoryObj = {
  render: () => (
    <DateInput
      label="Date of birth"
      defaultValue={{ day: '15', month: '01', year: '1990' }}
    />
  ),
};

export const WithDescription: StoryObj = {
  render: () => (
    <DateInput label="Label" description="Description" />
  ),
};

export const WithError: StoryObj = {
  render: () => (
    <DateInput label="Label" description="Description" error="Please enter a valid date." />
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <DateInput
      label="Label"
      description="Description"
      defaultValue={{ day: '01', month: '06', year: '2024' }}
      disabled
    />
  ),
};
