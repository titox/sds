import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const meta: Meta = {
  title: 'Foundation/Icons',
  parameters: { layout: 'padded' },
};
export default meta;

// ── All 287 SDS icons mapped from Figma names → lucide-react component names ──
// Figma name → Lucide export name
const ICON_MAP: Record<string, string> = {
  'Activity': 'Activity', 'Airplay': 'Airplay',
  'Alert circle': 'AlertCircle', 'Alert octagon': 'AlertOctagon', 'Alert triangle': 'AlertTriangle',
  'Align center': 'AlignCenter', 'Align justify': 'AlignJustify', 'Align left': 'AlignLeft', 'Align right': 'AlignRight',
  'Anchor': 'Anchor', 'Aperture': 'Aperture', 'Archive': 'Archive',
  'Arrow down-circle': 'ArrowDownCircle', 'Arrow down-left': 'ArrowDownLeft', 'Arrow down-right': 'ArrowDownRight', 'Arrow down': 'ArrowDown',
  'Arrow left-circle': 'ArrowLeftCircle', 'Arrow left': 'ArrowLeft',
  'Arrow right-circle': 'ArrowRightCircle', 'Arrow right': 'ArrowRight',
  'Arrow up-circle': 'ArrowUpCircle', 'Arrow up-left': 'ArrowUpLeft', 'Arrow up-right': 'ArrowUpRight', 'Arrow up': 'ArrowUp',
  'At sign': 'AtSign', 'Award': 'Award',
  'Bar chart-2': 'BarChart2', 'Bar chart': 'BarChart',
  'Battery charging': 'BatteryCharging', 'Battery': 'Battery',
  'Bell off': 'BellOff', 'Bell': 'Bell', 'Bluetooth': 'Bluetooth', 'Bold': 'Bold',
  'Book open': 'BookOpen', 'Book': 'Book', 'Bookmark': 'Bookmark', 'Box': 'Box', 'Briefcase': 'Briefcase',
  'Calendar': 'Calendar', 'Camera off': 'CameraOff', 'Camera': 'Camera', 'Cast': 'Cast',
  'Check circle': 'CheckCircle', 'Check square': 'CheckSquare', 'Check': 'Check',
  'Chevron down': 'ChevronDown', 'Chevron left': 'ChevronLeft', 'Chevron right': 'ChevronRight', 'Chevron up': 'ChevronUp',
  'Chevrons down': 'ChevronsDown', 'Chevrons left': 'ChevronsLeft', 'Chevrons right': 'ChevronsRight', 'Chevrons up': 'ChevronsUp',
  'Chrome': 'Chrome', 'Circle': 'Circle', 'Clipboard': 'Clipboard', 'Clock': 'Clock',
  'Cloud drizzle': 'CloudDrizzle', 'Cloud lightning': 'CloudLightning', 'Cloud off': 'CloudOff',
  'Cloud rain': 'CloudRain', 'Cloud snow': 'CloudSnow', 'Cloud': 'Cloud',
  'Code': 'Code', 'Codepen': 'Codepen', 'Codesandbox': 'Codesandbox', 'Coffee': 'Coffee',
  'Columns': 'Columns', 'Command': 'Command', 'Compass': 'Compass', 'Copy': 'Copy',
  'Corner down-left': 'CornerDownLeft', 'Corner down-right': 'CornerDownRight',
  'Corner left-down': 'CornerLeftDown', 'Corner left-up': 'CornerLeftUp',
  'Corner right-down': 'CornerRightDown', 'Corner right-up': 'CornerRightUp',
  'Corner up-left': 'CornerUpLeft', 'Corner up-right': 'CornerUpRight',
  'Cpu': 'Cpu', 'Credit card': 'CreditCard', 'Crop': 'Crop', 'Crosshair': 'Crosshair',
  'Database': 'Database', 'Delete': 'Delete', 'Disc': 'Disc',
  'Divide circle': 'DivideCircle', 'Divide square': 'DivideSquare', 'Divide': 'Divide',
  'Dollar sign': 'DollarSign', 'Download cloud': 'DownloadCloud', 'Download': 'Download',
  'Dribbble': 'Dribbble', 'Droplet': 'Droplet',
  'Edit 2': 'Edit2', 'Edit 3': 'Edit3', 'Edit': 'Edit', 'External link': 'ExternalLink',
  'Eye off': 'EyeOff', 'Eye': 'Eye',
  'Facebook': 'Facebook', 'Fast forward': 'FastForward', 'Feather': 'Feather', 'Figma': 'Figma',
  'File minus': 'FileMinus', 'File plus': 'FilePlus', 'File text': 'FileText', 'File': 'File',
  'Film': 'Film', 'Filter': 'Filter', 'Flag': 'Flag',
  'Folder minus': 'FolderMinus', 'Folder plus': 'FolderPlus', 'Folder': 'Folder',
  'Framer': 'Framer', 'Frown': 'Frown',
  'Gift': 'Gift',
  'Git branch': 'GitBranch', 'Git commit': 'GitCommit', 'Git merge': 'GitMerge', 'Git pull-request': 'GitPullRequest',
  'Github': 'Github', 'Gitlab': 'Gitlab', 'Globe': 'Globe', 'Grid': 'Grid',
  'Hard drive': 'HardDrive', 'Hash': 'Hash', 'Headphones': 'Headphones',
  'Heart': 'Heart', 'Help circle': 'HelpCircle', 'Hexagon': 'Hexagon', 'Home': 'Home',
  'Image': 'Image', 'Inbox': 'Inbox', 'Info': 'Info', 'Instagram': 'Instagram', 'Italic': 'Italic',
  'Key': 'Key', 'Layers': 'Layers', 'Layout': 'Layout', 'Life buoy': 'LifeBuoy',
  'Link 2': 'Link2', 'Link': 'Link', 'Linkedin': 'Linkedin', 'List': 'List',
  'Loader': 'Loader', 'Lock': 'Lock', 'Log in': 'LogIn', 'Log out': 'LogOut',
  'Mail': 'Mail', 'Map pin': 'MapPin', 'Map': 'Map',
  'Maximize 2': 'Maximize2', 'Maximize': 'Maximize', 'Meh': 'Meh', 'Menu': 'Menu',
  'Message circle': 'MessageCircle', 'Message square': 'MessageSquare',
  'Mic off': 'MicOff', 'Mic': 'Mic', 'Minimize 2': 'Minimize2', 'Minimize': 'Minimize',
  'Minus circle': 'MinusCircle', 'Minus square': 'MinusSquare', 'Minus': 'Minus',
  'Monitor': 'Monitor', 'Moon': 'Moon',
  'More horizontal': 'MoreHorizontal', 'More vertical': 'MoreVertical',
  'Mouse pointer': 'MousePointer', 'Move': 'Move', 'Music': 'Music',
  'Navigation 2': 'Navigation2', 'Navigation': 'Navigation', 'Octagon': 'Octagon',
  'Package': 'Package', 'Paperclip': 'Paperclip',
  'Pause circle': 'PauseCircle', 'Pause': 'Pause', 'Pen tool': 'PenTool', 'Percent': 'Percent',
  'Phone call': 'PhoneCall', 'Phone forwarded': 'PhoneForwarded', 'Phone incoming': 'PhoneIncoming',
  'Phone missed': 'PhoneMissed', 'Phone off': 'PhoneOff', 'Phone outgoing': 'PhoneOutgoing', 'Phone': 'Phone',
  'Pie chart': 'PieChart', 'Play circle': 'PlayCircle', 'Play': 'Play',
  'Plus circle': 'PlusCircle', 'Plus square': 'PlusSquare', 'Plus': 'Plus',
  'Pocket': 'Pocket', 'Power': 'Power', 'Printer': 'Printer',
  'Radio': 'Radio', 'Refresh ccw': 'RefreshCcw', 'Refresh cw': 'RefreshCw',
  'Repeat': 'Repeat', 'Rewind': 'Rewind', 'Rotate ccw': 'RotateCcw', 'Rotate cw': 'RotateCw', 'Rss': 'Rss',
  'Save': 'Save', 'Scissors': 'Scissors', 'Search': 'Search', 'Send': 'Send',
  'Server': 'Server', 'Settings': 'Settings',
  'Share 2': 'Share2', 'Share': 'Share', 'Shield off': 'ShieldOff', 'Shield': 'Shield',
  'Shopping bag': 'ShoppingBag', 'Shopping cart': 'ShoppingCart',
  'Shuffle': 'Shuffle', 'Sidebar': 'Sidebar',
  'Skip back': 'SkipBack', 'Skip forward': 'SkipForward',
  'Slack': 'Slack', 'Slash': 'Slash', 'Sliders': 'Sliders', 'Smartphone': 'Smartphone',
  'Smile': 'Smile', 'Speaker': 'Speaker', 'Square': 'Square', 'Star': 'Star',
  'Stop circle': 'StopCircle', 'Sun': 'Sun', 'Sunrise': 'Sunrise', 'Sunset': 'Sunset',
  'Table': 'Table', 'Tablet': 'Tablet', 'Tag': 'Tag', 'Target': 'Target',
  'Terminal': 'Terminal', 'Thermometer': 'Thermometer',
  'Thumbs down': 'ThumbsDown', 'Thumbs up': 'ThumbsUp',
  'Toggle left': 'ToggleLeft', 'Toggle right': 'ToggleRight',
  'Trash 2': 'Trash2', 'Trash': 'Trash', 'Trello': 'Trello',
  'Trending down': 'TrendingDown', 'Trending up': 'TrendingUp',
  'Triangle': 'Triangle', 'Truck': 'Truck', 'Tv': 'Tv',
  'Twitch': 'Twitch', 'Twitter': 'Twitter', 'Type': 'Type',
  'Umbrella': 'Umbrella', 'Underline': 'Underline', 'Unlock': 'Unlock',
  'Upload cloud': 'UploadCloud', 'Upload': 'Upload',
  'User check': 'UserCheck', 'User minus': 'UserMinus', 'User plus': 'UserPlus',
  'User x': 'UserX', 'User': 'User', 'Users': 'Users',
  'Video off': 'VideoOff', 'Video': 'Video', 'Voicemail': 'Voicemail',
  'Volume 1': 'Volume1', 'Volume 2': 'Volume2', 'Volume x': 'VolumeX', 'Volume': 'Volume',
  'Watch': 'Watch', 'Wifi off': 'WifiOff', 'Wifi': 'Wifi', 'Wind': 'Wind',
  'X circle': 'XCircle', 'X octagon': 'XOctagon', 'X square': 'XSquare', 'X': 'X',
  'Youtube': 'Youtube', 'Zap off': 'ZapOff', 'Zap': 'Zap', 'Zoom in': 'ZoomIn', 'Zoom out': 'ZoomOut',
};

const SIZES = [16, 20, 24, 32, 40, 48] as const;
type IconSize = typeof SIZES[number];

// Resolve lucide component by export name
function getIcon(exportName: string): LucideIcon | null {
  return (LucideIcons as unknown as Record<string, LucideIcon>)[exportName] ?? null;
}

// ── Icon Gallery ───────────────────────────────────────────────────────────────
function IconGallery({ size }: { size: IconSize }) {
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const filteredEntries = Object.entries(ICON_MAP).filter(([figmaName]) =>
    figmaName.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (exportName: string) => {
    navigator.clipboard?.writeText(`<${exportName} size={${size}} />`);
    setCopied(exportName);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Search */}
      <div className="flex items-center gap-[12px]">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search icons…"
          className="h-[40px] px-[12px] rounded-[8px] border border-[var(--border-default-secondary)] bg-[var(--background-default-default)] text-[16px] text-[var(--text-default-default)] outline-none w-[280px] placeholder:text-[var(--text-default-tertiary)]"
        />
        <span className="text-[14px] text-[var(--text-default-secondary)]">
          {filteredEntries.length} of {Object.keys(ICON_MAP).length} icons · {size}px
        </span>
      </div>

      {/* Grid */}
      <div className="grid gap-[8px]" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}>
        {filteredEntries.map(([figmaName, exportName]) => {
          const IconComponent = getIcon(exportName);
          if (!IconComponent) return null;
          const isCopied = copied === exportName;

          return (
            <button
              key={exportName}
              type="button"
              onClick={() => handleCopy(exportName)}
              title={`Click to copy <${exportName} />`}
              className="flex flex-col items-center gap-[8px] p-[12px] rounded-[8px] border border-transparent hover:border-[var(--border-default-secondary)] hover:bg-[var(--background-default-secondary)] transition-colors cursor-pointer group"
            >
              <span className={`text-[var(--icon-default-default)] ${isCopied ? 'text-green-600' : ''}`}>
                {isCopied
                  ? <span className="text-[12px] font-[600] text-green-600">Copied!</span>
                  : <IconComponent size={size} strokeWidth={1.5} />
                }
              </span>
              <span className="text-[11px] font-[400] text-[var(--text-default-secondary)] text-center leading-tight break-words w-full">
                {figmaName}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── Stories ────────────────────────────────────────────────────────────────────

export const Gallery24px: StoryObj = {
  name: 'Gallery · 24px',
  render: () => <IconGallery size={24} />,
};

export const Gallery16px: StoryObj = {
  name: 'Gallery · 16px',
  render: () => <IconGallery size={16} />,
};

export const Gallery32px: StoryObj = {
  name: 'Gallery · 32px',
  render: () => <IconGallery size={32} />,
};

export const Gallery48px: StoryObj = {
  name: 'Gallery · 48px',
  render: () => <IconGallery size={48} />,
};

// ── Size comparison ────────────────────────────────────────────────────────────
export const SizeComparison: StoryObj = {
  name: 'Size comparison',
  render: () => {
    const icons = ['Star', 'Heart', 'Settings', 'User', 'Search', 'Bell'] as const;
    return (
      <div className="flex flex-col gap-[32px]">
        {icons.map(name => {
          const IconComponent = getIcon(name);
          if (!IconComponent) return null;
          return (
            <div key={name} className="flex items-end gap-[24px]">
              <span className="w-[80px] text-[14px] text-[var(--text-default-secondary)]">{name}</span>
              {SIZES.map(size => (
                <div key={size} className="flex flex-col items-center gap-[4px]">
                  <IconComponent size={size} strokeWidth={1.5} className="text-[var(--icon-default-default)]" />
                  <span className="text-[10px] text-[var(--text-default-tertiary)]">{size}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    );
  },
};

// ── Usage example ──────────────────────────────────────────────────────────────
export const UsageExample: StoryObj = {
  name: 'Usage example',
  render: () => (
    <div className="flex flex-col gap-[24px]">
      <p className="text-[14px] text-[var(--text-default-secondary)]">
        Import directly from <code className="bg-[var(--background-default-secondary)] px-[4px] rounded font-mono">lucide-react</code> or from the Icons barrel:
      </p>
      <pre className="bg-[var(--background-default-secondary)] rounded-[8px] p-[16px] text-[14px] font-mono text-[var(--text-default-default)] overflow-x-auto">{`// Named imports from lucide-react
import { Star, Heart, Settings } from 'lucide-react';

// Or via SDS Icons barrel
import { Star, Heart, Settings } from '@/components/Icons';

// Usage
<Star size={24} strokeWidth={1.5} />
<Heart size={16} />
<Settings size={32} className="text-[var(--icon-default-default)]" />`}
      </pre>
      <div className="flex items-center gap-[16px]">
        {['Star', 'Heart', 'Settings', 'Bell', 'User', 'Search', 'Home', 'Mail'].map(name => {
          const IconComponent = getIcon(name);
          return IconComponent ? (
            <IconComponent key={name} size={24} strokeWidth={1.5} className="text-[var(--icon-default-default)]" />
          ) : null;
        })}
      </div>
    </div>
  ),
};
