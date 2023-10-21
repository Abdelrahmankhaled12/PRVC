import { footerLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const FooterLinks = () => {
    return (
        <>
            {footerLinks.map((link , index) => (
                <div className="col-md-5 col-sm-12 col-xs-12" key={index}>
                    <nav className="link-list  ">
                        <ul>
                            {link.links.map((ele) => (
                                <li className="link-list__item" key={ele.title}>
                                    <Link href={ele.url} className="link-list__link">{ele.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            ))}
        </>
    )
}

export default FooterLinks