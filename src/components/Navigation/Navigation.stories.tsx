import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NavButton, NavButtonList, NavigationPill, NavigationPillList } from './Navigation';

function HomeIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 8.5L10 2L17 8.5V17H13v-4H7v4H3V8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>;
}
function StarIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l2.4 5h5.2l-4.2 3.1 1.6 5L10 12.3 5 15.1l1.6-5L2.4 7h5.2L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>;
}
function GridIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="2" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="2" y="11" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="11" y="11" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

const navItems = [
  { icon: <HomeIcon />, label: 'Home' },
  { icon: <StarIcon />, label: 'Saved' },
  { icon: <GridIcon />, label: 'Browse' },
];
const pillItems = ['Overview', 'Analytics', 'Reports', 'Settings', 'Billing'];

const meta: Meta = { title: 'Components/Navigation', tags: ['autodocs'], parameters: { layout: 'centered' } };
export default meta;

export const ButtonColumn: StoryObj = { name: 'Button · column', render: () => <NavButtonList items={navItems} direction="column" size="sm" /> };
export const ButtonRow: StoryObj = { name: 'Button · row', render: () => <NavButtonList items={navItems} direction="row" size="sm" /> };
export const ButtonMedium: StoryObj = { name: 'Button · column md', render: () => <NavButtonList items={navItems} direction="column" size="md" /> };
export const SingleActive: StoryObj = { name: 'Button · active state', render: () => <div className="flex gap-4"><NavButton icon={<HomeIcon />} label="Home" active /><NavButton icon={<StarIcon />} label="Saved" /></div> };
export const PillRow: StoryObj = { name: 'Pill · row', render: () => <NavigationPillList items={pillItems} direction="row" /> };
export const PillColumn: StoryObj = { name: 'Pill · column', render: () => <div style={{ width: 160 }}><NavigationPillList items={pillItems} direction="column" /></div> };
export const SinglePill: StoryObj = { name: 'Pill · states', render: () => <div className="flex gap-2"><NavigationPill label="Active" active /><NavigationPill label="Default" /><NavigationPill label="Another" /></div> };
