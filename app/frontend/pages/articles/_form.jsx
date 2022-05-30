import {
  Input,
  Textarea,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { Form, Field, ErrorMessage, useFormikContext } from "formik";

export default function ArticleForm() {
  const { errors, isSubmitting } = useFormikContext();

  return (
    <Form>
      <VStack align="flex-start" spacing={4}>
        <FormControl isInvalid={errors.title}>
          <FormLabel style={{ display: "block" }} htmlFor="title">
            Title
          </FormLabel>
          <Field as={Input} type="text" name="title" id="title" />
          <ErrorMessage name="title" component={FormErrorMessage} />
        </FormControl>

        <FormControl isInvalid={errors.content}>
          <FormLabel style={{ display: "block" }} htmlFor="content">
            Content
          </FormLabel>
          <Field as={Textarea} name="content" id="content" />
          <ErrorMessage name="content" component={FormErrorMessage} />
        </FormControl>

        <Button isLoading={isSubmitting} type="submit">
          Save
        </Button>
      </VStack>
    </Form>
  );
}
