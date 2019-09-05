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
      isHovered: false,
      navActive: '',
    }
    this.handleHover = this.handleHover.bind(this);
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

  handleHover(){
    this.setState(
        {
            isHovered: !this.state.isHovered,
        },
        // after state has been updated,
        () => {
          // set the class in state for the navbar accordingly
          this.state.isHovered
            ? this.setState({
                navActive: 'is-active',
              })
            : this.setState({
                navActive: 'not-active',
              })
        }
      )
   
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
        className={` md:${alu} flex md:fixed`}
        role="navigation"
        aria-label="main-navigation"
        style={{
        right: '0',
        width: '100%',
        zIndex: '999'}}
      >
        <div className="flex flex-grow justify-around">
            <div className="flex mdm:hidden">
                <Link className="relative hover:text-blue-500 p-3 lg:p-4" to="/">
                    <h2>BRF Sandbacken</h2>
                </Link>
            </div>
          <div className="flex md:hidden fixed right-0" style={{zIndex: '9999'}}>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger menu-hover burger ${this.state.navBarActiveClass}`}
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
            className={`mdm:navbar-menu mdm:fixed md:flex mdm:w-3/5 ${this.state.navBarActiveClass} `}>
            <div className="md:justify-end overflow-hidden flex flex-col md:flex-row mdm:w-full">
                <Link className="relative md:hidden hover:text-blue-500 p-3 lg:p-4 mdm:menu-hover" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}} to="/">
                    <h2>BRF Sandbacken</h2>
                </Link>
                <Link className="relative hover:text-blue-500 p-3 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-hover" to="/about">
                    Om Föreningen
                </Link>
                <Link  onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className={`relative hover:text-blue-500 p-3 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-hover`} to="/lists/test-list">
                    Bo i BRF
                </Link>
                <Link className="relative hover:text-blue-500 p-3 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-hover" to="/blog">
                    Anslagstavla
                </Link>
                <Link className="relative hover:text-blue-500 p-3 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-hover" to="/contact">
                    Närområde
                </Link>
                <Link className="relative hover:text-blue-500 p-3 lg:p-4 mdm:menu-hover" to="/contact/examples">
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
