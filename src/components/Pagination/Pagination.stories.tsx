import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta = { title: 'Components/Pagination', tags: ['autodocs'], parameters: { layout: 'centered' } };
export default meta;

function PaginationDemo({ total, initial = 1 }: { total: number; initial?: number }) {
  const [page, setPage] = useState(initial);
  return <Pagination total={total} current={page} onChange={setPage} />;
}

export const Default: StoryObj = { render: () => <PaginationDemo total={10} initial={5} /> };
export const FirstPage: StoryObj = { name: 'First page', render: () => <PaginationDemo total={10} initial={1} /> };
export const LastPage: StoryObj = { name: 'Last page', render: () => <PaginationDemo total={10} initial={10} /> };
export const FewPages: StoryObj = { name: 'Few pages (≤7)', render: () => <PaginationDemo total={5} initial={3} /> };
export const ManyPages: StoryObj = { name: 'Many pages', render: () => <PaginationDemo total={50} initial={25} /> };
