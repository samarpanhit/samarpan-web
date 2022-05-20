import React from 'react'
import Card from './Card'
import './team.css'
import core_member from '../../Database/Team/Core_member.json'

const Team = () => {
    return (
        <div className='team-container'>
            <h1 style={{textAlign: "center"}}>TEAM</h1>
            <div className='team-content'>
                {core_member.map((member, i) => <Card name={member.name} role={member.role} img={member.img}/>)}
                       
            </div>
        </div>
    )
}
export default Team

{/* 
<main>
    <section className="slicer media">
    <div></div><div></div></section>
    <section>
        <div>
            <div>
                <h6 className="paragraph-bold u-center-text">Ashutosh Tiwari</h6>
                <img className="logo" src="/static/media/logo.2fca1b04d0440e358126.png" alt=""/>
                <div>
                    <span className="span-grey">Head</span>
                </div>
            </div>
            <div>
                <h6 className="paragraph-bold u-center-text">Mrinmoy Sarkar</h6>
                <img className="logo" src="/static/media/logo.2fca1b04d0440e358126.png" alt=""/>
                <div>
                    <span className="span-grey">Joint Head</span>
                </div>
            </div>
            <div>
                <h6 className="paragraph-bold u-center-text">Pankaj Kumar</h6>
                <img className="logo" src="/static/media/logo.2fca1b04d0440e358126.png" alt=""/>
                <div>
                    <span className="span-grey">Volunteering Lead</span>
                </div>
            </div>
            <div>
                <h6 className="paragraph-bold u-center-text">Ankita Biswas</h6>
                <img className="logo" src="/static/media/logo.2fca1b04d0440e358126.png" alt=""/>
                <div>
                    <span className="span-grey">Mentoring Lead</span>
                </div>
            </div>
            <div>
                <h6 className="paragraph-bold u-center-text">Jayeeta Gorai</h6>
                <img className="logo" src="/static/media/logo.2fca1b04d0440e358126.png" alt=""/>
                <div>
                    <span className="span-grey">Creative & Cultural Lead</span>
                </div>
            </div>
            <div>
                <h6 className="paragraph-bold u-center-text">Shubham Anand</h6>
                <img className="logo" src="/static/media/logo.2fca1b04d0440e358126.png" alt=""/>
                <div>
                    <span className="span-grey">Social Media & Promotion Lead</span>
                </div>
            </div>
        </div>
        

    </section>
</main> */}