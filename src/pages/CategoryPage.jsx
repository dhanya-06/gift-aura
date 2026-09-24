import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { services } from '../data/services';
import { PageTransition } from '../components/PageTransition';

const categories = {
  'birthday-hampers': {
    title: 'Birthday Hampers',
    serviceId: 'birthday',
    description: 'Thoughtful birthday surprises curated to make their day feel extra special.'
  },
  'anniversary-gifts': {
    title: 'Anniversary Gifts',
    serviceId: 'couple',
    description: 'Memorable gifts for celebrating your favourite milestones together.'
  },
  'couple-hampers': {
    title: 'Couple Hampers',
    serviceId: 'couple',
    description: 'Sweet, personal hamper ideas made for two.'
  },
  'self-care-boxes': {
    title: 'Self-Care Boxes',
    serviceId: 'self-care',
    description: 'A calming collection of little comforts for a well-deserved reset.'
  },
  'custom-gifts': {
    title: 'Custom Gifts',
    serviceId: 'cute-simple',
    description: 'Personalised gift ideas that can be tailored for your special moment.'
  }
};

export const CategoryPage = () => {
  const { category } = useParams();
  const categoryDetails = categories[category];
  const service = services.find((item) => item.id === categoryDetails?.serviceId);

  if (!categoryDetails || !service) {
    return null;
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#f6efe7] px-4 py-20 md:px-8">
        <div className="mx-auto max-w-4xl rounded-[36px] border border-[#e9d7cf] bg-[#f8f1ea] p-5 shadow-[0_20px_40px_rgba(84,42,32,0.08)] md:p-10">
          <div className="mb-8 flex justify-center">
            <div className="rounded-[28px] bg-[#f2dfe5] px-6 py-4 text-center shadow-[0_8px_0_rgba(84,42,32,0.08)] md:px-10">
              <h1 className="font-script text-5xl text-brand-brown md:text-7xl">{categoryDetails.title}</h1>
            </div>
          </div>

          <div className={`${service.tone} overflow-hidden rounded-[28px] border border-[#d6c5c0]`}>
            <div className="relative h-64 w-full overflow-hidden border-b border-brand-brown/15">
              <img src={service.image} alt={categoryDetails.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-5 text-center md:p-8">
              <h2 className="font-serif text-3xl text-brand-brown md:text-4xl">{service.title}</h2>
              <p className="mt-3 font-serif text-lg text-brand-brown/70 md:text-xl">{categoryDetails.description}</p>
              <p className="mt-4 font-serif text-base text-brand-brown/70">
                {service.items.length} curated items included
              </p>
              <Link
                to={`/services?hamperId=${service.id}`}
                className="mt-6 inline-flex rounded-full bg-brand-rose px-6 py-3 font-serif text-lg text-white transition-opacity hover:opacity-90"
              >
                View hamper details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};