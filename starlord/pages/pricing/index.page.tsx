import { Suspense, useRef } from 'react';

import { useColorModeValue, useTheme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';
import { PricingCard } from '@todocity/ui/components/pricing-card/pricing-card';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Container,
  Flex,
  Text,
} from '@todocity/ui/core';
import { MainLayout } from '@todocity/ui/layout/main-layout/main-layout';

const PricingPageScene = dynamic(
  () => import('../../libs/features/scenes/pricing-page/index'),
  {
    ssr: false,
    suspense: true,
  }
);

const PreOrderButton = dynamic(
  () => import('../../libs/features/pre-order-button/pre-order-button'),
  {
    ssr: false,
    suspense: true,
  }
);

const CreateAccountButton = dynamic(
  () =>
    import(
      '../../libs/data/auth/components/create-account-button/create-account-button'
    ),
  {
    ssr: false,
    suspense: true,
  }
);

const faqs = [
  {
    question: 'When will the early bird offer expire?',
    answer:
      "Could be tomorrow. Could be next week. We're playing it by ear. You should go ahead and pre-order today just in case.",
  },
  {
    question: 'Will I be charged today for pre-ordering?',
    answer: 'Yes.',
  },
  {
    question: 'What will the official price be after the early specials?',
    answer:
      "At the moment, we're not sure. But there will always be a free tier and a priced tier.",
  },
  {
    question: 'Is there a student or education discount?',
    answer:
      "Please send an email to support@todocity.app with your request. We're more than happy to assist as needed.",
  },
  {
    question: 'Can I get a refund?',
    answer:
      "Yes, but it'll hurt our feelings. Please email support@todocity.app with your email to request a refund.",
  },
  {
    question: 'Can I get a discount?',
    answer:
      'Maybe if you ask really nicely. Please email support@todocity.app with your email and why you would like a discount.',
  },
];

function PricingPage() {
  const { sizes } = useTheme();
  const view1Ref = useRef<HTMLDivElement>(null);
  const view2Ref = useRef<HTMLDivElement>(null);
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <>
      <PageSEOMeta title="Pricing" metaTitle="Pricing" />
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
            justifyContent={{ base: 'center' }}
          >
            <Box
              flex={{ md: 2 }}
              textAlign={{ base: 'center', lg: 'start' }}
              mt={{ base: '16', lg: 0 }}
            >
              <Badge fontSize="md" size={{ base: 'sm', md: 'md' }}>
                Limited Offer
              </Badge>
              <Text as="h1" variant="h1">
                Early Pricing
              </Text>
              <Text as="h2" variant="h3" color={secondaryTextColor} pb={0}>
                Pre-order for life! <br /> Offer may expire randomly.
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
                      denomination: 'mo',
                      discount: (
                        <Badge
                          mt="4"
                          colorScheme="purple"
                          fontSize="0.8em"
                          size="sm"
                        >
                          Free Forever
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
                    button={<CreateAccountButton size="md" />}
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
                      price: '$19',
                      denomination: 'life',
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
                        { text: 'Recurring reminders' },
                        { text: 'Exclusive structures' },
                        { text: 'More points' },
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
        <Container mb="24">
          <Text
            as="h2"
            variant="h2"
            fontWeight="bold"
            mb={{ base: '2', md: '10' }}
          >
            Frequently asked questions
          </Text>
          <Box maxWidth={{ md: '70%' }}>
            <Accordion allowToggle>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question}>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Text variant="bodyBig" fontWeight="bold">
                        {faq.question}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Box maxWidth={{ base: '100%', md: '70%' }}>
                      {faq.answer}
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Container>
      </MainLayout>
      <Suspense fallback={null}>
        <PricingPageScene view1Ref={view1Ref} view2Ref={view2Ref} />
      </Suspense>
    </>
  );
}

export default PricingPage;
