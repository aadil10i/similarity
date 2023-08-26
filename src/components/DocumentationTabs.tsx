import { FC } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/ui/Tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import Code from '@/components/Code';

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
      <TabsList>
        <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
        <TabsTrigger value='python'>Python</TabsTrigger>
      </TabsList>
      <TabsContent value='nodejs'>
        <Code />
      </TabsContent>
      <TabsContent value='python'></TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
