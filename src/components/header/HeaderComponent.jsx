import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import { NavLink,Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../assets/App.css'
const items = [
  { name: 'Home', href: '/' },
  { name: 'Rent a Bike', href: '/Rental' },
  { name: 'Repair', href: '/Repair' }
];

export default function Header() {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col max-w-screen-2xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <Link to="/" className="mt-8 text-3xl font-semibold tracking-widest text-white uppercase font-quicksand rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
              <FontAwesomeIcon icon={faBicycle} />
              Rideology
            </Link>
            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
              {/* Your button content */}
            </button>
          </div>
          <nav className="mt-7 flex-col flex-grow gap-20 pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
            {items.map((item) => (
              <ul key={item.name}>
                <li>
                  <NavLink to={item.href} className="cursor-pointer py-2 text-lg text-white font-semibold font-quicksand transition-all delay-100 ease-in-out" aria-label={`Navigate to ${item.name}`}>
                    {item.name}
                  </NavLink>
                </li>
              </ul>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
