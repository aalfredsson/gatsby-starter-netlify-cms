import React from 'react'
import { Link } from 'gatsby'
import SideNav from '../components/SideNav'
/*import { navigate } from '@reach/router'*/
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import { Location } from '@reach/router'

const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            active: false,
            navBarActiveClass: 'not-active',
            theposition: 0,
            scrolled: false,
            isHovered: false,
            navActive: '',
            subNavActive: false,
            subNavActiveClass: 'sub-not-active',
            activeSub: 'lists',
            scrollClass: 'scroll-nav md:absolute',
            scrollTop: 'py-4',
            navbarScrolled: 'burger-not-scroll',
            navActive: false,
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
            scrollTop: winScroll,
        })

        if (winScroll > 56) {
            this.setState({
                scrolled: true,
                scrollClass: 'nav-scroll-mode md:fixed top-0',
                scrollTop: 'md:py-2',
                navbarScrolled: 'burger-scroll m-2',
            })
        } else {
            this.setState({
                scrolled: false,
                scrollClass: 'scroll-nav md:absolute top-0',
                scrollTop: 'py-4',
                navbarScrolled: 'burger-not-scroll',
            })
        }

    }

    handleHover() {
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

    getLocation = (location) => {
    
        var loc = location.pathname.split('/')
        this.setState(
            () => {
                // set the class in state for the navbar accordingly
                loc[1] === this.state.activeSub
                    ? this.setState({
                        subNavActiveClass: 'sub-is-active',
                        subNavActive: true,
                    })
                    : this.setState({
                        subNavActiveClass: 'sub-not-active',
                        subNavActive: false,
                    })
            }
        )
        
    }

    toggleHamburger = (onlyClose, location) => {
        console.log(location);
        if (location)  {
            this.getLocation(location)
        }
        // toggle the active boolean in the state
        this.setState(
            {
                active: !this.state.active && onlyClose,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.active
                    ? this.setState({
                        navBarActiveClass: 'is-active',
                        navActive: true,
                    })
                    : this.setState({
                        navBarActiveClass: 'not-active',
                        navActive: false,
                    })
            }
        )
    }

    redirect = (activeSub) => {
// toggle the active boolean in the state
        this.setState(
            {
                subNavActive: !this.state.subNavActive,
            },
            // after state has been updated,
            () => {
                // set the class in state for the navbar accordingly
                this.state.subNavActive
                    ? this.setState({
                        subNavActiveClass: 'sub-is-active',
                        activeSub: activeSub,
                        subNavActive: true,
                    })
                    : this.setState({
                        subNavActiveClass: 'sub-not-active',
                        activeSub: '',
                        subNavActive: false,
                    })
            }
        )
    }

    preventDef = (e) => {
        e.preventDefault();
    }

    isPartiallyActive = ({
        isPartiallyCurrent
      }) => {
        return isPartiallyCurrent
          ? { className: "active" }
          : null
      }

    render() {
        const alu = this.state.theposition === 0 ? 'top-nav' : 'scroll-nav'
        return (
            <Location>
            {({ location }) => (    
                <nav>
                    <div onClick={() => this.toggleHamburger(false)} className={`z-10 overlay mdm:${this.state.navBarActiveClass}`}></div>
                    <div
                        className={`flex md:justify-center md:${this.state.scrollClass} nav-bar`}
                        role="navigation"
                        aria-label="main-navigation"
                        style={{
                            right: '0',
                            width: '100%',
                            zIndex: '999'
                        }}>
                        <div className="flex flex-grow justify-between md:container">
                            <Link className={`relative transition-super-fast hover:text-blue-1000 px-3 lg:px-4 flex ${this.state.scrollTop} ${this.state.navActive ? 'mdm:py-2' : ''}`} to="/">
                                <h2 className="flex items-center">BRF Sandbacken</h2>
                            </Link>
                            <div className={`flex md:hidden burger-wrapper right-0 top-0 ${this.state.navBarActiveClass} ${this.state.scrolled ? 'burger-wrapper-scroll' : ''}`} style={{ zIndex: '9999' }}>
                                {/* Hamburger menu */}
                                <div
                                    className={`navbar-burger navbar-burger-circle burger mr-2 ${this.state.navBarActiveClass} ${this.state.navbarScrolled}`}
                                    data-target="navMenu"
                                    onClick={() => this.toggleHamburger(true, location)}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                            <div
                                id="navMenu"
                                className={`mdm:navbar-menu mdm:fixed flex mdm:w-76 z-10 md:items-center ${this.state.navBarActiveClass} ${this.state.scrollTop} ${this.state.navActive ? 'mdm:py-0' : ''}`}>
                                <div className="md:justify-end overflow-hidden flex flex-col md:flex-row mdm:w-full ">
                                    <div className="md:justify-end overflow-hidden flex flex-col md:flex-row mdm:w-full ">
                                        <Link className="relative md:hidden transition-super-fast hover:text-blue-1000 p-6 lg:px-4 mdm:menu-item" style={{ lineHeight:'1.4',borderBottom: '1px solid rgba(0,0,0,0.1)' }}
                                            activeClassName="text-blue-1000 mdm:bg-gray-100" to="/">
                                            <h2>BRF Sandbacken</h2>
                                        </Link>
                                        <Link className="relative transition-super-fast hover:text-blue-1000 mdm:py-3 px-3 mdm:pl-6 lg:px-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item"
                                            activeClassName="text-blue-1000 mdm:bg-gray-100 mdm:border-l-2 mdm:border-blue-500" to="/about">
                                            Om Föreningen
                                        </Link>
                                        <div>
                                            <div>
                                                <label className={`sidenav-mobile ${this.state.navBarActiveClass}`}>
                                                    <input type="checkbox" className="hidden" checked={this.state.subNavActive}  onChange={() => this.redirect('lists')}></input>
                                                    <div className="subnav w-full">
                                                        <div  className={`mdm:flex mdm:items-center mdm:justify-between relative transition-super-fast mdm:pl-6 hover:text-blue-1000 mdm:py-3 px-3 lg:px-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item cursor-pointer`}>
                                                            <span className="flex justify-between items-center w-full active-submenu-header">
                                                                Bo i BRF
                                                                <span className="flex items-center md:hidden arrow up"></span>
                                                            </span>
                                                        </div>
                                                        <div className="md:absolute md:bg-white md:shadow-lg sido md:rounded-sm md:width-200px">
                                                            <SideNav />
                                                        </div>
                                                    </div>
                                                </label>
                                                
                                            </div>
                                            
                                        </div>

                                        <Link className="relative transition-super-fast hover:text-blue-1000 mdm:py-3 px-3 mdm:pl-6 lg:px-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item"
                                            activeClassName="text-blue-1000 mdm:bg-gray-100 mdm:border-l-2 mdm:border-blue-500" partiallyActive={true} to="/blog">
                                            Anslagstavla
                                        </Link>
                                        <Link className="relative transition-super-fast hover:text-blue-1000 mdm:py-3 px-3 mdm:pl-6 lg:px-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item"
                                            activeClassName="text-blue-1000 mdm:bg-gray-100 mdm:border-l-2 mdm:border-blue-500" to="/contact">
                                            Kontakt
                                        </Link>
                                        <Link className="relative transition-super-fast hover:text-blue-1000 mdm:py-3 px-3 mdm:pl-6 lg:px-4 menu-border-mobile md:menu-border mdm:menu-item"
                                            activeClassName="text-blue-1000 mdm:bg-gray-100 mdm:border-l-2 mdm:border-blue-500" to="/laundry">
                                            Tvätt
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
            </Location>
        )
            {/*<Location>
            {({ location }) => (
                <nav>
                    <div onClick={() => this.toggleHamburger(false)} className={`overlay mdm:${this.state.navBarActiveClass}`}></div>
                    <div
                        className={` md:scroll-nav flex md:fixed md:justify-center`}
                        role="navigation"
                        aria-label="main-navigation"
                        style={{
                            right: '0',
                            width: '100%',
                            zIndex: '999',
                            borderBottom: '1px solid rgba(0,0,0,0.08)'
                        }}>
                        <div className="flex flex-grow justify-between container">
                            <div className="flex mdm:hidden">
                                <Link className="relative transition-super-fast hover:text-blue-1000 p-3 lg:p-4" to="/">
                                    <h2>BRF Sandbacken</h2>
                                </Link>
                            </div>
                            <div className="flex md:hidden fixed right-0" style={{ zIndex: '9999' }}>
                                {/* Hamburger menu 
                                <div
                                    className={`navbar-burger navbar-burger-circle burger ${this.state.navBarActiveClass}`}
                                    data-target="navMenu"
                                    onClick={() => this.toggleHamburger(true, location)}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                            <div
                                id="navMenu"
                                className={`mdm:navbar-menu mdm:fixed md:flex mdm:w-76  z-10 ${this.state.navBarActiveClass} `}>
                                <div className="md:justify-end overflow-hidden flex flex-col md:flex-row mdm:w-full">
                                    <Link className="relative md:hidden transition-super-fast hover:text-blue-1000 p-6 lg:p-4 mdm:menu-item" style={{ lineHeight:'1.4',borderBottom: '1px solid rgba(0,0,0,0.1)' }}
                                        activeClassName="text-blue-1000 mdm:bg-gray-100" to="/">
                                        <h2>BRF Sandbacken</h2>
                                    </Link>
                                    <Link className="relative transition-super-fast hover:text-blue-1000  p-3 mdm:pl-6 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item"
                                        activeClassName="text-blue-1000 mdm:bg-gray-100 mdm:border-l-2 mdm:border-blue-500" to="/about">
                                        Om Föreningen
                                    </Link>
                                    <div>
                                        <div>
                                            <label className={`sidenav-mobile ${this.state.navBarActiveClass}`}>
                                                <input type="checkbox" className="hidden" checked={this.state.subNavActive}  onChange={() => this.redirect('lists')}></input>
                                                <div className="subnav w-full">
                                                    <div  className={`mdm:flex mdm:items-center mdm:justify-between relative transition-super-fast mdm:pl-6 hover:text-blue-1000 p-3 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item cursor-pointer`}>
                                                        <span className="flex justify-between items-center w-full active-submenu-header">
                                                            Bo i BRF
                                                            <span className="flex items-center md:hidden arrow up"></span>
                                                        </span>
                                                    </div>
                                                    <div className="md:absolute md:bg-white md:shadow-lg sido md:rounded-sm md:width-200px">
                                                        <SideNav />
                                                    </div>
                                                </div>
                                            </label>
                                            
                                        </div>
                                        
                                    </div>

                                    <Link className="relative transition-super-fast hover:text-blue-1000 p-3 mdm:pl-6 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item"
                                        activeClassName="text-blue-1000 mdm:bg-gray-100 mdm:border-l-2 mdm:border-blue-500" partiallyActive={true} to="/blog">
                                        Anslagstavla
                                    </Link>
                                    <Link className="relative transition-super-fast hover:text-blue-1000 p-3 mdm:pl-6 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item"
                                        activeClassName="text-blue-1000 mdm:bg-gray-100 mdm:border-l-2 mdm:border-blue-500" to="/contact">
                                        Kontakt
                                    </Link>
                                    <Link className="relative transition-super-fast hover:text-blue-1000 p-3 mdm:pl-6 lg:p-4 mdm:menu-item" activeClassName="text-blue-1000 mdm:bg-gray-100 mdm:border-l-2 mdm:border-blue-500" to="/laundry">
                                        Tvätt
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
                                </Location>
                                )*/}
    }
}

export default Navbar
