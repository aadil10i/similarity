import type { Metadata } from 'next';
import Heading from '@/components/ui/Heading';

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Free & open-source text similarity API',
};

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start '>
          <Heading
            size='lg'
            className='three-d text-black dark:text-light-gold'
          ></Heading>
        </div>
      </div>
    </div>
  );
}
