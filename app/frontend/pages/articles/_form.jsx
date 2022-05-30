import { Form, Field, ErrorMessage } from "formik";

export default function ArticleForm() {
  return (
    <Form>
      <div>
        <label style={{ display: "block" }} htmlFor="title">
          Title
        </label>
        <Field type="text" name="title" id="title" />
        <ErrorMessage name="title" component="div" />
      </div>

      <div>
        <label style={{ display: "block" }} htmlFor="content">
          Content
        </label>
        <Field as="textarea" name="content" id="content" />
        <ErrorMessage name="content" component="div" />
      </div>

      <div>
        <button type="submit">Save</button>
      </div>
    </Form>
  );
}
