import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Text,
  TextStrong,
  TextEmphasis,
  TextSmall,
  TextLink,
  TextCode,
  TextHeading,
  TextSubheading,
  TextSubtitle,
  TextTitlePage,
  TextTitleHero,
  TextPrice,
  TextList,
} from './Text';

const meta: Meta = { title: 'Components/Text', tags: ['autodocs'], parameters: { layout: 'centered' } };
export default meta;

// ── Inline variants ────────────────────────────────────────────────────────────
export const Default: StoryObj = { name: 'Text (regular)', render: () => <Text>The quick brown fox jumps over the lazy dog.</Text> };
export const Strong: StoryObj = { name: 'Text strong', render: () => <TextStrong>The quick brown fox jumps over the lazy dog.</TextStrong> };
export const Emphasis: StoryObj = { name: 'Text emphasis', render: () => <TextEmphasis>The quick brown fox jumps over the lazy dog.</TextEmphasis> };
export const Small: StoryObj = { name: 'Text small', render: () => <TextSmall>The quick brown fox jumps over the lazy dog.</TextSmall> };
export const Link: StoryObj = { name: 'Text link', render: () => <TextLink href="#">Read the documentation</TextLink> };
export const Code: StoryObj = { name: 'Text code', render: () => <TextCode>const x = 42;</TextCode> };

// ── Heading scale ──────────────────────────────────────────────────────────────
export const TitleHero: StoryObj = { name: 'Title hero (72px)', render: () => <TextTitleHero>Title Hero</TextTitleHero> };
export const TitlePage: StoryObj = { name: 'Title page (48px)', render: () => <TextTitlePage>Title Page</TextTitlePage> };
export const Subtitle: StoryObj = { name: 'Subtitle (32px)', render: () => <TextSubtitle>Subtitle Text</TextSubtitle> };
export const Heading: StoryObj = { name: 'Heading (24px)', render: () => <TextHeading>Heading Text</TextHeading> };
export const Subheading: StoryObj = { name: 'Subheading (20px)', render: () => <TextSubheading>Subheading Text</TextSubheading> };

// ── Full type scale ────────────────────────────────────────────────────────────
export const TypeScale: StoryObj = {
  name: 'Type scale',
  render: () => (
    <div className="flex flex-col gap-[16px]">
      <TextTitleHero>Title Hero 72px/700</TextTitleHero>
      <TextTitlePage>Title Page 48px/700</TextTitlePage>
      <TextSubtitle>Subtitle 32px/400</TextSubtitle>
      <TextHeading>Heading 24px/600</TextHeading>
      <TextSubheading>Subheading 20px/400</TextSubheading>
      <Text>Body text 16px/400 — Regular</Text>
      <TextStrong>Body text 16px/600 — SemiBold</TextStrong>
      <TextEmphasis>Body text 16px/400 — Italic</TextEmphasis>
      <TextSmall>Small text 14px/400</TextSmall>
      <TextLink href="#">Link text 16px/400 underline</TextLink>
      <TextCode>code text 16px/400 mono</TextCode>
    </div>
  ),
};

// ── Text Price ─────────────────────────────────────────────────────────────────
export const PriceLarge: StoryObj = { name: 'Price · large', render: () => <TextPrice amount={50} size="large" /> };
export const PriceSmall: StoryObj = { name: 'Price · small', render: () => <TextPrice amount={50} size="small" /> };
export const PriceBothSizes: StoryObj = {
  name: 'Price · both sizes',
  render: () => (
    <div className="flex items-end gap-[32px]">
      <TextPrice amount={99} size="large" period="/ yr" />
      <TextPrice amount={9} size="small" period="/ mo" />
    </div>
  ),
};

// ── Text List ──────────────────────────────────────────────────────────────────
export const List: StoryObj = {
  name: 'Text list',
  render: () => (
    <TextList
      title="Features"
      items={[
        { text: 'Unlimited projects' },
        { text: 'Priority support' },
        { text: 'Custom domains' },
        { text: 'Analytics dashboard' },
      ]}
    />
  ),
};

export const ListTight: StoryObj = {
  name: 'Text list · tight',
  render: () => (
    <TextList
      title="What's included"
      items={[{ text: 'Free forever plan' }, { text: 'Up to 3 seats' }, { text: 'Basic analytics' }]}
      density="tight"
    />
  ),
};

export const LinkList: StoryObj = {
  name: 'Text link list',
  render: () => (
    <TextList
      title="Resources"
      items={[
        { text: 'Documentation', href: '#' },
        { text: 'Changelog', href: '#' },
        { text: 'GitHub', href: '#' },
      ]}
      linkList
    />
  ),
};
