import { FC } from 'react';
import type { Metadata } from 'next';
import Heading from '@/ui/Heading';

export const metadata: Metadata = {
  title: 'Similariy API | Documentation',
  description: 'Free & open-source text similarity API',
};

const page: FC = ({}) => {
  return (
    <div className='container max-w-7xl mx-auto mt-12 '>
      <div className='flex flex-col items-center gap-6'>
        <Heading>Making a request</Heading>
      </div>
    </div>
  );
};

export default page;
