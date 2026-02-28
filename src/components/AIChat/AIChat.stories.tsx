import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AIChatBox, AIUserMessage, AIChatResponse, AICodeBlock, AIConversation, AISidebar } from './AIChat';

const meta: Meta = { title: 'Components/AIChat', tags: ['autodocs'], parameters: { layout: 'centered' } };
export default meta;

// ── Chat Box ───────────────────────────────────────────────────────────────────
export const ChatBoxDefault: StoryObj = {
  name: 'Chat box · empty',
  render: () => <AIChatBox />,
};

export const ChatBoxActive: StoryObj = {
  name: 'Chat box · with text',
  render: () => <AIChatBox value="Hey! Write me a React calendar component." />,
};

// ── User Message ───────────────────────────────────────────────────────────────
export const UserMessage: StoryObj = {
  name: 'User message',
  render: () => <AIUserMessage message="Hey Flippy! Write me a script for building an Analog Clock." />,
};

// ── AI Response ────────────────────────────────────────────────────────────────
export const ChatResponse: StoryObj = {
  name: 'AI response',
  render: () => (
    <div className="w-[560px]">
      <AIChatResponse message="Sure. Here is a TypeScript code block for your Analog Clock project. It is built using React, and uses the local time for London, England as standard. Let me know if you would like to make any refinements to the code." />
    </div>
  ),
};

// ── Code Block ─────────────────────────────────────────────────────────────────
const sampleCode = `import React, { useState, useEffect } from 'react';

export default function AnalogClock({
  updateInterval = 1000,
  secondHandColor = 'red',
}) {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime({ h: d.getHours(), m: d.getMinutes(), s: d.getSeconds() });
    };
    update();
    const id = setInterval(update, updateInterval);
    return () => clearInterval(id);
  }, [updateInterval]);

  return <div>{/* clock face here */}</div>;
}`;

export const CodeBlock: StoryObj = {
  name: 'Code block',
  render: () => (
    <div className="w-[800px]">
      <AICodeBlock code={sampleCode} language="TypeScript" />
    </div>
  ),
};

// ── Full Conversation ──────────────────────────────────────────────────────────
export const Conversation: StoryObj = {
  name: 'Full conversation',
  render: () => (
    <div className="w-[800px]">
      <AIConversation
        messages={[
          { role: 'user', content: 'Hey Flippy! Write me a script for building an Analog Clock.' },
          {
            role: 'assistant',
            content: 'Sure. Here is a TypeScript code block for your Analog Clock project. It is built using React, and uses the local time for London, England as standard. Let me know if you would like to make any refinements.',
            codeBlock: sampleCode,
            codeLanguage: 'TypeScript',
          },
          { role: 'user', content: 'Can you add a dark mode to it?' },
          {
            role: 'assistant',
            content: "Of course! I've updated the component to support dark mode using a `darkMode` prop. The clock face and hands will switch colors automatically.",
          },
        ]}
      />
    </div>
  ),
  parameters: { layout: 'padded' },
};

// ── Sidebar ───────────────────────────────────────────────────────────────────
export const Sidebar: StoryObj = {
  name: 'AI sidebar',
  render: () => (
    <AISidebar
      title="Flippy chats"
      userEmail="flippy@figma.com"
      chats={[
        { id: '1', label: 'Analog Clock component', active: true },
        { id: '2', label: 'Dark mode implementation' },
        { id: '3', label: 'Auth flow redesign' },
        { id: '4', label: 'Dashboard layout ideas' },
        { id: '5', label: 'API integration help' },
      ]}
    />
  ),
};

// ── Full Layout ───────────────────────────────────────────────────────────────
export const FullLayout: StoryObj = {
  name: 'Full layout',
  render: () => (
    <div className="flex border border-[var(--border-default-secondary)] rounded-[8px] overflow-hidden h-[800px]">
      <AISidebar
        title="Flippy chats"
        userEmail="flippy@figma.com"
        chats={[
          { id: '1', label: 'Analog Clock component', active: true },
          { id: '2', label: 'Dark mode implementation' },
          { id: '3', label: 'Auth flow redesign' },
        ]}
      />
      <div className="flex-1 flex flex-col p-[24px] gap-[24px] bg-[var(--background-default-default)] overflow-y-auto">
        <div className="flex-1">
          <AIConversation
            messages={[
              { role: 'user', content: 'Hey Flippy! Write me a script for building an Analog Clock.' },
              { role: 'assistant', content: 'Sure. Here is a TypeScript code block for your Analog Clock project.', codeBlock: sampleCode, codeLanguage: 'TypeScript' },
            ]}
          />
        </div>
        <AIChatBox placeholder="Ask a follow-up..." />
      </div>
    </div>
  ),
  parameters: { layout: 'padded' },
};
