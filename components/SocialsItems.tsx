import { socials__item } from '@/constants'
import Link from 'next/link'
import React from 'react'

const SocialsItems = () => {
    return (
        <ul className="socials socials--displaced">
            {socials__item.map((item) => (
                <li className="socials__item" key={item.icon}>
                    <Link href={item.href} className={`socials__button ${item.style}`}>
                        <i className={`${item.icon} socials__icon`}></i>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SocialsItems