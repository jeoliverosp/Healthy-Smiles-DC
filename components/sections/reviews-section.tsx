import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Maria L.",
    text: "Excellent service! The staff was very professional and made me feel comfortable. My teeth have never looked better.",
    rating: 5,
  },
  {
    name: "James W.",
    text: "Dr. Xu and her team are amazing. They took the time to explain everything and the results are fantastic.",
    rating: 5,
  },
  {
    name: "Soo Y.",
    text: "I've been coming here for years. The whole family loves Healthy Smiles. Highly recommend!",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "Great experience with my root canal. Barely felt a thing. Professional and caring staff.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-gold text-gold" : "text-cream/20"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="section bg-cream" id="reviews">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-step--1 font-body font-medium text-gold uppercase tracking-[0.1em] mb-3">
            What Patients Say
          </p>
          <h2 className="font-display text-step-3 font-semibold text-ink">
            Reviews
          </h2>
          <p className="text-brown mt-2">
            4.8 out of 5 stars — 955+ Google reviews
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="rounded-lg border border-cream-hover bg-white p-6 space-y-3"
            >
              <Stars count={review.rating} />
              <p className="text-brown text-sm leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-ink font-body font-medium text-sm">
                — {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
