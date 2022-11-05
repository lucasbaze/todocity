import { useEffect, useRef, useState } from 'react';

import {
  useFirestoreDocumentData,
  useFirestoreDocumentMutation,
} from '@react-query-firebase/firestore';
import { useFormik } from 'formik';
import JSConfetti from 'js-confetti';
import Link from 'next/link';

import { useAuth } from '@todocity/auth';
import { userRef } from '@todocity/data/db';
import { isGameDevToolsEnabled } from '@todocity/data/flags';
import { ESettingsMenuItems } from '@todocity/features/settings/settings-menu/settings-menu';
import { SettingsModal } from '@todocity/features/settings/settings-modal';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { Card } from '@todocity/ui/components/card/card';
import {
  Badge,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Link as TodoCityLink,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from '@todocity/ui/core';
import { getWindow } from '@todocity/utils/global/get-window';

export function Onboarding() {
  const { user } = useAuth();
  const confettiCanvasRef = useRef(null);
  const [jsConfetti, setJSConfetti] = useState(null);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [demoCompletedModalOpen, setDemoCompletedModalOpen] = useState(false);
  const [cityNameModalOpen, setCityNameModalOpen] = useState(false);
  const { demoCompleted, completeDemo } = useLotsManagerStore((state) => ({
    demoCompleted: state.demoCompleted,
    completeDemo: state.completeDemo,
  }));

  const userCityQuery = useFirestoreDocumentData(
    ['user', user.uid],
    userRef(user.uid),
    { subscribe: true },
    {
      select: (userDoc) => userDoc.city,
    }
  );

  const updateCityNameMutation = useFirestoreDocumentMutation(
    userRef(user.uid),
    { merge: true }
  );

  useEffect(() => {
    console.log('userCityQuery.data', userCityQuery.data);
    if (userCityQuery.data && !userCityQuery.data?.cityName) {
      setCityNameModalOpen(true);
    }
  }, [userCityQuery.data]);

  useEffect(() => {
    if (demoCompleted) {
      setDemoCompletedModalOpen(true);
      jsConfetti?.addConfetti({
        emojis: ['🔥', '🎇', '🎆', '🤘', '🤩', '🎯'],
      });
    }
  }, [demoCompleted, jsConfetti]);

  useEffect(() => {
    if (isGameDevToolsEnabled()) {
      // @ts-ignore
      getWindow().completeDemo = completeDemo;
    }
    const fetti = new JSConfetti({
      canvas: confettiCanvasRef.current,
    });
    setJSConfetti(fetti);
    return () => {
      confettiCanvasRef.current = null;
    };
  }, []);

  const handleConfetti = () => {
    jsConfetti?.addConfetti({
      emojis: ['✅', '🌵', '💥', '🏡', '🏢'],
    });
  };

  const handleShare = () => {
    setDemoCompletedModalOpen(true);
    setSettingsModalOpen(true);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validate: (values) => {
      console.log('Values; ', values);
      let errors: { name?: string } = {};
      if (values.name.length < 2) {
        errors.name = 'Too Short!';
      }
      return errors;
    },
    onSubmit: (values) => {
      updateCityNameMutation.mutate({
        city: {
          cityName: values.name,
        },
      });
      setCityNameModalOpen(false);
    },
  });

  return (
    <>
      {cityNameModalOpen && (
        <>
          <Modal
            isOpen={cityNameModalOpen}
            onClose={null}
            size={{ base: 'full', md: 'md' }}
            isCentered
            closeOnOverlayClick={false}
            closeOnEsc={false}
          >
            <ModalOverlay />
            <ModalContent>
              <form onSubmit={formik.handleSubmit}>
                <Flex direction="column" p="8">
                  <Text variant="h3" fontWeight="bold" mb="1">
                    Welcome to the alpha city!
                  </Text>
                  <Text mb="8">
                    TodoCity is a simple todo list app with city building at its
                    core. Get started and name your demo city!
                  </Text>
                  <FormControl
                    isInvalid={formik.errors.name && formik.touched.name}
                  >
                    <FormLabel>City Name</FormLabel>
                    <Input
                      name="name"
                      placeholder="Hershey City, Porkland, Shoeston"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <FormHelperText>You can change this later.</FormHelperText>
                    {formik.errors.name && (
                      <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    )}
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="purple"
                    variant="solid"
                    size="sm"
                    alignSelf="flex-end"
                    onClick={handleConfetti}
                  >
                    Name City
                  </Button>
                </Flex>
              </form>
            </ModalContent>
          </Modal>
          <canvas
            ref={confettiCanvasRef}
            style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}
          />
        </>
      )}
      {demoCompletedModalOpen && (
        <>
          <Modal
            isOpen={demoCompletedModalOpen}
            onClose={() => setDemoCompletedModalOpen(false)}
            size={{ base: 'full', md: 'lg' }}
            isCentered
            closeOnOverlayClick={false}
            closeOnEsc={false}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <Flex direction="column" py="8">
                <Text variant="h2" fontWeight="bold" mb="1" textAlign="center">
                  Thanks for playing!
                </Text>
                <Text
                  textAlign="center"
                  color="gray.600"
                  maxWidth="85%"
                  m="0 auto 24px"
                >
                  You have successfully completed the onboarding phase!
                </Text>
                <Card
                  boxProps={{
                    flex: 1,
                    textAlign: 'center',
                    paddingTop: 4,
                    paddingX: 2,
                    maxWidth: '60%',
                    margin: '0 auto 8px',
                  }}
                >
                  <Text variant="h3" fontWeight="bold" pb="1">
                    🤑
                  </Text>
                  <Text variant="h3" fontWeight="bold" pb="1">
                    Get premium for life!
                  </Text>
                  <Badge colorScheme="purple" fontSize="0.8em" size="sm" mb="4">
                    Coming Soon
                  </Badge>
                  <Text variant="body" pb="8">
                    Notifications, Reminders, No Ads, Exclusive Structures, and
                    more...
                  </Text>
                  <Link href="/pricing">
                    <Button variant="primary" size="md" boxShadow="none">
                      $9 for life
                    </Button>
                  </Link>
                </Card>
                <TodoCityLink
                  onClick={() => setDemoCompletedModalOpen(false)}
                  textAlign="center"
                  mt="4"
                  fontSize="12px"
                >
                  Continue Todoing
                </TodoCityLink>
              </Flex>
            </ModalContent>
          </Modal>
          <canvas
            ref={confettiCanvasRef}
            style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}
          />
        </>
      )}
      <SettingsModal
        isOpen={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
        initialState={ESettingsMenuItems.Referrals}
      />
    </>
  );
}
