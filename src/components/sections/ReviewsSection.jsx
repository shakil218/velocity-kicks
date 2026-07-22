import React from 'react';
import { Quote, CheckCircle2, Star } from 'lucide-react';
import RatingStars from '../common/RatingStars';

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: 'Ahmad Rashid',
      role: 'Marathon Runner',
      shoe: 'Ultraboost Light Running Shoes',
      avatar: 'AR',
      rating: 5.0,
      comment:
        'The responsive cushioning on the Ultraboost series is insane. Velocity Kicks shipped my order within 24 hours and the authenticity tag was verified.',
      date: '2 days ago',
    },
    {
      id: 2,
      name: 'Sarah Khan',
      role: 'Streetwear Collector',
      shoe: 'Air Jordan Retro High OG',
      avatar: 'SK',
      rating: 5.0,
      comment:
        'Finding authentic Jordan high-tops online can be stressful, but Velocity Kicks nailed the packaging, leather condition, and rapid delivery!',
      date: '1 week ago',
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'CrossFit Athlete',
      shoe: 'Metcon 9 Cross-Trainer',
      avatar: 'DC',
      rating: 4.8,
      comment:
        'Incredible stability for heavy deadlifts and rope climbs. Superior grip sole and comfortable fit right out of the box.',
      date: '2 weeks ago',
    },
  ];

  return (
    <section id="reviews-section" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-orange-400">
            ATHLETE REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
            TRUSTED BY ATHLETES & SNEAKERHEADS
          </h2>
          <p className="text-sm text-slate-400">
            Real feedback from verified footwear collectors and active runners across the globe.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative hover:border-slate-700 transition-all duration-300 group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-800 group-hover:text-orange-500/20 transition-colors pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <RatingStars rating={rev.rating} />

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 font-heading font-bold text-white text-xs flex items-center justify-center shadow-md">
                    {rev.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-semibold text-white font-heading">
                        {rev.name}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" title="Verified Purchaser" />
                    </div>
                    <p className="text-[11px] text-slate-400">{rev.role}</p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-slate-500">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
