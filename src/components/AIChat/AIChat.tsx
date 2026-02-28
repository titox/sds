'use client';

import React, { useState } from 'react';

// ── AIChatBox ───────────────────────────────────────────────────────────────────
// Figma: 400×114px · bg=white · cr=16 · pad=16 · VERTICAL gap=24
// State=Default: placeholder gray (#B3B3B3) + send button bg=#D9D9D9 (neutral)
// State=Active:  placeholder/text dark + send button bg=#2C2C2C (brand)

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8l12-6-6 12V8H2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function PaperclipIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M16.5 9.4L9 17a5 5 0 01-7-7l8-8a3 3 0 114.2 4.2L7 13.6a1 1 0 01-1.4-1.4L12 5.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="7" y="2" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10a7 7 0 0014 0M10 17v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function ImageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="9" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 14l4-4 3 3 3-3 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export interface AIChatBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSend?: (value: string) => void;
}

export function AIChatBox({
  placeholder = 'What would you like to know?',
  value,
  onChange,
  onSend,
}: AIChatBoxProps) {
  const [internal, setInternal] = useState('');
  const text = value ?? internal;
  const isActive = text.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternal(e.target.value);
    onChange?.(e.target.value);
  };

  const handleSend = () => {
    if (!text.trim()) return;
    onSend?.(text);
    setInternal('');
    onChange?.('');
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <div className="w-[400px] bg-[var(--background-default-default)] rounded-[16px] p-[16px] border border-[var(--border-default-secondary)] flex flex-col gap-[24px]">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKey}
        placeholder={placeholder}
        className="text-[16px] font-[400] bg-transparent outline-none placeholder:text-[var(--text-default-tertiary)] text-[var(--text-default-default)] w-full"
      />
      <div className="flex items-center justify-between">
        {/* Toolbar icons */}
        <div className="flex items-center gap-[8px] text-[var(--icon-default-secondary)]">
          <button type="button" aria-label="Attach file" className="hover:text-[var(--icon-default-default)] transition-colors cursor-pointer">
            <PaperclipIcon />
          </button>
          <button type="button" aria-label="Voice input" className="hover:text-[var(--icon-default-default)] transition-colors cursor-pointer">
            <MicIcon />
          </button>
          <button type="button" aria-label="Attach image" className="hover:text-[var(--icon-default-default)] transition-colors cursor-pointer">
            <ImageIcon />
          </button>
        </div>
        {/* Send button */}
        <button
          type="button"
          onClick={handleSend}
          aria-label="Send message"
          className={[
            'w-[36px] h-[36px] rounded-full flex items-center justify-center transition-colors cursor-pointer',
            isActive
              ? 'bg-[var(--background-brand-default)] text-[var(--text-brand-on-brand)]'
              : 'bg-[var(--background-default-secondary)] text-[var(--icon-default-secondary)]',
          ].join(' ')}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

// ── AIUserMessage ───────────────────────────────────────────────────────────────
// Figma: 480×34px · cr=8 · bg=--background-default-secondary · pad=6/8
// Text: 16px/400

export interface AIUserMessageProps {
  message: string;
}

export function AIUserMessage({ message }: AIUserMessageProps) {
  return (
    <div className="inline-flex max-w-[480px] bg-[var(--background-default-secondary)] rounded-[8px] px-[8px] py-[6px]">
      <p className="text-[16px] font-[400] text-[var(--text-default-default)]">{message}</p>
    </div>
  );
}

// ── AIChatResponse ──────────────────────────────────────────────────────────────
// Figma: max 560px · cr=8 · HORIZONTAL gap=8
// AI icon (20×20) + text (16px/400)

function AILogoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M10 2a8 8 0 100 16A8 8 0 0010 2Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export interface AIChatResponseProps {
  message: string;
}

export function AIChatResponse({ message }: AIChatResponseProps) {
  return (
    <div className="flex flex-row items-start gap-[8px] max-w-[560px]">
      <span className="text-[var(--icon-default-default)] mt-[2px]">
        <AILogoIcon />
      </span>
      <p className="text-[16px] font-[400] text-[var(--text-default-default)] leading-relaxed">{message}</p>
    </div>
  );
}

// ── AICodeBlock ─────────────────────────────────────────────────────────────────
// Figma: cr=16 · HORIZONTAL
// Line numbers: 48px wide · bg=white · text=--text-default-tertiary 16px/400
// Code area: remaining width · bg=--background-default-secondary · text 16px/400

export interface AICodeBlockProps {
  code: string;
  language?: string;
}

export function AICodeBlock({ code, language }: AICodeBlockProps) {
  const lines = code.split('\n');

  return (
    <div className="w-full rounded-[16px] overflow-hidden border border-[var(--border-default-secondary)] flex flex-row">
      {/* Line numbers */}
      <div className="w-[48px] shrink-0 bg-[var(--background-default-default)] px-[8px] py-[16px] flex flex-col text-right select-none">
        {lines.map((_, i) => (
          <span key={i} className="text-[16px] font-[400] leading-relaxed text-[var(--text-default-tertiary)]">
            {i + 1}
          </span>
        ))}
      </div>
      {/* Code */}
      <div className="flex-1 bg-[var(--background-default-secondary)] px-[8px] py-[16px] overflow-x-auto">
        {language && (
          <div className="text-[12px] font-[400] text-[var(--text-default-secondary)] mb-[8px]">{language}</div>
        )}
        <pre className="text-[16px] font-[400] leading-relaxed text-[var(--text-default-default)] font-mono whitespace-pre">
          {code}
        </pre>
      </div>
    </div>
  );
}

// ── AIConversation ──────────────────────────────────────────────────────────────
// A composed conversation view: alternating user messages and AI responses

export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  codeBlock?: string;
  codeLanguage?: string;
}

export interface AIConversationProps {
  messages: AIMessage[];
}

export function AIConversation({ messages }: AIConversationProps) {
  return (
    <div className="flex flex-col gap-[24px] w-full">
      {messages.map((msg, i) => (
        <div key={i} className="flex flex-col gap-[16px]">
          {msg.role === 'user' ? (
            <AIUserMessage message={msg.content} />
          ) : (
            <>
              <AIChatResponse message={msg.content} />
              {msg.codeBlock && (
                <AICodeBlock code={msg.codeBlock} language={msg.codeLanguage} />
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

// ── AISidebar ───────────────────────────────────────────────────────────────────
// Figma: 320×800px · bg=--background-default-secondary · pad=16 · VERTICAL SPACE_BETWEEN
// Header: title 16px/600 + icon buttons
// Search: pill, h=40, bg=white
// Chat list (simplified)
// Footer: avatar + email

export interface AISidebarChat {
  id: string;
  label: string;
  active?: boolean;
}

export interface AISidebarProps {
  title?: string;
  chats?: AISidebarChat[];
  userEmail?: string;
  onNewChat?: () => void;
  onSelectChat?: (id: string) => void;
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function AISidebar({
  title = 'AI Chats',
  chats = [],
  userEmail = 'user@example.com',
  onNewChat,
  onSelectChat,
}: AISidebarProps) {
  const [search, setSearch] = useState('');

  const filtered = chats.filter(c =>
    c.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="w-[320px] h-[800px] bg-[var(--background-default-secondary)] p-[16px] flex flex-col justify-between overflow-hidden"
    >
      {/* Top block */}
      <div className="flex flex-col gap-[16px]">
        {/* Header row */}
        <div className="flex items-center gap-[16px] h-[24px]">
          <span className="text-[16px] font-[600] text-[var(--text-default-default)] flex-1 truncate">
            {title}
          </span>
          <button
            type="button"
            onClick={onNewChat}
            aria-label="New chat"
            className="w-[24px] h-[24px] flex items-center justify-center text-[var(--icon-default-secondary)] hover:text-[var(--icon-default-default)] transition-colors cursor-pointer"
          >
            <PlusIcon />
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-[8px] h-[40px] bg-[var(--background-default-default)] rounded-full px-[16px] border border-[var(--border-default-secondary)]">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search"
            className="flex-1 text-[16px] font-[400] bg-transparent outline-none placeholder:text-[var(--text-default-tertiary)] text-[var(--text-default-default)]"
          />
          <span className="text-[var(--icon-default-secondary)]"><SearchIcon /></span>
        </div>

        {/* Chat list */}
        {filtered.length > 0 && (
          <div className="flex flex-col gap-[4px] mt-[4px]">
            {filtered.map(chat => (
              <button
                key={chat.id}
                type="button"
                onClick={() => onSelectChat?.(chat.id)}
                className={[
                  'w-full text-left px-[8px] py-[6px] rounded-[8px] text-[14px] font-[400] truncate transition-colors cursor-pointer',
                  chat.active
                    ? 'bg-[var(--background-default-default)] text-[var(--text-default-default)]'
                    : 'text-[var(--text-default-secondary)] hover:bg-[var(--background-default-default-hover)]',
                ].join(' ')}
              >
                {chat.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Bottom: user row */}
      <div className="flex items-center gap-[16px] h-[24px]">
        <div className="w-[24px] h-[24px] rounded-full bg-[var(--background-brand-default)] flex items-center justify-center text-[var(--text-brand-on-brand)] text-[10px] font-[600] shrink-0">
          {userEmail.charAt(0).toUpperCase()}
        </div>
        <span className="text-[16px] font-[400] text-[var(--text-default-default)] truncate">{userEmail}</span>
      </div>
    </div>
  );
}
