'use client';

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Check } from 'lucide-react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Button } from '../Button/Button';
import { Accordion, AccordionItem } from '../Accordion/Accordion';
import { NavigationPillList } from '../Navigation/Navigation';
import {
  TextTitlePage,
  TextSubtitle,
  TextHeading,
  TextSubheading,
  TextPrice,
} from '../Text/Text';

const meta: Meta = {
  title: 'Examples/Pricing',
  parameters: { layout: 'fullscreen' },
};
export default meta;

// ── Pricing card data ────────────────────────────────────────────────────────

const PLANS = {
  monthly: [
    {
      name: 'Free',
      price: 0,
      featured: false,
      features: [
        'Up to 3 projects',
        '1 GB storage',
        'Basic analytics',
        'Email support',
        'Community access',
      ],
      cta: 'Get started',
      variant: 'default' as const,
    },
    {
      name: 'Pro',
      price: 29,
      featured: true,
      features: [
        'Unlimited projects',
        '50 GB storage',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom domains',
        'Team collaboration',
      ],
      cta: 'Get started',
      variant: 'default' as const,
    },
    {
      name: 'Enterprise',
      price: 99,
      featured: false,
      features: [
        'Unlimited everything',
        '500 GB storage',
        'Enterprise analytics',
        'Dedicated support',
        'SLA guarantee',
        'SSO & SAML',
        'Custom integrations',
      ],
      cta: 'Contact sales',
      variant: 'brand' as const,
    },
  ],
  yearly: [
    { price: 0 },
    { price: 23 },
    { price: 79 },
  ],
};

const FAQ_ITEMS = [
  {
    question: 'Can I switch plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any billing differences.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for annual plans. All payments are processed securely.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, every paid plan comes with a 14-day free trial. No credit card required. You\'ll have full access to all features during the trial period.',
  },
  {
    question: 'What happens when I exceed my storage limit?',
    answer: 'We\'ll notify you when you reach 80% of your storage limit. You can upgrade your plan or purchase additional storage at any time.',
  },
  {
    question: 'Do you offer discounts for non-profits or education?',
    answer: 'Yes, we offer a 50% discount for verified non-profit organizations and educational institutions. Contact our team to apply.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel your subscription at any time from your account settings. Your access will remain active until the end of the current billing period.',
  },
];

// ── Pricing card component ───────────────────────────────────────────────────

function PricingCard({
  name,
  price,
  featured,
  features,
  cta,
  variant,
}: {
  name: string;
  price: number;
  featured: boolean;
  features: string[];
  cta: string;
  variant: 'default' | 'brand';
}) {
  if (featured) {
    // Dark card — hardcode #2C2C2C bg + white text to avoid CSS var conflicts
    return (
      <div
        className="flex flex-col gap-[24px] rounded-[16px] p-[32px] flex-1"
        style={{ background: '#2C2C2C' }}
      >
        <div className="flex flex-col gap-[12px]">
          <h3 style={{ fontSize: 24, fontWeight: 600, color: '#F5F5F5', lineHeight: 1.2, fontFamily: 'inherit' }}>
            {name}
          </h3>
          <span className="inline-flex items-end gap-[2px]">
            <span style={{ fontSize: 24, fontWeight: 700, color: '#F5F5F5', lineHeight: 1, paddingBottom: 4 }}>$</span>
            <span style={{ fontSize: 48, fontWeight: 700, color: '#F5F5F5', lineHeight: 1 }}>{price}</span>
            <span style={{ fontSize: 14, fontWeight: 400, color: '#F5F5F5', paddingBottom: 6 }}>/ mo</span>
          </span>
        </div>

        <ul className="flex flex-col gap-[12px] flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-[8px]">
              <Check size={16} strokeWidth={2.5} style={{ color: '#ABABAB', flexShrink: 0 }} />
              <span style={{ fontSize: 16, fontWeight: 400, color: '#ABABAB' }}>{f}</span>
            </li>
          ))}
        </ul>

        <Button variant="default" className="w-full justify-center">
          {cta}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[24px] rounded-[16px] p-[32px] flex-1 bg-[var(--background-default-default)] border border-[var(--border-default-secondary)]">
      <div className="flex flex-col gap-[12px]">
        <TextHeading as="h3">{name}</TextHeading>
        <TextPrice amount={price} />
      </div>

      <ul className="flex flex-col gap-[12px] flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-[8px]">
            <Check className="shrink-0 text-[var(--icon-default-default)]" size={16} strokeWidth={2.5} />
            <span className="text-[16px] font-[400] text-[var(--text-default-secondary)]">{f}</span>
          </li>
        ))}
      </ul>

      <Button variant={variant} className="w-full justify-center">
        {cta}
      </Button>
    </div>
  );
}

// ── Full Pricing page ────────────────────────────────────────────────────────

function PricingPage() {
  const [billingIndex, setBillingIndex] = useState(0);
  const isYearly = billingIndex === 1;

  const plans = PLANS.monthly.map((plan, i) => ({
    ...plan,
    price: isYearly ? PLANS.yearly[i].price : plan.price,
  }));

  return (
    <div className="min-h-screen bg-[var(--background-default-default)]">
      {/* Header */}
      <Header
        navItems={['Product', 'Pricing', 'Docs', 'Blog']}
        defaultActiveNavIndex={1}
      />

      {/* Hero */}
      <section className="bg-[var(--background-default-secondary)] py-[80px] px-[32px]">
        <div className="max-w-[800px] mx-auto text-center flex flex-col gap-[16px]">
          <TextTitlePage>Simple, transparent pricing</TextTitlePage>
          <TextSubtitle className="text-[var(--text-default-secondary)]">
            Choose the plan that works for your team. Upgrade or cancel anytime.
          </TextSubtitle>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-[64px] px-[32px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[40px]">
          {/* Billing toggle */}
          <div className="flex justify-center">
            <NavigationPillList
              items={['Monthly', 'Yearly (save 20%)']}
              defaultActiveIndex={0}
              onSelect={setBillingIndex}
            />
          </div>

          {/* Cards — stack vertically on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row gap-[24px] items-stretch">
            {plans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[64px] px-[32px] bg-[var(--background-default-secondary)]">
        <div className="max-w-[800px] mx-auto flex flex-col gap-[40px]">
          <div className="text-center flex flex-col gap-[8px]">
            <TextHeading as="h2">Frequently asked questions</TextHeading>
            <TextSubheading as="h3" className="text-[var(--text-default-secondary)]">
              Everything you need to know about the product and billing.
            </TextSubheading>
          </div>

          <Accordion>
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.question} title={item.question}>
                {item.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <Footer
        columns={[
          {
            title: 'Product',
            links: [
              { label: 'Features', href: '#' },
              { label: 'Pricing', href: '#' },
              { label: 'Changelog', href: '#' },
              { label: 'Roadmap', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#' },
              { label: 'Blog', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Contact', href: '#' },
            ],
          },
          {
            title: 'Legal',
            links: [
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
              { label: 'Cookie Policy', href: '#' },
            ],
          },
        ]}
      />
    </div>
  );
}

export const Default: StoryObj = {
  render: () => <PricingPage />,
};
