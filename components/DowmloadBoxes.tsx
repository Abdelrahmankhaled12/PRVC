import { download_links } from '@/constants'
import Link from 'next/link'

const DowmloadBoxes = () => {
    return (
        <>
            {
                download_links.map((link, index) => (
                    <div className="col-lg-6 col-md-8 col-lg-offset-2" key={link.url + index} style={{ "marginBottom": "20px" }}>
                        <Link className="download-button" href={link.url}>
                            <img src={link.img} className="download-button__icon" alt="Platform Icon" />
                            <span className="download-button__platform">{link.subtitle}</span>
                            <span className="download-button__store">{link.title}</span>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default DowmloadBoxes