import { useTheme } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import type { NextPage } from 'next';
import Link from 'next/link';

import { AnalButton } from '@todocity/components/anal-button/anal-button';
import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { ButtonGroup, Flex, Heading, Text } from '@todocity/ui/core';

const Logout: NextPage = () => {
  const { sizes } = useTheme();

  return (
    <AnimatePresence initial={true}>
      <MainLayout>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          height={`calc(100vh - ${sizes.header})`}
        >
          <Heading>Good Bye</Heading>
          <Text mb={6}>Hope to see you soon :)</Text>
          <ButtonGroup spacing={6}>
            <Link href="/signup">
              <AnalButton
                size="md"
                width="150px"
                analytics={{ buttonName: 'logout-back' }}
              >
                Back to city
              </AnalButton>
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mentalfloss.com/amazingfactgenerator"
            >
              <AnalButton
                size="md"
                width="150px"
                analytics={{ buttonName: 'logout-mystery' }}
              >
                Random Fact
              </AnalButton>
            </a>
          </ButtonGroup>
        </Flex>
      </MainLayout>
    </AnimatePresence>
  );
};

export default Logout;
