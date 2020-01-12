import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-gray-800">
        <div className="page-img justify-center flex text-center">
          <span className="text-4xl pt-20 pb-8">BRF Sandbacken Malmö</span>
        </div>
        <div className="px-12 md:px-24">
          <div className="">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6">
                <section className="">
                  <ul className="">
                    <li className="relative transition-super-fast hover:text-blue-500 hover:bg-blue-100 menu-border-right menu-border-mobile menu-item rounded">
                      <Link to="/" className="navbar-item block p-3 lg:p-4">
                        BRF Sandbacken
                      </Link>
                    </li>
                    <li className="relative transition-super-fast hover:text-blue-500 hover:bg-blue-100 menu-border-right menu-border-mobile menu-item rounded">
                      <Link className="navbar-item block p-3 lg:p-4" to="/about">
                        Om Föreningen
                      </Link>
                    </li>
                    <li className="relative transition-super-fast hover:text-blue-500 hover:bg-blue-100 menu-border-right menu-border-mobile menu-item rounded">
                      <Link className="navbar-item block p-3 lg:p-4" to="/products">
                        Bo i BRF
                      </Link>
                    </li>
                    <li className="relative transition-super-fast hover:text-blue-500 hover:bg-blue-100 menu-border-right menu-border-mobile menu-item rounded">
                      <a
                        className="navbar-item block p-3 lg:p-4"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="flex-1 p-6">
                <section>
                  <ul className="">
                    <li className="relative transition-super-fast hover:text-blue-500 hover:bg-blue-100 menu-border-right menu-border-mobile menu-item rounded">
                      <Link className="navbar-item block p-3 lg:p-4" to="/blog">
                        Anslagstavla
                      </Link>
                    </li>
                    <li className="relative transition-super-fast hover:text-blue-500 hover:bg-blue-100 menu-border-right menu-border-mobile menu-item rounded">
                      <Link className="navbar-item block p-3 lg:p-4" to="/contact">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="flex-1 p-6">

              </div>
              {/*
              <div className="social flex">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
              */}
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
