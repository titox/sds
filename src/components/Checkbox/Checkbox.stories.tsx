import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxGroup } from './Checkbox';

const meta: Meta = {
  title: 'Components/Inputs/Checkbox',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;

export const Default: StoryObj = {
  render: () => <Checkbox label="Label" />,
};

export const Checked: StoryObj = {
  render: () => <Checkbox label="Label" defaultChecked />,
};

export const Indeterminate: StoryObj = {
  render: () => <Checkbox label="Label" indeterminate />,
};

export const WithDescription: StoryObj = {
  render: () => <Checkbox label="Label" description="Description" />,
};

export const CheckedWithDescription: StoryObj = {
  render: () => <Checkbox label="Label" description="Description" defaultChecked />,
};

export const DisabledUnchecked: StoryObj = {
  render: () => <Checkbox label="Label" description="Description" disabled />,
};

export const DisabledChecked: StoryObj = {
  render: () => <Checkbox label="Label" description="Description" defaultChecked disabled />,
};

export const DisabledIndeterminate: StoryObj = {
  render: () => <Checkbox label="Label" indeterminate disabled />,
};

export const Group: StoryObj = {
  name: 'Checkbox Group',
  render: () => (
    <CheckboxGroup
      defaultValue={['option-1']}
      options={[
        { label: 'Option 1', description: 'Description for option 1', value: 'option-1' },
        { label: 'Option 2', description: 'Description for option 2', value: 'option-2' },
        { label: 'Option 3', value: 'option-3' },
      ]}
    />
  ),
};

export const GroupDisabled: StoryObj = {
  name: 'Checkbox Group · disabled',
  render: () => (
    <CheckboxGroup
      disabled
      defaultValue={['option-1']}
      options={[
        { label: 'Option 1', value: 'option-1' },
        { label: 'Option 2', value: 'option-2' },
        { label: 'Option 3', value: 'option-3' },
      ]}
    />
  ),
};
