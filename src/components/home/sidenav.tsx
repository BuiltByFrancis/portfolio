'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@radix-ui/react-select';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export function SideNav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sectionEls = sections.map(({ id }) => document.getElementById(id));

    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      let currentId: string | null = null;

      for (const el of sectionEls) {
        if (!el) continue;

        if (el.offsetTop <= scrollPos) {
          currentId = el.id;
        } else {
          break;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="mt-10 hidden flex-col gap-4 lg:flex">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => scrollTo(id)}
          className={cn(
            'group hover:text-accent-foreground flex cursor-pointer flex-row items-center gap-4 p-0 text-sm font-semibold uppercase transition-all',
            id === activeId ? 'text-accent-foreground' : 'text-muted-foreground'
          )}
        >
          <Separator
            className={cn(
              'group-hover:bg-accent-foreground h-[1px] transition-[width] duration-300 ease-in-out group-hover:w-16',
              activeId === id ? 'bg-accent-foreground w-16' : 'bg-muted-foreground w-8'
            )}
          />
          {label}
        </button>
      ))}
    </nav>
  );
}
