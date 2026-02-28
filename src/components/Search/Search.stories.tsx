import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';

const meta: Meta = {
  title: 'Components/Inputs/Search',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;

export const Empty: StoryObj = {
  render: () => <Search placeholder="Search…" />,
};

export const Filled: StoryObj = {
  render: () => <Search defaultValue="Hello World" />,
};

export const Disabled: StoryObj = {
  render: () => <Search placeholder="Search…" disabled />,
};

export const DisabledFilled: StoryObj = {
  render: () => <Search defaultValue="Hello World" disabled />,
};
