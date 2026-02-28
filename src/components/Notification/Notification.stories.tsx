import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta: Meta = { title: 'Components/Notification', tags: ['autodocs'], parameters: { layout: 'centered' } };
export default meta;

export const Message: StoryObj = { render: () => <Notification variant="message" title="Title" body="Body text." actionLabel="Button" onAction={() => {}} onClose={() => {}} /> };
export const MessageNoAction: StoryObj = { name: 'Message · no action', render: () => <Notification variant="message" title="Update available" body="A new version is ready to install." onClose={() => {}} /> };
export const MessageNoClose: StoryObj = { name: 'Message · no close', render: () => <Notification variant="message" title="Title" body="Body text." actionLabel="View" onAction={() => {}} /> };
export const Alert: StoryObj = { render: () => <Notification variant="alert" title="Title" body="Body text." actionLabel="Button" onAction={() => {}} onClose={() => {}} /> };
export const AlertNoAction: StoryObj = { name: 'Alert · no action', render: () => <Notification variant="alert" title="Something went wrong" body="Please try again or contact support." onClose={() => {}} /> };
