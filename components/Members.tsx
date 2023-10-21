import { members } from '@/constants'

import React from 'react'

const Members = () => {
    
    return (
        <>
            {
                members.map((member) => (
                    <div className="col-md-12 col-sm-12 col-lg-6" key={member.name} data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                        <div className="member">
                            <div className="member__photo-wrapper">
                                <img src={member.img} className="member__photo" alt="Member Photo" />
                                <div className="member__cover">
                                    <blockquote className="member__quote">{member.cover}</blockquote>
                                </div>
                            </div>
                            <h3 className="member__name">{member.name}</h3>
                            <p className="member__position">{member.position}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Members