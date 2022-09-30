import { useEffect, useState } from 'react';

import { useFormik } from 'formik';

import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from '@todocity/ui/core';

export function Onboarding() {
  const [cityNameModalOpen, setCityNameModalOpen] = useState(false);
  const { cityName, setCityName } = useLotsManagerStore((state) => ({
    cityName: state.cityName,
    setCityName: state.setCityName,
  }));

  useEffect(() => {
    if (!cityName) {
      setCityNameModalOpen(true);
    }
  }, [cityName]);

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
              In order to finalize your city charter, we need a name for this
              new city of productvity!
            </Text>
            <FormControl isInvalid={formik.errors.name && formik.touched.name}>
              <FormLabel>City Name</FormLabel>
              <Input
                name="name"
                placeholder="New Hershey, Porkland, Shoeston"
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
            >
              Name City
            </Button>
          </Flex>
        </form>
      </ModalContent>
    </Modal>
  );
}
