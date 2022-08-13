import { useTheme } from '@chakra-ui/react';

import { AnalButton, MainLayout } from '@todocity/components';
import { Badge, Box, Container, Flex, PricingCard, Text } from '@todocity/ui';

function HomePage() {
  const { sizes } = useTheme();
  return (
    <MainLayout>
      <Container
        display="grid"
        alignItems="center"
        minHeight={`calc(100vh - ${sizes.header})`}
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
            <Text as="h2" variant="h2" color="gray.600" pb={20}>
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
                  button={
                    <AnalButton
                      variant="primary"
                      size="lg"
                      analytics={{ buttonName: 'buy-now' }}
                    >
                      Create your city
                    </AnalButton>
                  }
                />
              </Box>
              <Box flex={1}>
                <PricingCard
                  data={{
                    price: '$24',
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
                      { text: '...much more to come' },
                    ],
                  }}
                  button={
                    <>
                      <AnalButton
                        variant="primary"
                        size="lg"
                        analytics={{ buttonName: 'buy-now' }}
                      >
                        Pre-order today
                      </AnalButton>
                    </>
                  }
                  disclaimer={
                    <Text
                      textAlign="center"
                      variant="disclaimer"
                      margin="0 auto"
                    >
                      You will not be charged until notified. <br /> Cancel any
                      time beforehand.
                    </Text>
                  }
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </MainLayout>
  );
}

export default HomePage;
