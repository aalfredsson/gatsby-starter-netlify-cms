import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      theposition: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    this.setState({
      theposition: scrolled,
    })
    console.log(this.state.theposition);
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: 'not-active',
            })
      }
    )
  }

  render() {
      const alu = this.state.theposition === 0 ? 'top-nav' : 'scroll-nav'
    return (
      <nav
        className={`${alu} justify-end flex`}
        role="navigation"
        aria-label="main-navigation"
        style={{position: 'fixed',
        right: '0',
        width: '100%',
        zIndex: '9999'}}
      >
        <div className="">
          <div className="flex md:hidden">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`mdm:navbar-menu mdm:absolute md:flex ${this.state.navBarActiveClass} `}>
            <div className="justify-end mdm:h-0 overflow-hidden flex flex-col md:flex-row">
              <Link className="relative hover:text-blue-500 p-3 lg:p-4 menu-border-right menu-border-mobile md:menu-border" to="/about">
                Om Föreningen
              </Link>
              <Link className="relative hover:text-blue-500 p-3 lg:p-4 menu-border-right menu-border-mobile md:menu-border" to="/products">
                Bo i BRF
              </Link>
              <Link className="relative hover:text-blue-500 p-3 lg:p-4 menu-border-right menu-border-mobile md:menu-border" to="/blog">
                Anslagstavla
              </Link>
              <Link className="relative hover:text-blue-500 p-3 lg:p-4 menu-border-right menu-border-mobile md:menu-border" to="/contact">
                Närområde
              </Link>
              <Link className="relative hover:text-blue-500 p-3 lg:p-4" to="/contact/examples">
                Tvätt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
