import React from 'react'
import './UserHome.css'
import Carousal from '../main/Carosal'
export default function UserHome() {
  return (
    <div>
    <div className="service section-1">
      <div className='Home-content'>
        <div className='text-content'>
          <h1>Good Universe Integrates</h1>
          <div className='typing-wrapper'>
            <span>Gender Equality</span>
            <span>Climate Change</span>
            <span>Health & Well-being</span>
          </div>
          <p>We ensure to make the world more livable, to make our places safer and more accessible to all genders, to make health a priority in our communities.</p>
          <button className='btn'><a href="#">Know More</a></button>
        </div>
        <img src="/assets/Rural-help.jpg" alt="Our camp" />
      </div>

      <div className="rule1">
        <div className="card1">
          <div className="image1">
            <img src="/assets/image.png" alt="Volunteer" />
          </div>
          <h5>Be a Volunteer</h5>
          <p>Volunteer with us, join our community, and be a gender-equal, climate-resilient ally!</p>
          <p>Engage with life-changing narratives and be a part of transforming lives and communities!</p>
          <button className='btn'>Register</button>
        </div>

        <div className="card1">
          <div className="image1">
            <img src="/assets/donor.webp" alt="Donor" />
          </div>
          <h5>Be a Donor and Help the Community</h5>
          <p>Support our initiatives by donating and making a positive impact on our community.</p>
          <p>Your contributions help us continue our mission and reach more people in need.</p>
          <button className='btn'>Donate</button>
        </div>

        <Carousal/>

        <div className="card1">
          <h5> Biological Understanding</h5>
          <p>Menstrual education provides essential knowledge about the biological processes involved in menstruation. 
          This includes explaining the menstrual cycle, hormones involved (like estrogen and progesterone), and the physical changes that occur in the body each month.</p>
        </div>

        <div className="card1">
          <h5>Health and Hygiene:</h5>
          <p>Education about menstruation emphasizes the importance of proper hygiene practices during menstruation. This includes teaching individuals how to use menstrual products safely (such as pads, tampons, menstrual cups), how to maintain cleanliness, and how to manage menstrual discomfort effectively.</p>
        </div>

        <div className="card1">
          <h5>Empowerment and Normalize:</h5>
          <p>Menstrual education helps in destigmatizing menstruation and empowering individuals to embrace it as a natural and normal part of life. It encourages open discussions, breaks taboos, and promotes acceptance and inclusivity across different cultural and societal norms.</p>
        </div>

        <div className="card1">
          <h5>Social and Emotional Well-being:</h5>
          <p>Understanding menstruation contributes to improved emotional well-being by reducing anxiety and fear associated with menstrual symptoms. It also fosters empathy and support among peers, educators, and healthcare providers, creating a supportive environment for individuals experiencing menstruation.</p>
        </div>
      </div>
    </div>

    </div>
  )
}
