import React from 'react';
import { SideNav } from './sidenav';
import { builtByFrancis } from '@/lib/profiles';
import Image from 'next/image';
import ProfilePicture from '@/public/pfp.jpg';
import { FaGithub, FaDiscord, FaXTwitter, FaTelegram } from 'react-icons/fa6';

const Header = () => (
  <div className="flex h-20 flex-row items-stretch justify-between">
    <div className="flex flex-col justify-evenly">
      <h1 className="text-3xl font-bold">{builtByFrancis.name}</h1>
      <p className="text-accent-foreground mt-1 text-lg">{builtByFrancis.title}</p>
    </div>
    <div className="flex aspect-square">
      <Image src={ProfilePicture} alt="Profile Picture" className="h-full rounded-full" priority />
    </div>
  </div>
);

const Description = () => (
  <p className="text-muted-foreground mt-4 text-base">{builtByFrancis.description}</p>
);

const Links = () => {
  const links = [
    {
      name: 'GitHub',
      link: 'https://github.com/BuiltByFrancis',
      icon: <FaGithub className="size-6" />,
    },
    {
      name: 'X/Twitter',
      link: 'https://x.com/BuiltByFrancis',
      icon: <FaXTwitter className="size-6" />,
    },
    {
      name: 'Discord',
      link: 'https://discord.com/users/691287077379375114',
      icon: <FaDiscord className="size-6" />,
    },
    {
      name: 'Telegram',
      link: 'https://t.me/BuiltByFrancis',
      icon: <FaTelegram className="size-6" />,
    },
  ];

  return (
    <ul className="flex flex-row gap-4">
      {links.map(link => (
        <li key={link.name} className="flex flex-row items-center gap-2">
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent-foreground transition-colors hover:cursor-pointer"
            aria-label={`${link.name} (opens in new tab)`}
            title={link.name}
          >
            {link.icon}
          </a>
          <span className="sr-only">{link.name}</span>
        </li>
      ))}
    </ul>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <aside className="flex h-auto w-full shrink-0 flex-col justify-between gap-4 px-10 pt-20 lg:sticky lg:top-0 lg:h-screen lg:w-96 lg:gap-0 lg:pb-20">
      <div className="flex flex-col gap-2">
        <Header />
        <Description />
        <SideNav />
      </div>

      <Links />
    </aside>
  );
};
