import React from "react";
import './index.css'
import {useDocumentTitle} from '../../hooks'
export default function Home() {
  useDocumentTitle('GTSS | Language Booking Platform')
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Smart Booking for Global Educators</h1>
          <p>
            Empower your language school or service business with our all-in-one
            booking, payment, and marketing platform. Seamlessly integrated
            across WeChat, Line, Instagram and more.
          </p>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Smart Booking Calendar</h3>
          <p>
            Book classNamees by instructor or time, sync with Google/Apple Calendar,
            and view real-time availability.
          </p>
        </div>
        <div className="feature">
          <h3>Cross-Platform QR Booking</h3>
          <p>
            Supports QR code links from Line, WeChat, Instagram to guide users
            to schedule easily from any device.
          </p>
        </div>
        <div className="feature">
          <h3>Multi-Currency Payment</h3>
          <p>
            Pay via Stripe, PayPal, WeChat Pay, or Apple Pay. Automatically
            generate receipts and booking summaries.
          </p>
        </div>
        <div className="feature">
          <h3>Auto Notifications</h3>
          <p>
            Get reminders via SMS, email, and platform messages. Push updates
            via Line and WeChat official accounts.
          </p>
        </div>
        <div className="feature">
          <h3>Admin Dashboard</h3>
          <p>
            Manage users, view stats, configure teachers, and customize price
            models with ease.
          </p>
        </div>
        <div className="feature">
          <h3>Marketing Tools</h3>
          <p>
            Promote new courses, offer coupons, send announcements across all
            platforms from one interface.
          </p>
        </div>
      </section>
    </>
  );
}
