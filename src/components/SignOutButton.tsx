'use client';

import { FC, useState } from 'react';
import Button from '@/components/ui/Button';
import { signOut } from 'next-auth/react';
import { toast } from '@/components/ui/Toast';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);

    try {
      signOut();
    } catch (error) {
      toast({
        title: 'Error Signing Out',
        message: 'Please try again later',
        type: 'error',
      });
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
