'use client';

import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/Tabs';
import SimpleBar from 'simplebar-react';
import Code from '@/components/Code';
import { nodejs, python } from '@/constants/documentation-code';

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
      <TabsList>
        <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
      </TabsList>
      <TabsContent value='nodejs'>
        <SimpleBar>
          <Code animated language='javascript' code={nodejs} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value='python'>
        <Code animated language='python' code={python} show />
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
