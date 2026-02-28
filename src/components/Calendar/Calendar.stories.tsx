import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Calendar } from './Calendar';

const meta: Meta = { title: 'Components/Calendar', tags: ['autodocs'], parameters: { layout: 'centered' } };
export default meta;

export const Default: StoryObj = {
  render: () => <Calendar />,
};

export const WithSelection: StoryObj = {
  name: 'With default selected date',
  render: () => <Calendar defaultValue={new Date(2025, 5, 15)} />,
};

export const WithMinMax: StoryObj = {
  name: 'With min/max dates',
  render: () => {
    const today = new Date();
    const min = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5);
    const max = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10);
    return <Calendar minDate={min} maxDate={max} />;
  },
};

export const Controlled: StoryObj = {
  name: 'Controlled with display',
  render: () => {
    function ControlledCalendar() {
      const [date, setDate] = useState<Date | undefined>(undefined);
      return (
        <div className="flex flex-col gap-[16px] items-center">
          <Calendar value={date} onChange={setDate} />
          <p className="text-[14px] text-[var(--text-default-secondary)]">
            {date ? `Selected: ${date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}` : 'No date selected'}
          </p>
        </div>
      );
    }
    return <ControlledCalendar />;
  },
};
