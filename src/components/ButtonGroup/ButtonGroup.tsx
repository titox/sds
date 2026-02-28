import React from 'react';

export type ButtonGroupAlign = 'start' | 'end' | 'center' | 'justify' | 'stack';

export interface ButtonGroupProps {
  align?: ButtonGroupAlign;
  children: React.ReactNode;
  className?: string;
}

const alignStyles: Record<ButtonGroupAlign, string> = {
  start: 'flex flex-row gap-[16px] justify-start',
  end: 'flex flex-row gap-[16px] justify-end',
  center: 'flex flex-row gap-[16px] justify-center',
  justify: 'flex flex-row gap-[16px]',
  stack: 'flex flex-col gap-[16px]',
};

export function ButtonGroup({ align = 'start', children, className = '' }: ButtonGroupProps) {
  const classes = [alignStyles[align], className].filter(Boolean).join(' ');

  const isJustify = align === 'justify';
  const isStack = align === 'stack';

  return (
    <div className={classes}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        if (isJustify || isStack) {
          return React.cloneElement(child as React.ReactElement<{ className?: string }>, {
            className: [
              (child.props as { className?: string }).className ?? '',
              isJustify ? 'flex-1' : 'w-full',
            ]
              .filter(Boolean)
              .join(' '),
          });
        }
        return child;
      })}
    </div>
  );
}
