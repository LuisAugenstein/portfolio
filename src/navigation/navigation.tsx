import React, { useState } from 'react';
import { Bars3Icon, BookOpenIcon, HomeIcon } from '@heroicons/react/24/outline';
import { Outlet, useNavigate } from 'react-router-dom';
import { Avatar, Button, DarkThemeToggle, Sidebar } from 'flowbite-react';
import { useSidebarOpen } from './use-sidebar-open';
import avatarImg from '../assets/sidebar/avatar.jpg';
import { useScrollHandler } from '../hooks/use-scroll-handler';

const sidebarItemsData = [
  {
    destination: '/#home',
    icon: HomeIcon,
    text: 'Home',
  },
  {
    destination: '/#portfolio',
    icon: BookOpenIcon,
    text: 'Portfolio',
  },
];

function Navigation(): JSX.Element {
  useScrollHandler();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useSidebarOpen();

  return (
    <>
      <Button
        color="success"
        title="Toggle Sidebar"
        className="fixed right-0 z-10 m-5 rounded-full lg:hidden [&>span]:p-2"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <Bars3Icon title="open sidebar" className="w-6" />
      </Button>

      <div
        id="backdrop"
        className={`fixed z-10 h-screen w-screen cursor-pointer bg-black/50 lg:hidden ${
          isSidebarOpen ? '' : 'hidden'
        } `}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <Sidebar
        className={`' [&>div]:bg-primary absolute z-20 h-screen w-[var(--sidebar-width)] transition duration-200 [&>div]:rounded-none ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar.Items className="flex h-full flex-col">
          <Sidebar.ItemGroup>
            <Avatar size="lg" img={avatarImg} rounded={true} />
          </Sidebar.ItemGroup>

          <Sidebar.ItemGroup>
            {sidebarItemsData.map(({ destination, icon, text }, index) => (
              <Sidebar.Item
                className="cursor-pointer [&>svg]:stroke-primary-500/70"
                onClick={() => {
                  navigate(destination, { relative: 'path' });
                  setSidebarOpen(false);
                }}
                icon={icon}
                key={index}
              >
                {text}
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>

          <div className="flex-grow"></div>

          <DarkThemeToggle
            title="toggle darkmode"
            className="flex w-full justify-center [&>svg]:fill-primary-500/70"
          />
        </Sidebar.Items>
      </Sidebar>

      <div className="h-screen overflow-y-auto transition duration-200 lg:w-[calc(100%-var(--sidebar-width))] lg:translate-x-[var(--sidebar-width)]">
        <Outlet />
      </div>
    </>
  );
}

export default Navigation;
