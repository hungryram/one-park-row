'use client'
import { Dialog, Menu, Transition, Popover } from "@headlessui/react";
import Link from 'next/link'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import Styles from "./navbar.module.css"
import { useRouter } from 'next/navigation';
import {
  Bars3CenterLeftIcon,
  ShoppingCartIcon,
  XMarkIcon,
  ChevronDownIcon
} from "@heroicons/react/24/outline";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  company_name: string
  logo: string;
  navItems: any;
  logoWidth: number;
  phone: string;
  email: string;
  office: string;
  backgroundColor: string;
  enableTopHeader: boolean;
  ctaLink: any;
  mobileLogoWidth: number;
  hideCta: boolean;
}

export default function Navbar({
  company_name,
  logo,
  navItems,
  logoWidth,
  phone,
  ctaLink
}: Props) {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (menuLinks: string) => {
    setSidebarOpen(false);
    router.push(menuLinks);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const ctaLinking =
    (ctaLink?.internalLink?._type === "pages" && `/${ctaLink?.internalLink.slug}`) ||
    (ctaLink?.internalLink?._type === "blog" && `/blog/${ctaLink?.internalLink.slug}`) ||
    (ctaLink?.internalLink?._type === "legal" && `/legal/${ctaLink?.internalLink.slug}`) ||
    (ctaLink?.internalLink?._type === "services" && `/services/${ctaLink?.internalLink.slug}`) ||
    (ctaLink?.internalLink?._type === "team" && `/team/${ctaLink?.internalLink.slug}`) ||
    (ctaLink?.externalUrl && `${ctaLink?.externalUrl}`)

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex flex-row">
            <Transition.Child
              as={Fragment}
              enter="transition duration-500 ease-in-out"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition duration-500 ease-in-out"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col bg-accent pb-4 pt-5">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0 translate-x-4"
                  enterTo="opacity-100 translate-x-0"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-4"
                >
                  <div className="absolute left-0 top-0 -mr-12 pt-2 z-50">
                    {/* <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-black"
                        aria-hidden="true"
                      />
                    </button> */}
                  </div>
                </Transition.Child>
                <nav
                  className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                  aria-label="Navbar"
                >
                  <div className="space-y-1 px-2 mt-20 text-white">
                    {navItems.map((link: any) => {
                      const menuLinks =
                        (link.internalLink?._type === "pages" &&
                          `/${link.internalLink.slug}`) ||
                        (link.internalLink?._type === "blog" &&
                          `/blog/${link.internalLink.slug}`) ||
                        (link.internalLink?._type === "legal" &&
                          `/legal/${link.internalLink.slug}`) ||
                        (link.internalLink?._type === "services" &&
                          `/services/${link.internalLink.slug}`) ||
                        (link.externalUrl && `${link.externalUrl}`);

                      if (link?.subMenu?.length > 0) {
                        return (
                          <Popover className="relative" key={link._key}>
                            {({ open }) => (
                              <>
                                <Popover.Button
                                  className={
                                    "group rounded-md inline-flex items-center outline-none"
                                  }
                                  onClick={() => router.push(menuLinks ?? '/')}
                                >
                                  <span className="group flex items-center rounded-md px-2 py-2 text-lg font-medium leading-6">
                                    {link?.text}
                                  </span>
                                  <ChevronDownIcon
                                    className={`ml-2 h-4 w-4`}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0 translate-y-1"
                                  enterTo="opacity-100 translate-y-0"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100 translate-y-0"
                                  leaveTo="opacity-0 translate-y-1"
                                >
                                  <Popover.Panel>
                                    <div className="overflow-hidden">
                                      <div className="relative grid lg:bg-white px-5 py-3">
                                        {link.subMenu.map((sub: any) => {
                                          const subMenuLinks =
                                            (sub.internalLink?._type ===
                                              "blog" &&
                                              `/blog/${sub.internalLink.slug}`) ||
                                            (sub.internalLink?._type ===
                                              "legal" &&
                                              `/legal/${sub.internalLink.slug}`) ||
                                            (sub.internalLink?._type ===
                                              "pages" &&
                                              `/${sub.internalLink.slug}`) ||
                                            (sub.internalLink?._type ===
                                              "services" &&
                                              `/services/${sub.internalLink.slug}`) ||
                                            (sub.internalLink?._type ===
                                              "locations" &&
                                              `/locations${sub.internalLink.slug}`) ||
                                            (sub.externalUrl &&
                                              `${sub.externalUrl}`);

                                          return (
                                            <Link
                                              key={sub._key}
                                              href={subMenuLinks ?? "/"}
                                              target={sub.newTab && "_blank"}
                                              className="group flex items-center rounded-md px-2 py-2 text-xl font-medium leading-6"
                                              onClick={() => handleLinkClick(subMenuLinks ?? '/')}
                                            >
                                              {sub.text}
                                            </Link>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        );
                      } else {
                        return (
                          <Link
                            key={link.name}
                            href={menuLinks ?? '/'}
                            className="group flex items-center rounded-md px-2 py-4 text-xl font-medium leading-6"
                            onClick={() => {
                              handleLinkClick(); // Close the menu when the link is clicked
                            }}
                          >
                            {link.text}
                          </Link>
                        );
                      }
                    })}
                  </div>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className={`w-full lg:px-4 px-2 sm:px-10 py-6 z-10 duration-500 transition-all ${scroll ? Styles.stickyHeader : '-top-52'}`}>
        <div className="flex py-2">
          <div className="flex flex-1 justify-start lg:mx-auto w-full !z-50">
            <button
              type="button"
              className="focus:outline-none focus:ring-2 focus:ring-inset !z-50 relative"
              onClick={() => setSidebarOpen((prevState) => !prevState)}
            >
              <span className="sr-only">Toggle sidebar</span>
              <div className={`${Styles.hamburger} ${sidebarOpen ? Styles.hamburgerOpen : ''}`}>
                <span></span>
                <span className={Styles.hamburgerMiddle}></span>
                <span></span>
              </div>
            </button>
          </div>
          <div className="flex-1 justify-center text-center mx-auto">
            <Link href="/">
              {logo ? (
                <Image
                  src={logo}
                  width={logoWidth}
                  height={10}
                  alt={company_name}
                  className="text-center mx-auto"
                />
              ) : (
                <h1 className="text-3xl">{company_name}</h1>
              )}
            </Link>
          </div>
          <div className="flex flex-1 justify-end lg:mx-auto w-full items-center">
            <a href={`tel:${phone}`} className="mx-3">{phone}</a>
            <Link href={`/contact`} className={`${Styles.navLinks} primary-button`} target="_blank">CONTACT US</Link>
          </div>
        </div>
      </div>
    </>
  )
}