import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';

const meta: Meta = {
  title: 'Components/Inputs/Radio',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;

export const Unchecked: StoryObj = {
  render: () => <Radio label="Label" name="demo" value="a" />,
};

export const Checked: StoryObj = {
  render: () => <Radio label="Label" name="demo2" value="a" defaultChecked />,
};

export const WithDescription: StoryObj = {
  render: () => <Radio label="Label" description="Description" name="demo3" value="a" />,
};

export const CheckedWithDescription: StoryObj = {
  render: () => <Radio label="Label" description="Description" name="demo4" value="a" defaultChecked />,
};

export const DisabledUnchecked: StoryObj = {
  render: () => <Radio label="Label" description="Description" name="demo5" value="a" disabled />,
};

export const DisabledChecked: StoryObj = {
  render: () => <Radio label="Label" description="Description" name="demo6" value="a" defaultChecked disabled />,
};

export const Group: StoryObj = {
  name: 'Radio Group',
  render: () => (
    <RadioGroup
      name="demo-group"
      defaultValue="option-1"
      options={[
        { label: 'Option 1', description: 'Description for option 1', value: 'option-1' },
        { label: 'Option 2', description: 'Description for option 2', value: 'option-2' },
        { label: 'Option 3', value: 'option-3' },
      ]}
    />
  ),
};

export const GroupDisabled: StoryObj = {
  name: 'Radio Group · disabled',
  render: () => (
    <RadioGroup
      name="demo-group-disabled"
      defaultValue="option-1"
      disabled
      options={[
        { label: 'Option 1', value: 'option-1' },
        { label: 'Option 2', value: 'option-2' },
        { label: 'Option 3', value: 'option-3' },
      ]}
    />
  ),
};
