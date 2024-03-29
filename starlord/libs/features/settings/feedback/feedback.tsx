import { useToast } from '@chakra-ui/react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { Field, Form, Formik } from 'formik';

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
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
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Feedback Failed to send',
        description: 'You can send feedback directly to lucas@todocity.app too',
        status: 'error',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      });
    }
  }

  return (
    <Box width="100%">
      <Box mb="6">
        <Text variant="h3" fontWeight="bold" mb="1">
          Feedback
        </Text>
        <Text variant="description" mb="1">
          Bugs, issues, questions, any and all feedback is welcome!
        </Text>
      </Box>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {(props) => (
          <Form>
            <Field name="subject" validate={validateSubject}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.subject && form.touched.subject}
                  mb="3"
                >
                  <FormLabel mb="1" pb="0">
                    Subject
                  </FormLabel>
                  <Input {...field} placeholder="I've got feedback!" />
                  <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="body" validate={validateBody}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.body && form.touched.body}
                  mb="3"
                >
                  <FormLabel mb="1" pb="0">
                    Body
                  </FormLabel>
                  <Textarea
                    {...field}
                    rows="8"
                    placeholder="This app changed my life..."
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
