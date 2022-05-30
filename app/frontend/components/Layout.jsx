import { usePage } from "@inertiajs/inertia-react";

export default function Layout({ children }) {
  const { notice } = usePage().props;

  return (
    <>
      <p style={{ color: "green" }}>{notice}</p>
      {children}
    </>
  );
}
