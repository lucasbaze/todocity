import { useToast } from '@chakra-ui/react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { Field, Form, Formik } from 'formik';

import {
  Badge,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@todocity/ui/core';

export function Feedback() {
  const toast = useToast();

  function validateSubject(value) {
    let error;
    if (!value) {
      error = 'Subject is required';
    }
    return error;
  }

  function validateBody(value) {
    let error;
    if (!value) {
      error = 'Body is required';
    } else if (value.length < 50) {
      error = 'Body must be at least 50 characters';
    }
    return error;
  }

  async function onSubmit(values, formikBag) {
    console.log('Values: ', values);
    const functions = getFunctions();
    const sendUserFeedbackEmail = httpsCallable(
      functions,
      'sendUserFeedbackEmail'
    );
    try {
      const result = await sendUserFeedbackEmail({
        subject: values.subject,
        body: values.body,
      });
      // console.log('Result: ', result);
      formikBag.resetForm({
        values: {
          subject: '',
          body: '',
        },
      });
      toast({
        title: 'Feedback Sent',
        description: 'Lucas will respond back ASAP',
        status: 'success',
        position: 'bottom-left',
        duration: 5000,
        isClosable: true,
      });
      // toast({
      //   title: 'Account created.',
      //   description: "We've created your account for you.",
      //   status: 'success',
      //   duration: 1000,
      //   isClosable: true,
      // });
    } catch (err) {
      toast({
        title: 'Feedback Failed to send',
        description: 'You can send feedback directly to lucas@todocity.app too',
        status: 'error',
        position: 'bottom-left',
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Box width="100%">
      <Text variant="h3" fontWeight="bold">
        Feedback
      </Text>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {(props) => (
          <Form>
            <Field name="subject" validate={validateSubject}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.subject && form.touched.subject}
                >
                  <FormLabel>Subject</FormLabel>
                  <Input {...field} placeholder="I've got feedback!" />
                  <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="body" validate={validateBody}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.body && form.touched.body}>
                  <FormLabel>Body</FormLabel>
                  <Textarea
                    {...field}
                    rows="10"
                    placeholder="This app changed my life. Hopefully"
                  />
                  <FormErrorMessage>{form.errors.body}</FormErrorMessage>
                  <FormHelperText>
                    {`Must be at least 50 characters. ${
                      field.value?.length || 0
                    } / 50`}
                  </FormHelperText>
                </FormControl>
              )}
            </Field>
            <Button
              my={4}
              disabled={!props.isValid}
              isLoading={props.isSubmitting}
              type="submit"
              variant="outline"
              size="sm"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
