import React, { Component } from 'react';
import Link from 'next/link';

class Navs extends Component {
    render() {
        return (
            <div className="bg-primary">
                <div className="container nav-bar">
                    <div className="navbar-brand">
                        <Link href="/"><a>Rayhan | Resume</a></Link>
                    </div>
                    <div className="nav-link">
                        <Link href="/"><a>Portfulio</a></Link>
                        <Link href="/blog"><a>Blog</a></Link>
                        <Link href="/contact"><a>Contact</a></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navs;