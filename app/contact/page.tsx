import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="section-deep section pt-32 pb-16 text-center">
        <div className="container max-w-3xl">
          <p className="text-step--1 font-body font-medium text-gold uppercase tracking-[0.1em] mb-3">
            Get in Touch
          </p>
          <h1 className="font-display text-step-4 font-bold text-cream mb-4">
            Contact Us
          </h1>
          <p className="text-step-0 text-cream/70">
            We&apos;d love to hear from you. Reach out with questions or to book an appointment.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Form */}
            <div className="w-full md:w-1/2">
              <h2 className="font-display text-step-2 font-semibold text-ink mb-6">
                Send a Message
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-step--1 font-medium text-brown uppercase tracking-widest mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full border border-cream-hover rounded-lg px-3 py-2.5 text-ink text-sm focus:outline-none focus:border-gold bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-step--1 font-medium text-brown uppercase tracking-widest mb-1">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full border border-cream-hover rounded-lg px-3 py-2.5 text-ink text-sm focus:outline-none focus:border-gold bg-white"
                      placeholder="(XXX) XXX-XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-step--1 font-medium text-brown uppercase tracking-widest mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-cream-hover rounded-lg px-3 py-2.5 text-ink text-sm focus:outline-none focus:border-gold bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-step--1 font-medium text-brown uppercase tracking-widest mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full border border-cream-hover rounded-lg px-3 py-2.5 text-ink text-sm focus:outline-none focus:border-gold bg-white resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button type="submit" className="btn btn-gold w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-display text-step-2 font-semibold text-ink mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg border border-cream-hover bg-white">
                  <Phone className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-ink text-sm">Main Office</p>
                    <a href="tel:+13018384291" className="text-brown hover:text-gold transition-colors no-underline text-sm">
                      (301) 838-4291
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg border border-cream-hover bg-white">
                  <Mail className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-ink text-sm">Email</p>
                    <a href="mailto:info@hsdentalmd.com" className="text-brown hover:text-gold transition-colors no-underline text-sm">
                      info@hsdentalmd.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg border border-cream-hover bg-white">
                  <Clock className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-ink text-sm">Hours</p>
                    <p className="text-brown text-sm">
                      Mon–Fri: 9am–6pm<br />
                      Sat: 9am–2pm<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-lg border border-cream-hover bg-white">
                  <MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-medium text-ink text-sm">Locations</p>
                    <p className="text-brown text-sm">
                      Silver Spring · Rockville · College Park
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
