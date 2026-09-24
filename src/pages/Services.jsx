import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { business } from '../config/business';
import { Heart } from 'lucide-react';
import { services } from '../data/services';

const getFavouriteIds = () => {
  try {
    return JSON.parse(localStorage.getItem('ga_favourites') || '[]').map((item) => item.id);
  } catch {
    return [];
  }
};

const Doodle = ({ type }) => {
  if (type === 'gift') {
    return (
      <div className="relative h-16 w-20">
        <div className="absolute left-4 top-5 h-9 w-12 rounded-md border-[3px] border-[#3a2d2a] bg-[#f5f0e8]/80" />
        <div className="absolute left-6 top-2 h-8 w-2 rounded-full bg-[#d96f7d]" />
        <div className="absolute left-2 top-4 h-2 w-15 rounded-full bg-[#d96f7d]" />
        <div className="absolute left-9 top-0 h-5 w-2 rounded-full bg-[#d96f7d]" />
        <div className="absolute left-3 top-9 h-2 w-2 rounded-full bg-[#d96f7d]" />
      </div>
    );
  }

  if (type === 'candle') {
    return (
      <div className="relative h-16 w-20">
        <div className="absolute left-7 top-2 h-3 w-3 rounded-full bg-[#dca250]" />
        <div className="absolute left-5 top-6 h-7 w-7 rounded-[40%] border-[3px] border-[#2e241f] bg-[#f9f5ef]" />
        <div className="absolute left-9 top-2 h-4 w-4 rounded-full bg-[#f7c97c]" />
        <div className="absolute left-3 top-12 h-2 w-12 rounded-full border-[2px] border-[#2e241f] bg-transparent" />
      </div>
    );
  }

  if (type === 'mug') {
    return (
      <div className="relative h-16 w-20">
        <div className="absolute left-3 top-6 h-8 w-11 rounded-[20px] border-[3px] border-[#2d2727] bg-[#f5f0eb]" />
        <div className="absolute left-14 top-8 h-6 w-3 rounded-r-full border-[3px] border-[#2d2727] border-l-0" />
        <div className="absolute left-5 top-3 h-2 w-7 rounded-full border-[2px] border-[#2d2727] bg-transparent" />
      </div>
    );
  }

  return (
    <div className="relative h-16 w-20">
      <div className="absolute left-2 top-6 h-6 w-6 rotate-45 rounded-[40%] border-[3px] border-[#2d2727] bg-[#f6d1d5]" />
      <div className="absolute left-10 top-6 h-6 w-6 rotate-45 rounded-[40%] border-[3px] border-[#2d2727] bg-[#f6d1d5]" />
      <div className="absolute left-7 top-9 h-5 w-5 rotate-45 rounded-[40%] border-[3px] border-[#2d2727] bg-[#f0b2bb]" />
    </div>
  );
};

export const Services = () => {
  const [searchParams] = useSearchParams();
  const [selectedHamper, setSelectedHamper] = useState(() => searchParams.get('hamperId'));
  const [favourites, setFavourites] = useState(() => getFavouriteIds());

  useEffect(() => {
    setSelectedHamper(searchParams.get('hamperId'));
  }, [searchParams]);

  useEffect(() => {
    const sync = () => setFavourites(getFavouriteIds());
    window.addEventListener('ga-fav-update', sync);
    return () => window.removeEventListener('ga-fav-update', sync);
  }, []);

  const toggleFavourite = (hamper) => {
    const saved = JSON.parse(localStorage.getItem('ga_favourites') || '[]');
    const isAlreadySaved = saved.some((item) => item.id === hamper.id);
    let updated = [];

    if (isAlreadySaved) {
      updated = saved.filter((item) => item.id !== hamper.id);
    } else {
      updated = [{
        id: hamper.id,
        name: hamper.title,
        image: hamper.image,
        price: 0
      }, ...saved];
    }

    localStorage.setItem('ga_favourites', JSON.stringify(updated));
    setFavourites(updated.map((item) => item.id));
    window.dispatchEvent(new Event('ga-fav-update'));
  };

  const currentHamper = services.find((item) => item.id === selectedHamper);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f6efe7] px-4 py-20 md:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[#e9d7cf] bg-[#f8f1ea] p-4 shadow-[0_20px_40px_rgba(84,42,32,0.08)] md:p-8">
          <div className="absolute -left-7 top-1 h-20 w-14 rotate-12 rounded-[30%] bg-[#f3b7c7] shadow-[0_0_0_8px_rgba(243,183,199,0.3)]" />
          <div className="absolute -right-7 top-1 h-20 w-14 -rotate-12 rounded-[30%] bg-[#f3b7c7] shadow-[0_0_0_8px_rgba(243,183,199,0.3)]" />

          <div className="mb-8 flex justify-center">
            <div className="relative rounded-[28px] bg-[#f2dfe5] px-6 py-4 shadow-[0_8px_0_rgba(84,42,32,0.08)] md:px-10">
              <h1 className="font-script text-5xl text-brand-brown md:text-7xl">Gift Hampers</h1>
              <span className="absolute -right-2 top-2 text-3xl text-brand-rose">♡</span>
              <span className="absolute -left-2 bottom-2 text-3xl text-brand-rose">♡</span>
            </div>
          </div>

          {!currentHamper ? (
            <div className="grid gap-5 md:grid-cols-2">
              {services.map((hamper) => {
                const isFav = favourites.includes(hamper.id);

                return (
                  <div
                    key={hamper.id}
                    className={`${hamper.tone} group relative overflow-hidden rounded-[24px] border border-[#d6c5c0] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_20px_30px_rgba(84,42,32,0.1)]`}
                  >
                    <button
                      type="button"
                      aria-label={isFav ? 'Remove from wishlist' : 'Add to wishlist'}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavourite(hamper);
                      }}
                      className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-brand-rose shadow-sm transition-all hover:scale-105"
                    >
                      <Heart size={18} fill={isFav ? 'currentColor' : 'none'} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedHamper(hamper.id)}
                      className="block w-full text-left"
                    >
                      <div className="relative h-52 w-full overflow-hidden border-b border-brand-brown/10">
                        <img
                          src={hamper.image}
                          alt={hamper.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-5 md:p-6">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <h2 className="font-serif text-3xl font-medium capitalize text-brand-brown md:text-[2.1rem] leading-none">
                            {hamper.title}
                          </h2>
                        </div>

                        <p className="mb-6 font-serif text-lg text-brand-brown/70 md:text-xl">
                          Tap to view the curated items in this hamper.
                        </p>

                        <div className="flex items-center justify-between border-t border-brand-brown/15 pt-4">
                          <span className="font-serif text-base text-brand-brown/70 md:text-lg">
                            {hamper.items.length} items included
                          </span>
                          <span className="font-serif text-lg text-brand-brown md:text-xl">
                            Open dashboard →
                          </span>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedHamper(null)}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-brown/20 bg-white/40 px-4 py-2 font-serif text-base text-brand-brown transition-colors hover:bg-white/70"
                >
                  ← Back to dashboards
                </button>

                <div className="rounded-full bg-[#f2dfe5] px-4 py-2 text-center shadow-sm">
                  <span className="font-serif text-xl text-brand-brown">{currentHamper.title}</span>
                </div>
              </div>

              <div className={`${currentHamper.tone} overflow-hidden rounded-[28px] border border-[#d6c5c0] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45)]`}>
                <div className="relative h-64 w-full overflow-hidden border-b border-brand-brown/15">
                  <img src={currentHamper.image} alt={currentHamper.title} className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => toggleFavourite(currentHamper)}
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-brand-rose shadow-lg"
                  >
                    <Heart size={20} fill={favourites.includes(currentHamper.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>

                <div className="p-5 md:p-7">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <h2 className="font-serif text-3xl font-medium text-brand-brown md:text-4xl">
                      {currentHamper.title}
                    </h2>
                    <Doodle type={currentHamper.doodle} />
                  </div>

                  <ul className="space-y-3">
                    {currentHamper.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/20 px-3 py-2">
                        <span className="mt-1 text-xl text-brand-brown">→</span>
                        <span className="font-serif text-xl leading-snug text-brand-brown/85 md:text-[1.65rem]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#e7d8d0] bg-[#fffaf7] p-6 text-center shadow-md">
                <p className="font-serif text-2xl text-brand-brown md:text-3xl">Order through Instagram</p>
                <p className="mt-2 font-serif text-base text-brand-brown/70 md:text-lg">
                  DM us on Instagram to personalise this hamper and place your order.
                </p>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-brand-rose px-6 py-3 font-serif text-lg text-white transition-opacity hover:opacity-90"
                >
                  {business.instagram}
                </a>
              </div>
            </div>
          )}

          <div className="mt-10 flex items-center justify-center gap-5 text-brand-rose">
            <div className="h-px w-20 bg-brand-brown/30 md:w-28" />
            <span className="text-4xl">♡</span>
            <div className="h-px w-20 bg-brand-brown/30 md:w-28" />
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
