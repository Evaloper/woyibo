import React from 'react';
import "./About.css"
import profile from "./Images/partrick_dp.png"

export const AboutMe = () => {
  return (
    <section className='about-sect'>
      <div class="row align-items-center justify-content-between">
				<div class="col-lg-6 about-left">
					{/* <img class="img-fluid" src={profile} alt="" /> */}
				</div>
				<div class="col-lg-5 col-md-12 about-right">
					<div class="section-title">
						<h2>about myself</h2>
					</div>
					<div class="mb-50 wow fadeIn" data-wow-duration=".8s">
						<p>
							inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the
							workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior
							is often laughed. inappropriate behavior is often laughed off as “boys will be boys,” women face higher.
						</p>
						<p>That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often
							laughed.
						</p>
					</div>
					<a href="#" class="primary-btn white" data-text="More Info">
						<span>MORE</span>
					</a>
					<a href="#" class="primary-btn" data-text="Resume">
						<span>RESUME</span>
					</a>
				</div>
			</div>
    </section>
  )
}
