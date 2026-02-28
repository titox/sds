import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Header, HeaderAuth } from './Header';

const meta: Meta = { title: 'Components/Header', tags: ['autodocs'], parameters: { layout: 'fullscreen' } };
export default meta;

const navItems = ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Blog', 'Docs'];

export const Default: StoryObj = { render: () => <Header navItems={navItems} defaultActiveNavIndex={0} /> };
export const LoggedIn: StoryObj = { name: 'Logged in', render: () => <Header navItems={navItems} defaultActiveNavIndex={0} loggedIn avatarInitial="F" /> };

export const AuthLoggedOut: StoryObj = { name: 'Auth · logged out', render: () => <div className="p-8"><HeaderAuth /></div> };
export const AuthLoggedIn: StoryObj = { name: 'Auth · logged in', render: () => <div className="p-8"><HeaderAuth loggedIn avatarInitial="J" /></div> };
