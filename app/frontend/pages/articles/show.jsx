import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";
import Article from "./_article";

function Show({ article }) {
  return (
    <>
      <Article {...article} />

      <p>
        <Link href={`/articles/${article.id}/edit`}>Edit this article</Link>
      </p>

      <p>
        <Link href="/articles">Back to articles</Link>
      </p>

      <button
        type="button"
        onClick={() => Inertia.delete(`/articles/${article.id}`)}
      >
        Delete this article
      </button>
    </>
  );
}

Show.layout = (page) => <Layout children={page} />;

export default Show;
