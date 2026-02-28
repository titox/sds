import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta = {
  title: 'Components/Inputs/Slider',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;

export const Default: StoryObj = {
  render: () => <Slider label="Label" description="Description" defaultValue={50} />,
};

export const WithPrefix: StoryObj = {
  render: () => <Slider label="Volume" prefix="%" defaultValue={75} />,
};

export const MinValue: StoryObj = {
  render: () => <Slider label="Label" defaultValue={0} />,
};

export const MaxValue: StoryObj = {
  render: () => <Slider label="Label" defaultValue={100} />,
};

export const Disabled: StoryObj = {
  render: () => <Slider label="Label" description="Description" defaultValue={40} disabled />,
};

export const CustomRange: StoryObj = {
  render: () => <Slider label="Temperature" min={-20} max={40} defaultValue={20} prefix="°C" />,
};
