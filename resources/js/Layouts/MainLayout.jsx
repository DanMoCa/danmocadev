import {Fragment, useRef} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Head, Link, usePage} from "@inertiajs/react";
import DarkmodeToggle from "@/Components/DarkmodeToggle.jsx";

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: route('home'), current: 'home' },
    { name: 'Sobre mi', href: route('about'), current: 'about' },
    { name: 'Proyectos', href: route('projects'), current: 'projects' },
    { name: 'Blog', href: route('blog'), current: 'blog' },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MainLayout({children, pageName, title = ""}) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen bg-white dark:bg-gray-900 ease-in duration-300">
                <div className="bg-indigo-700 dark:bg-gray-900 pb-32 ease-in duration-300">
                    <Disclosure as="nav" className="bg-indigo-900 dark:bg-gray-800">
                        {({ open }) => (
                            <>
                                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                                        <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <DarkmodeToggle/>
                                                </div>
                                                <div className="hidden md:block">
                                                    <div className="ml-10 flex items-baseline space-x-4">
                                                        {navigation.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                className={classNames(
                                                                    route().current(item.current)
                                                                        ? 'bg-gray-900 text-white'
                                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                                )}
                                                                aria-current={route().current(item.current) ? 'page' : undefined}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                usePage().props.auth.user &&
                                            <div className="hidden md:block">
                                                <div className="ml-4 flex items-center md:ml-6">
                                                    {/*<button*/}
                                                    {/*    type="button"*/}
                                                    {/*    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"*/}
                                                    {/*>*/}
                                                    {/*    <span className="sr-only">View notifications</span>*/}
                                                    {/*    <BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                                                    {/*</button>*/}

                                                    {/* Profile dropdown */}
                                                    <Menu as="div" className="relative ml-3">
                                                        <div>
                                                            <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                                <span className="sr-only">Open user menu</span>
                                                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                {userNavigation.map((item) => (
                                                                    <Menu.Item key={item.name}>
                                                                        {({ active }) => (
                                                                            <Link
                                                                                href={item.href}
                                                                                className={classNames(
                                                                                    active ? 'bg-gray-100' : '',
                                                                                    'block px-4 py-2 text-sm text-gray-700'
                                                                                )}
                                                                            >
                                                                                {item.name}
                                                                            </Link>
                                                                        )}
                                                                    </Menu.Item>
                                                                ))}
                                                            </Menu.Items>
                                                        </Transition>
                                                    </Menu>
                                                </div>
                                            </div>
                                            }
                                            <div className="-mr-2 flex md:hidden">
                                                {/* Mobile menu button */}
                                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="sr-only">Open main menu</span>
                                                    {open ? (
                                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </Disclosure.Button>
                                            </div>
                                        </div>

                                </div>

                                <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                                    <div className="space-y-1 px-2 py-3 sm:px-3">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className={classNames(
                                                    route().current(item.current) ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                                                    'block rounded-md px-3 py-2 text-base font-medium'
                                                )}
                                                aria-current={route().current(item.current) ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    {
                                        usePage().props.auth.user &&
                                        <div className="border-t border-gray-700 pb-3 pt-4">
                                            <div className="flex items-center px-5">
                                                <div className="flex-shrink-0">
                                                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                                    <div className="text-sm font-medium leading-none text-white">{user.email}</div>
                                                </div>
                                                {/*<button*/}
                                                {/*    type="button"*/}
                                                {/*    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"*/}
                                                {/*>*/}
                                                {/*    <span className="sr-only">View notifications</span>*/}
                                                {/*    <BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                                                {/*</button>*/}
                                            </div>
                                            <div className="mt-3 space-y-1 px-2">
                                                {userNavigation.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    }
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <header className="py-10">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
                            { route().current('home') &&
                                <img
                                    className="h-32 rounded-full mr-4 w-auto"
                                    src="https://pbs.twimg.com/profile_images/1570282197478739969/eKYIX6qh_400x400.jpg"
                                    alt=""
                                />
                            }
                            <h1 className="text-3xl font-bold tracking-tight text-white">{pageName}</h1>
                        </div>
                    </header>
                </div>

                <main className="-mt-32">
                    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}
