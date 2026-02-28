'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Typography } from '@/components/Typography';
import { colorPrimitives } from '@/tokens/colors';

const colorGroups = [
  { name: 'Brand', key: 'brand' as const },
  { name: 'Red', key: 'red' as const },
  { name: 'Yellow', key: 'yellow' as const },
  { name: 'Green', key: 'green' as const },
  { name: 'Blue', key: 'blue' as const },
  { name: 'Pink', key: 'pink' as const },
  { name: 'Slate', key: 'slate' as const },
  { name: 'Gray', key: 'gray' as const },
];

const scales = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] as const;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-[48px]">
      <Typography variant="heading" size="md" className="mb-[24px]">
        {title}
      </Typography>
      {children}
    </section>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div data-theme={theme} className="min-h-screen bg-[var(--background-default-default)] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-[24px] py-[48px]">

        {/* Header */}
        <div className="flex items-center justify-between mb-[64px]">
          <div>
            <Typography variant="title-page" size="md" className="mb-[8px]">
              Simple Design System
            </Typography>
            <Typography variant="body" size="md" className="text-[var(--text-default-secondary)]">
              347 design tokens · 4 components · Tailwind CSS v4
            </Typography>
          </div>
          <Button variant="brand" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </div>

        {/* Color Palette */}
        <Section title="Color Primitives">
          <div className="flex flex-col gap-[16px]">
            {colorGroups.map(({ name, key }) => (
              <div key={key}>
                <Typography variant="body" size="sm" className="mb-[8px] text-[var(--text-default-secondary)] font-[600]">
                  {name}
                </Typography>
                <div className="flex gap-[4px]">
                  {scales.map((scale) => {
                    const hex = (colorPrimitives[key] as Record<number, string>)[scale];
                    if (!hex) return null;
                    return (
                      <div key={scale} className="flex flex-col items-center gap-[4px] flex-1">
                        <div
                          className="w-full aspect-square rounded-[4px] border border-[var(--border-default-tertiary)]"
                          style={{ backgroundColor: hex }}
                          title={`${name}/${scale}: ${hex}`}
                        />
                        <span className="text-[10px] text-[var(--text-default-tertiary)] hidden sm:block">{scale}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Semantic Colors */}
        <Section title="Semantic Tokens">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[12px]">
            {[
              { label: 'Bg Default', bg: '--background-default-secondary', text: '--text-default-default', border: '--border-default-default' },
              { label: 'Bg Brand', bg: '--background-brand-default', text: '--text-brand-on-brand', border: '--border-brand-default' },
              { label: 'Bg Positive', bg: '--background-positive-default', text: '--text-positive-on-positive', border: '--border-positive-default' },
              { label: 'Bg Warning', bg: '--background-warning-default', text: '--text-warning-on-warning', border: '--border-warning-default' },
              { label: 'Bg Danger', bg: '--background-danger-default', text: '--text-danger-on-danger', border: '--border-danger-default' },
              { label: 'Bg Neutral', bg: '--background-neutral-default', text: '--text-neutral-on-neutral', border: '--border-neutral-default' },
              { label: 'Bg Disabled', bg: '--background-disabled-default', text: '--text-disabled-default', border: '--border-disabled-default' },
              { label: 'Positive Secondary', bg: '--background-positive-secondary', text: '--text-positive-default', border: '--border-positive-secondary' },
            ].map(({ label, bg, text, border }) => (
              <div
                key={label}
                className="flex items-center justify-center h-[56px] rounded-[8px] px-[12px] border"
                style={{
                  backgroundColor: `var(${bg})`,
                  color: `var(${text})`,
                  borderColor: `var(${border})`,
                }}
              >
                <span className="text-[11px] font-[500] text-center">{label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Type Scale */}
        <Section title="Typography">
          <div className="flex flex-col gap-[12px]">
            <Typography variant="title-hero" size="lg">Title Hero — 72px</Typography>
            <Typography variant="title-page" size="md">Title Page — 48px</Typography>
            <Typography variant="heading" size="md">Heading — 24px</Typography>
            <Typography variant="subheading" size="md">Subheading — 20px</Typography>
            <Typography variant="subtitle" size="sm">Subtitle — 24px</Typography>
            <Typography variant="body" size="md">Body — 16px — The quick brown fox jumps over the lazy dog.</Typography>
            <Typography variant="code" size="md">{'code — 16px — const sds = "Simple Design System";'}</Typography>
          </div>
        </Section>

        {/* Spacing */}
        <Section title="Spacing Scale">
          <div className="flex flex-col gap-[8px]">
            {[
              { label: 'Space/050', px: '2px' },
              { label: 'Space/100', px: '4px' },
              { label: 'Space/200', px: '8px' },
              { label: 'Space/300', px: '12px' },
              { label: 'Space/400', px: '16px' },
              { label: 'Space/600', px: '24px' },
              { label: 'Space/800', px: '32px' },
              { label: 'Space/1200', px: '48px' },
              { label: 'Space/1600', px: '64px' },
              { label: 'Space/2400', px: '96px' },
            ].map(({ label, px }) => (
              <div key={label} className="flex items-center gap-[12px]">
                <span className="text-[12px] text-[var(--text-default-tertiary)] w-[100px] shrink-0">{label}</span>
                <div
                  className="h-[16px] bg-[var(--background-brand-default)] rounded-[2px]"
                  style={{ width: px }}
                />
                <span className="text-[12px] text-[var(--text-default-secondary)]">{px}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Buttons */}
        <Section title="Buttons">
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-wrap gap-[8px]">
              <Button variant="default">Default</Button>
              <Button variant="brand">Brand</Button>
              <Button variant="positive">Positive</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="brand" disabled>Disabled</Button>
            </div>
            <div className="flex flex-wrap items-center gap-[8px]">
              <Button variant="brand" size="sm">Small</Button>
              <Button variant="brand" size="md">Medium</Button>
              <Button variant="brand" size="lg">Large</Button>
            </div>
          </div>
        </Section>


        {/* Inputs */}
        <Section title="Inputs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] max-w-[640px]">
            <Input label="Default" placeholder="Enter value…" />
            <Input label="With Hint" placeholder="Enter username" hint="Must be 3–20 characters." />
            <Input label="Error State" placeholder="email@example.com" error="Please enter a valid email." defaultValue="not-valid" />
            <Input label="Disabled" placeholder="Cannot edit" disabled />
          </div>
        </Section>

      </div>
    </div>
  );
}
