'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { useIsClient } from '@uidotdev/usehooks';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        className,
        'border-accent rounded-full border-2 p-2 transition-all hover:cursor-pointer motion-reduce:transition-none'
      )}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  );
};
