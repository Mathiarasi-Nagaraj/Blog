/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Write', href: '/create', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const PF = "http://localhost:5000/images/"
export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  

  const handleLogout = () => {
    console.log("logout");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="data:image/png;base64,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"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block w-40 h-12 object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6GdgxfrmIwnvds_kEFSJi3x3zMu_iMe4x7qaaUrk2gWTPMWyB06BvNyb_P_kyf2e9xk&usqp=CAU"               alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          

                {/* Profile dropdown */}
               {user? <div>
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                 <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={PF+user.photo}
                        alt="user photo"
                      />
                      <h1 className='text-white text-xl ml-4'>{user.username}</h1>
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Edit Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/login"
                            onClick={handleLogout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>:<div></div>}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
