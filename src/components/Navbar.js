import React from 'react'
import { Link } from 'gatsby'
import SideNav from '../components/SideNav'
/*import { navigate } from '@reach/router'*/
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            navBarActiveClass: 'not-active',
            theposition: 0,
            isHovered: false,
            navActive: '',
            subNavActive: false,
            subNavActiveClass: 'sub-not-active'
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

    toggleHamburger = (onlyClose) => {
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
                    })
                    : this.setState({
                        navBarActiveClass: 'not-active',
                    })
            }
        )
    }

    redirect = () => {
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
                    })
                    : this.setState({
                        subNavActiveClass: 'sub-not-active',
                    })
            }
        )
    }

    render() {
        const alu = this.state.theposition === 0 ? 'top-nav' : 'scroll-nav'
        return (
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
                            <Link className="relative transition-super-fast hover:text-blue-500 p-3 lg:p-4" to="/">
                                <h2>BRF Sandbacken</h2>
                            </Link>
                        </div>
                        <div className="flex md:hidden fixed right-0" style={{ zIndex: '9999' }}>
                            {/* Hamburger menu */}
                            <div
                                className={`navbar-burger navbar-burger-circle burger ${this.state.navBarActiveClass}`}
                                data-target="navMenu"
                                onClick={() => this.toggleHamburger(true)}>
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                        <div
                            id="navMenu"
                            className={`mdm:navbar-menu mdm:fixed md:flex mdm:w-76  z-10 ${this.state.navBarActiveClass} `}>
                            <div className="md:justify-end overflow-hidden flex flex-col md:flex-row mdm:w-full">
                                <Link className="relative md:hidden transition-super-fast hover:text-blue-500 mdm:hover:bg-blue-100 p-6 lg:p-4 mdm:menu-item" style={{ lineHeight:'1.4',borderBottom: '1px solid rgba(0,0,0,0.1)' }}
                                    activeClassName="text-blue-500 mdm:bg-blue-100" to="/">
                                    <h2>BRF Sandbacken</h2>
                                </Link>
                                <Link className="relative transition-super-fast hover:text-blue-500 mdm:hover:bg-blue-100 p-3 mdm:pl-6 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item"
                                    activeClassName="text-blue-500 mdm:bg-blue-100" to="/about">
                                    Om Föreningen
                                </Link>
                                    <div className="cursor-pointer">
                                        <span onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} onClick={() => this.redirect()}
                                            className={`mdm:flex mdm:items-center mdm:justify-between relative transition-super-fast mdm:pl-6 hover:text-blue-500 mdm:hover:bg-blue-100 p-3 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item`}
                                            /*activeClassName="text-blue-500 mdm:bg-blue-100" partiallyActive={true} to="/lists/test-list/"*/>
                                            {/* Fix partially active for test list. to=/lists and redirect lists to lists/test-list/ */}
                                            Bo i BRF
                                            <span><svg aria-hidden="true" className="svg-icon iconArrowRightAlt  native" width="18" height="18" viewBox="0 0 18 18"><path d="M6.41 2L5 3.41 10.59 9 5 14.59 6.41 16l7-7-7-7z"></path></svg></span>

                                        </span>
                                    </div>
                                    <SideNav subNavActiveClass={`${this.state.subNavActiveClass}`}/>
                                <Link className="relative transition-super-fast hover:text-blue-500 mdm:hover:bg-blue-100 p-3 mdm:pl-6 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item"
                                    activeClassName="text-blue-500 mdm:bg-blue-100" partiallyActive={true} to="/blog">
                                    Anslagstavla
                                </Link>
                                <Link className="relative transition-super-fast hover:text-blue-500 mdm:hover:bg-blue-100 p-3 mdm:pl-6 lg:p-4 menu-border-right menu-border-mobile md:menu-border mdm:menu-item"
                                    activeClassName="text-blue-500 mdm:bg-blue-100" to="/contact">
                                    Närområde
                                </Link>
                                <Link className="relative transition-super-fast hover:text-blue-500 mdm:hover:bg-blue-100 p-3 mdm:pl-6 lg:p-4 mdm:menu-item" activeClassName="text-blue-500 mdm:bg-blue-100" to="/laundry">
                                    Tvätt
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
