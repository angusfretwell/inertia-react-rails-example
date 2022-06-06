import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link } from "@inertiajs/inertia-react";

export default function Breadcrumb({ items }) {
  return (
    <ChakraBreadcrumb fontWeight="medium" fontSize="sm">
      {items.map(({ title, href = "#", isCurrentPage }) => (
        <BreadcrumbItem key={href}>
          <BreadcrumbLink as={Link} href={href} isCurrentPage={isCurrentPage}>
            {title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </ChakraBreadcrumb>
  );
}
