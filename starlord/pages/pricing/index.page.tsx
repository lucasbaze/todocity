import { Suspense, useRef } from 'react';

import { useTheme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { Badge, Box, Container, Flex, Text } from '@todocity/ui/core';

import { PricingCard } from './components/pricing-card/pricing-card';

const PricingPageScene = dynamic(
  () => import('../../libs/scenes/pricing-page/index'),
  {
    ssr: false,
    suspense: true,
  }
);

const PreOrderButton = dynamic(
  () => import('./components/pre-order-button/pre-order-button'),
  {
    ssr: false,
    suspense: true,
  }
);

const CreateAccountButton = dynamic(
  () =>
    import('../../libs/components/create-account-button/create-account-button'),
  {
    ssr: false,
    suspense: true,
  }
);

function PricingPage() {
  const { sizes } = useTheme();
  const view1Ref = useRef<HTMLDivElement>(null);
  const view2Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <MainLayout>
        <Container
          display="grid"
          mb={20}
          alignItems="center"
          minHeight={`calc(100vh - ${sizes.header})`}
          zIndex="15"
        >
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            alignItems={{ md: 'center' }}
          >
            <Box flex={{ md: 2 }}>
              <Badge fontSize="md" size="md">
                Pricing
              </Badge>
              <Text as="h1" variant="hero">
                Fun for all
              </Text>
              <Text as="h2" variant="h2" color="gray.600" pb={0}>
                Get started for free, or pre-order for an entire year!
              </Text>
            </Box>
            <Box flex={{ md: 3 }} width="100%">
              <Flex
                gap={4}
                direction={{ base: 'column', md: 'row' }}
                alignItems={{ md: 'center' }}
              >
                <Box flex={1}>
                  <Box
                    cursor="pointer"
                    ref={view1Ref}
                    height="300px"
                    width="300px"
                    margin="0 auto -100px"
                  />
                  <PricingCard
                    data={{
                      price: '$0',
                      name: 'City Basics',
                      discount: (
                        <Badge
                          mt="4"
                          colorScheme="purple"
                          fontSize="0.8em"
                          size="sm"
                        >
                          Free
                        </Badge>
                      ),
                      features: [
                        { text: 'Unlimited todos & projects' },
                        {
                          text: 'Earn unlimited points',
                          tooltipText: 'Collect points by completing todos',
                        },
                        {
                          text: 'Collect unlimited objects',
                          tooltipText:
                            'Spend points to buy lots and objects to build your city',
                        },
                      ],
                    }}
                    button={<CreateAccountButton size="lg" />}
                  />
                </Box>
                <Box flex={1}>
                  <Box
                    cursor="pointer"
                    ref={view2Ref}
                    height="300px"
                    width="300px"
                    margin="0 auto -100px"
                  />
                  <PricingCard
                    data={{
                      price: '$25',
                      name: 'Metropolis',
                      discount: (
                        <Badge
                          mt="4"
                          colorScheme="purple"
                          fontSize="0.8em"
                          size="sm"
                        >
                          Early Bird Only
                        </Badge>
                      ),
                      features: [
                        { text: 'Everything in Basics' },
                        {
                          text: 'Integrated timers',
                          tooltipText:
                            'Time blocking tasks has proven productivity enhancements',
                        },
                        {
                          text: 'Recurring reminders',
                        },
                        { text: 'Premium object access' },
                        { text: '10x starting points' },
                        { text: '...much more to come' },
                      ],
                    }}
                    button={<PreOrderButton />}
                    // disclaimer={
                    //   <Text
                    //     textAlign="center"
                    //     variant="disclaimer"
                    //     margin="0 auto"
                    //   >
                    //     You will be charged today. <br /> However, you can request to cancel any
                    //     time beforehand.
                    //   </Text>
                    // }
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </MainLayout>
      <Suspense fallback={null}>
        <PricingPageScene view1Ref={view1Ref} view2Ref={view2Ref} />
      </Suspense>
    </>
  );
}

export default PricingPage;
