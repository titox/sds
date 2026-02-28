import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from './Accordion';

const meta: Meta = {
  title: 'Components/Accordion',
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Accordion>
      <AccordionItem title="What is the Simple Design System?">
        A community-built design system with 347 tokens, components, and patterns
        that you can use to build consistent, accessible UIs.
      </AccordionItem>
      <AccordionItem title="How do I install it?">
        Clone the repository and run <code>npm install</code> followed by{' '}
        <code>npm run dev</code> to start the development server.
      </AccordionItem>
      <AccordionItem title="Does it support dark mode?">
        Yes — set <code>data-theme="dark"</code> on any ancestor element and all
        semantic tokens switch automatically via CSS custom properties.
      </AccordionItem>
    </Accordion>
  ),
};

export const OneOpenByDefault: StoryObj = {
  render: () => (
    <Accordion>
      <AccordionItem title="This item starts open" defaultOpen>
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
      <AccordionItem title="This item starts closed">
        Another answer here.
      </AccordionItem>
      <AccordionItem title="And another closed item">
        Yet another answer.
      </AccordionItem>
    </Accordion>
  ),
};

export const ManyItems: StoryObj = {
  render: () => (
    <Accordion>
      {Array.from({ length: 8 }, (_, i) => (
        <AccordionItem key={i} title={`Accordion item ${i + 1}`}>
          Answer the frequently asked question in a simple sentence, a longish
          paragraph, or even in a list.
        </AccordionItem>
      ))}
    </Accordion>
  ),
};
