import {
  Input,
  Textarea,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { Form, Field, ErrorMessage } from "formik";

export default function ArticleForm() {
  return (
    <Form>
      <VStack align="flex-start" spacing={4}>
        <FormControl>
          <FormLabel style={{ display: "block" }} htmlFor="title">
            Title
          </FormLabel>
          <Field as={Input} type="text" name="title" id="title" />
          <ErrorMessage name="title" component={FormErrorMessage} />
        </FormControl>

        <FormControl>
          <FormLabel style={{ display: "block" }} htmlFor="content">
            Content
          </FormLabel>
          <Field as={Textarea} name="content" id="content" />
          <ErrorMessage name="content" component={FormErrorMessage} />
        </FormControl>

        <Button type="submit">Save</Button>
      </VStack>
    </Form>
  );
}
