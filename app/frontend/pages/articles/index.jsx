import { Link } from "@inertiajs/inertia-react";
import Layout from "../../components/Layout";
import Article from "./_article";

function Index({ articles }) {
  return (
    <>
      <h1>Articles</h1>

      {articles.map((article) => (
        <div key={article.id}>
          <Article {...article} />

          <p>
            <Link href={`/articles/${article.id}`}>Show this article</Link>
          </p>
        </div>
      ))}

      <Link href="/articles/new">New article</Link>
    </>
  );
}

Index.layout = (page) => <Layout children={page} />;

export default Index;
