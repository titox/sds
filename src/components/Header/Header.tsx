'use client';

import React, { useState } from 'react';

// ── Header ──────────────────────────────────────────────────────────────────────
// Figma specs:
// Desktop: 1200px wide · h=99px · bg=white · pad=32 · HORIZONTAL · CENTER
//   Logo (40×35) | NavigationPillList (fills center) | HeaderAuth (right)
// Mobile default: h=84px · pad=24 · SPACE_BETWEEN · Logo + hamburger
// Mobile open: VERTICAL · pad=32/24 · gap=64 · Logo+close / NavList / AuthButtons
//
// HeaderAuth states:
//   Logged out: "Sign in" (gray) + "Get started" (dark) — each 32px h, cr=8
//   Logged in:  Avatar (40px circle) + chevron · pad=8/12 · hover bg=#F5F5F5

// ── Icons ──────────────────────────────────────────────────────────────────────

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Default logo (SDS wordmark placeholder) ────────────────────────────────────
function DefaultLogo() {
  return (
    <span className="flex items-center justify-center w-[40px] h-[35px] rounded-[6px] bg-[var(--background-brand-default)] text-[var(--text-brand-on-brand)] text-[14px] font-[700] select-none">
      SDS
    </span>
  );
}

// ── NavigationPill (inline) ────────────────────────────────────────────────────
function Pill({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex items-center justify-center px-[8px] h-[32px] rounded-[8px] text-[16px] font-[400] leading-none cursor-pointer transition-colors whitespace-nowrap',
        active
          ? 'bg-[var(--background-default-default-hover)] text-[var(--text-default-default)]'
          : 'text-[var(--text-default-default)] hover:bg-[var(--background-default-default-hover)]',
      ].join(' ')}
    >
      {label}
    </button>
  );
}

// ── HeaderAuth ──────────────────────────────────────────────────────────────────
export interface HeaderAuthProps {
  loggedIn?: boolean;
  avatarSrc?: string;
  avatarInitial?: string;
  onSignIn?: () => void;
  onGetStarted?: () => void;
  onAvatarClick?: () => void;
  fullWidth?: boolean;
}

export function HeaderAuth({
  loggedIn = false,
  avatarSrc,
  avatarInitial = 'U',
  onSignIn,
  onGetStarted,
  onAvatarClick,
  fullWidth = false,
}: HeaderAuthProps) {
  if (loggedIn) {
    return (
      <button
        type="button"
        onClick={onAvatarClick}
        className="flex items-center gap-[8px] px-[12px] py-[8px] rounded-[8px] hover:bg-[var(--background-default-default-hover)] transition-colors cursor-pointer"
      >
        <div className="w-[40px] h-[40px] rounded-full bg-[var(--background-brand-default)] flex items-center justify-center text-[var(--text-brand-on-brand)] text-[14px] font-[600] overflow-hidden shrink-0">
          {avatarSrc ? <img src={avatarSrc} alt="avatar" className="w-full h-full object-cover" /> : avatarInitial}
        </div>
        <ChevronDownIcon />
      </button>
    );
  }

  const btnBase = fullWidth
    ? 'flex-1 h-[32px] rounded-[8px] text-[16px] font-[400] cursor-pointer transition-colors'
    : 'h-[32px] px-[8px] rounded-[8px] text-[16px] font-[400] cursor-pointer transition-colors';

  return (
    <div className={`flex items-center gap-[12px] ${fullWidth ? 'w-full' : ''}`}>
      <button
        type="button"
        onClick={onSignIn}
        className={`${btnBase} bg-[var(--background-default-secondary)] text-[var(--text-default-default)] hover:bg-[var(--background-default-default-hover)]`}
      >
        Sign in
      </button>
      <button
        type="button"
        onClick={onGetStarted}
        className={`${btnBase} bg-[var(--background-brand-default)] text-[var(--text-brand-on-brand)] hover:opacity-90`}
      >
        Get started
      </button>
    </div>
  );
}

// ── Header ─────────────────────────────────────────────────────────────────────

export interface HeaderProps {
  logo?: React.ReactNode;
  navItems?: string[];
  activeNavIndex?: number;
  defaultActiveNavIndex?: number;
  onNavSelect?: (index: number) => void;
  loggedIn?: boolean;
  avatarSrc?: string;
  avatarInitial?: string;
  onSignIn?: () => void;
  onGetStarted?: () => void;
  onAvatarClick?: () => void;
}

export function Header({
  logo,
  navItems = ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Blog', 'Docs', 'FAQ'],
  activeNavIndex,
  defaultActiveNavIndex,
  onNavSelect,
  loggedIn = false,
  avatarSrc,
  avatarInitial = 'U',
  onSignIn,
  onGetStarted,
  onAvatarClick,
}: HeaderProps) {
  const [activeInternal, setActiveInternal] = useState(defaultActiveNavIndex);
  const activeNav = activeNavIndex ?? activeInternal;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (i: number) => {
    setActiveInternal(i);
    onNavSelect?.(i);
    setMobileOpen(false);
  };

  const LogoNode = logo ?? <DefaultLogo />;

  return (
    <header className="w-full bg-[var(--background-default-default)] border-b border-[var(--border-default-secondary)]">
      {/* ── Desktop ── */}
      <div className="hidden md:flex items-center gap-[24px] px-[32px] h-[99px]">
        {/* Logo */}
        <div className="shrink-0">{LogoNode}</div>

        {/* Nav pills (fills center) */}
        <nav className="flex-1 flex items-center gap-[0px]">
          {navItems.map((label, i) => (
            <Pill key={i} label={label} active={activeNav === i} onClick={() => handleNav(i)} />
          ))}
        </nav>

        {/* Auth */}
        <HeaderAuth
          loggedIn={loggedIn}
          avatarSrc={avatarSrc}
          avatarInitial={avatarInitial}
          onSignIn={onSignIn}
          onGetStarted={onGetStarted}
          onAvatarClick={onAvatarClick}
        />
      </div>

      {/* ── Mobile collapsed ── */}
      <div className="flex md:hidden items-center justify-between px-[24px] h-[84px]">
        <div className="flex items-center gap-[16px]">
          {LogoNode}
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[var(--background-default-secondary)] text-[var(--icon-default-default)] cursor-pointer"
        >
          <MenuIcon />
        </button>
      </div>

      {/* ── Mobile open ── */}
      {mobileOpen && (
        <div className="flex md:hidden flex-col gap-[64px] px-[24px] py-[32px] bg-[var(--background-default-default)]">
          {/* Logo + close */}
          <div className="flex items-center justify-between">
            {LogoNode}
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="w-[44px] h-[44px] rounded-full flex items-center justify-center bg-[var(--background-default-secondary)] text-[var(--icon-default-default)] cursor-pointer"
            >
              <XIcon />
            </button>
          </div>

          {/* Nav pills vertical */}
          <nav className="flex flex-col gap-[8px]">
            {navItems.map((label, i) => (
              <Pill key={i} label={label} active={activeNav === i} onClick={() => handleNav(i)} />
            ))}
          </nav>

          {/* Auth */}
          <HeaderAuth
            loggedIn={loggedIn}
            avatarSrc={avatarSrc}
            avatarInitial={avatarInitial}
            onSignIn={onSignIn}
            onGetStarted={onGetStarted}
            onAvatarClick={onAvatarClick}
            fullWidth
          />
        </div>
      )}
    </header>
  );
}
