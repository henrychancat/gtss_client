import React from "react";
import "./index.css";
import {useDocumentTitle} from '../../hooks'
export default function About() {
    useDocumentTitle('About Us | SaaSBooking')
  return (
    <>
      {/* <!-- Hero / Banner --> */}
      <section class="text-center py-20 bg-blue-100">
        <h1 class="text-4xl font-bold mb-4" id="about-title">
          Who We Are
        </h1>
        <p class="text-lg max-w-2xl mx-auto" id="about-subtitle">
          We build smart tools that help coaches, schools, and creators automate
          bookings, payments, and communication across platforms.
        </p>
      </section>

      <section class="px-8 py-16 max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 class="text-2xl font-semibold mb-4" id="mission-title">
              Our Mission
            </h2>
            <p id="mission-text">
              To simplify how small service providers connect with clients—no
              matter if they come from WeChat, Line, or Instagram. We believe
              booking and payment should be seamless and smart.
            </p>
          </div>
          {/* <!--这里原图片我加载不出来，随便改了一个地址--> */}
          {/* <!-- <img src="https://source.unsplash.com/featured/?team,technology" alt="Our team" class="rounded shadow">--> */}
          <img
            src="https://copyright.bdstatic.com/vcg/creative/46563d11f18f57716f7330a82d863324.jpg@wm_1,k_cGljX2JqaHdhdGVyLmpwZw=="
            alt="Our team"
            class="rounded shadow"
          />
        </div>

        <div class="mt-16 text-center meet-our-team">
          <h2 class="text-2xl font-semibold mb-4" id="team-title">
            Meet Our Team
          </h2>
          <p id="team-text">
            We are a group of designers, developers, and trainers from Shanghai,
            Tokyo, and New York working remotely across time zones.
          </p>
        </div>
      </section>
    </>
  );
}
