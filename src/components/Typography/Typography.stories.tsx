import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['title-hero', 'title-page', 'heading', 'subheading', 'subtitle', 'body', 'code'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const TitleHero: Story = {
  args: {
    variant: 'title-hero',
    size: 'lg',
    children: 'Title Hero',
  },
};

export const TitlePage: Story = {
  args: {
    variant: 'title-page',
    size: 'md',
    children: 'Title Page',
  },
};

export const Heading: Story = {
  args: {
    variant: 'heading',
    size: 'md',
    children: 'Heading',
  },
};

export const Subheading: Story = {
  args: {
    variant: 'subheading',
    size: 'md',
    children: 'Subheading',
  },
};

export const Subtitle: Story = {
  args: {
    variant: 'subtitle',
    size: 'md',
    children: 'Subtitle',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    size: 'md',
    children:
      'The quick brown fox jumps over the lazy dog. This is body text rendered with the SDS typography system.',
  },
};

export const Code: Story = {
  args: {
    variant: 'code',
    size: 'md',
    children: 'const greeting = "Hello, SDS!";',
  },
};

export const TypeScale: Story = {
  render: () => (
    <div className="flex flex-col gap-[16px]">
      <Typography variant="title-hero" size="lg">Title Hero — 72px / Bold</Typography>
      <Typography variant="title-page" size="md">Title Page — 48px / Bold</Typography>
      <Typography variant="heading" size="md">Heading — 24px / Semibold</Typography>
      <Typography variant="subheading" size="md">Subheading — 20px / Regular</Typography>
      <Typography variant="subtitle" size="md">Subtitle — 32px / Regular</Typography>
      <Typography variant="body" size="md">Body — 16px / Regular</Typography>
      <Typography variant="code" size="md">{'code — 16px / Regular (Roboto Mono)'}</Typography>
    </div>
  ),
};
