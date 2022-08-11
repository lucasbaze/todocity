import { Text, Flex, Card, Box } from '@todocity/ui';
import { LoginSignup, MainLayout } from '@todocity/components';
import type { NextPage } from 'next';

const Signup: NextPage = () => {
  return (
    <main>
      <MainLayout>
        <Flex direction="column" alignItems="center" height="100%" my="24">
          <Text as="h1" variant="h1" pb="2">
            Create your new Todo City!
          </Text>
          <Text
            as="h2"
            variant="h3"
            color="gray.600"
            pb={12}
            width={{ base: '80%', md: '50%' }}
            textAlign="center"
          >
            As the cheif city planner, you are responsible for your city&apos;s
            success.
          </Text>
          <Card>
            <Flex direction="column" alignItems="center">
              <LoginSignup />
              <Text variant="disclaimer" width="60%" textAlign="center">
                By doing so you agree to our terms of service and privacy policy
              </Text>
            </Flex>
          </Card>
        </Flex>
      </MainLayout>
    </main>
  );
};

export default Signup;
