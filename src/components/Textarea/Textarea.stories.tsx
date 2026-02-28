import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta = {
  title: 'Components/Inputs/Textarea',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;

export const Default: StoryObj = {
  render: () => <Textarea label="Label" placeholder="Placeholder text" />,
};

export const WithValue: StoryObj = {
  render: () => <Textarea label="Label" defaultValue="Some content that has already been entered." />,
};

export const WithDescription: StoryObj = {
  render: () => (
    <Textarea label="Label" description="Description" placeholder="Placeholder text" />
  ),
};

export const WithHint: StoryObj = {
  render: () => (
    <Textarea
      label="Bio"
      description="Tell us about yourself"
      placeholder="Write something…"
      hint="Max 500 characters"
    />
  ),
};

export const WithError: StoryObj = {
  render: () => (
    <Textarea
      label="Label"
      description="Description"
      placeholder="Placeholder text"
      error="This field is required."
    />
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <Textarea label="Label" description="Description" placeholder="Cannot edit" disabled />
  ),
};
