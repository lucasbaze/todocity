import { Text, Flex } from '@todocity/components';
import type { NextPage } from 'next';
import { MainLayout } from '@todocity/ui';

const Signup: NextPage = () => {
  return (
    <main>
      <MainLayout>
        <Flex flex={1} alignItems="center">
          <Text as="h1" variant="hero">
            Your New Favorite Todo App
          </Text>
        </Flex>
      </MainLayout>
    </main>
  );
};

export default Signup;
