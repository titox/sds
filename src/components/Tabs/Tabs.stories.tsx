import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Tab, Tabs } from './Tabs';

const meta: Meta = { title: 'Components/Tabs', tags: ['autodocs'], parameters: { layout: 'centered' } };
export default meta;

// ── Default 6-tab row (matches Figma "Tabs" component) ────────────────────────
export const Default: StoryObj = {
  render: () => (
    <Tabs labels={['Label', 'Label', 'Label', 'Label', 'Label', 'Label']} defaultActiveIndex={0} />
  ),
};

// ── Named tabs ────────────────────────────────────────────────────────────────
export const Named: StoryObj = {
  name: 'Named tabs',
  render: () => (
    <Tabs
      labels={['Overview', 'Analytics', 'Reports', 'Settings', 'Billing']}
      defaultActiveIndex={0}
    />
  ),
};

// ── First active ──────────────────────────────────────────────────────────────
export const FirstActive: StoryObj = {
  name: 'First tab active',
  render: () => <Tabs labels={['Overview', 'Analytics', 'Reports', 'Settings']} defaultActiveIndex={0} />,
};

// ── Middle active ─────────────────────────────────────────────────────────────
export const MiddleActive: StoryObj = {
  name: 'Middle tab active',
  render: () => <Tabs labels={['Overview', 'Analytics', 'Reports', 'Settings']} defaultActiveIndex={2} />,
};

// ── Individual Tab states ─────────────────────────────────────────────────────
export const TabStates: StoryObj = {
  name: 'Tab states',
  render: () => (
    <div className="flex gap-[16px] items-center">
      <Tab label="Active" active />
      <Tab label="Default" />
    </div>
  ),
};

// ── With content panel ────────────────────────────────────────────────────────
function TabsWithContent() {
  const labels = ['Overview', 'Analytics', 'Reports', 'Settings'];
  const content = [
    'Overview content: key metrics and summaries at a glance.',
    'Analytics content: detailed charts and trend analysis.',
    'Reports content: exportable data and scheduled reports.',
    'Settings content: configuration and account preferences.',
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="w-[480px] flex flex-col gap-[24px]">
      <Tabs labels={labels} activeIndex={active} onSelect={setActive} />
      <p className="text-[16px] font-[400] text-[var(--text-default-secondary)] px-[4px]">{content[active]}</p>
    </div>
  );
}

export const WithContent: StoryObj = {
  name: 'With content panel',
  render: () => <TabsWithContent />,
};
