import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from './Avatar';

const meta: Meta = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;

const sampleAvatars = [
  { type: 'initial' as const, initials: 'AA' },
  { type: 'initial' as const, initials: 'BB' },
  { type: 'initial' as const, initials: 'CC' },
  { type: 'initial' as const, initials: 'DD' },
  { type: 'initial' as const, initials: 'EE' },
];

export const InitialCircle: StoryObj = {
  name: 'Initial · circle',
  render: () => (
    <div className="flex items-center gap-[16px]">
      <Avatar type="initial" initials="SM" size="sm" />
      <Avatar type="initial" initials="MD" size="md" />
      <Avatar type="initial" initials="LG" size="lg" />
    </div>
  ),
};

export const InitialSquare: StoryObj = {
  name: 'Initial · square',
  render: () => (
    <div className="flex items-center gap-[16px]">
      <Avatar type="initial" initials="SM" size="sm" shape="square" />
      <Avatar type="initial" initials="MD" size="md" shape="square" />
      <Avatar type="initial" initials="LG" size="lg" shape="square" />
    </div>
  ),
};

export const ImageCircle: StoryObj = {
  name: 'Image · circle',
  render: () => (
    <div className="flex items-center gap-[16px]">
      <Avatar type="image" src="https://i.pravatar.cc/24" alt="User" size="sm" />
      <Avatar type="image" src="https://i.pravatar.cc/32" alt="User" size="md" />
      <Avatar type="image" src="https://i.pravatar.cc/40" alt="User" size="lg" />
    </div>
  ),
};

export const ImageSquare: StoryObj = {
  name: 'Image · square',
  render: () => (
    <div className="flex items-center gap-[16px]">
      <Avatar type="image" src="https://i.pravatar.cc/24" alt="User" size="sm" shape="square" />
      <Avatar type="image" src="https://i.pravatar.cc/32" alt="User" size="md" shape="square" />
      <Avatar type="image" src="https://i.pravatar.cc/40" alt="User" size="lg" shape="square" />
    </div>
  ),
};

export const GroupOverlap: StoryObj = {
  name: 'Group · overlap',
  render: () => (
    <AvatarGroup avatars={sampleAvatars} max={3} spacing="overlap" size="md" />
  ),
};

export const GroupSpaced: StoryObj = {
  name: 'Group · spaced',
  render: () => (
    <AvatarGroup avatars={sampleAvatars} max={4} spacing="spaced" size="md" />
  ),
};

export const GroupNoOverflow: StoryObj = {
  name: 'Group · no overflow',
  render: () => (
    <AvatarGroup avatars={sampleAvatars.slice(0, 3)} max={5} spacing="overlap" size="md" />
  ),
};
