import { useEffect, useRef, useState } from 'react';

import { useFormik } from 'formik';
import JSConfetti from 'js-confetti';
import Link from 'next/link';

import { isGameDevToolsEnabled } from '@todocity/data/flags';
import {
  ESettingsMenuItems,
  SettingsModal,
} from '@todocity/features/settings/settings-modal';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { Card } from '@todocity/ui/components/card/card';
import {
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
  const confettiCanvasRef = useRef(null);
  const [jsConfetti, setJSConfetti] = useState(null);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [demoCompletedModalOpen, setDemoCompletedModalOpen] = useState(false);
  const [cityNameModalOpen, setCityNameModalOpen] = useState(false);
  const { cityName, setCityName, demoCompleted, completeDemo } =
    useLotsManagerStore((state) => ({
      cityName: state.cityName,
      setCityName: state.setCityName,
      demoCompleted: state.demoCompleted,
      completeDemo: state.completeDemo,
    }));

  useEffect(() => {
    if (!cityName) {
      setCityNameModalOpen(true);
    }
  }, [cityName]);

  useEffect(() => {
    if (demoCompleted) {
      setDemoCompletedModalOpen(true);
      jsConfetti
        ?.addConfetti({
          emojis: ['🔥', '🎇', '🎆', '🤘', '🤩', '🎯'],
        })
        .then(() => {
          jsConfetti?.addConfetti({
            emojis: ['🔥', '🎇', '🎆', '🤘', '🤩', '🎯'],
          });
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
      setCityName(values.name);
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
                  <Text variant="h2" fontWeight="bold" mb="1">
                    Welcome to TodoCity!
                  </Text>
                  <Text mb="8">
                    In order to finalize your city charter, we need a name for
                    this new city of productvity!
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
            size={{ base: 'full', md: 'xl' }}
            isCentered
            closeOnOverlayClick={false}
            closeOnEsc={false}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <Flex direction="column" p="8">
                <Text variant="h2" fontWeight="bold" mb="1" textAlign="center">
                  Thanks for playing!
                </Text>
                <Text
                  mb="8"
                  textAlign="center"
                  color="gray.600"
                  maxWidth="85%"
                  m="0 auto 48px"
                >
                  Currently the full city experience is still under
                  construction, but we will notify you as soon as we’re ready
                  for you!
                </Text>
                <Flex width="100%" gap={4}>
                  <Card
                    boxProps={{
                      flex: 1,
                      textAlign: 'center',
                      paddingTop: 4,
                      paddingX: 2,
                      minHeight: '175px', // Warning: Magic number!
                    }}
                  >
                    <Text variant="bodyBig" fontWeight="bold">
                      Want more?
                    </Text>
                    <Text variant="body" paddingBottom="6">
                      Early access, more lot points, free premium...
                    </Text>
                    <Button
                      variant="primary"
                      size="sm"
                      boxShadow="none"
                      onClick={handleShare}
                    >
                      Share TodoCity
                    </Button>
                  </Card>
                  <Card
                    boxProps={{
                      flex: 1,
                      textAlign: 'center',
                      paddingTop: 4,
                      paddingX: 2,
                    }}
                  >
                    <Text variant="bodyBig" fontWeight="bold">
                      Want Premium?
                    </Text>
                    <Text variant="body" paddingBottom="6">
                      Notifications, Reminders, Rare Structures, and more...
                    </Text>
                    <Link href="/pricing">
                      <Button variant="primary" size="sm" boxShadow="none">
                        Pre-order TodoCity
                      </Button>
                    </Link>
                  </Card>
                </Flex>
                <TodoCityLink
                  onClick={() => setDemoCompletedModalOpen(false)}
                  textAlign="center"
                  mt="4"
                >
                  Continue doing
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
