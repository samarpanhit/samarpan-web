import React, { useRef } from 'react'
import './AboutUs.css'

const About = () => {
  const a_vision = useRef(null)
  return (
    <div className='main-aboutus'>
      <div className='aboutus'>
        <h1>How it all Began...</h1>
        <p>
        Education is both the means as well as the end to a better life: the means because it empowers an individual to earn his/her livelihood and the end because it increases one's awareness on a range of issues from healthcare to appropriate  social behavior to understanding one's rights and in the process help him/her evolve as a better citizen. Doubtless, education is the most powerful catalyst for social transformation. <br></br> <br></br>
        Sometimes it takes one good thought, which we often overlook, to make the great change. Rewinding back to 2014, such was a thought, often ignored, was taken into consideration. Those little children, who remained unnoticed, were actually given a thought. Why were they working at the age when they should have been nurturing their young minds? Why were they still in the dark, when everyone around them were enjoying the luxury of education? These thoughts picked the minds of a few strong-willed students, leading their college life. And one such mind was Om Prakash Jha. <br></br> <br></br>
        With determination sturdier than rock and intentions as pure as it gets, our beloved senior Om Prakash Jha, from the department of Chemical Engineering, laid the foundation of SAMARPAN way back in 2014. He had this urge to help the unprivileged ones to share a slice of his knowledge. Thus, was born a venture, to teach with a belief towards a brighter future. And thereby, an organization came into being, SAMARPAN- ‘Ek Soch Ek Viswas’. Ever since we have been trying our  best to frame his ideas and put them into action.
        </p>
      </div>
      <div className='about-vision'>
        <h1>OUR VISION</h1>
        <p>
        With determination sturdier than rock and intentions as pure as it gets, our beloved senior Om Prakash Jha, from the department of Chemical Engineering, laid the foundation of SAMARPAN way back in 2014. He had this urge to help the unprivileged ones to share a slice of his knowledge. Thus, was born a venture, to teach with a belief towards a brighter future. And thereby, an organization came into being, SAMARPAN- ‘Ek Soch Ek Viswas’. Ever since we have been trying our best to frame his ideas and put them into action.
        </p>
      </div>
      <div className='about-mission' ref={a_vision}>
        <h1>OUR GOAL</h1>
        <p>
        Samarpan aims at creating a positive change in the lives of the economically under privileged and underserved children.  We impart the basic tool necessary for growth, Education. We try to empower the little ones with academic and basic life  lessons to lead them into a brighter future.
        </p>
      </div>
    </div>
  )
}

export default About