import qs from "qs";

import type { Route } from "./+types/_index";
import { ArticleCard } from "../components/article-card";
import { HexagonCard } from "../components/hexagon-card";

interface Article {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: {
    url: string;
    alternativeText: string;
  };
}

interface SliderPanel {
  id: number;
  title: string
  subheading: string
  Enabled: boolean
}

interface HexagonBlock {
  id: number;
  Text: {
    type: string;
    children: {
      type: string;
      text: string;
    }
  }
  ButtonText: string;
  ButtonURL: string;
}

interface ArticleResponse {
  data: HexagonBlock[];
}

interface LoaderData {
  articlesData: ArticleResponse;
}

export async function loader({params}: Route.LoaderArgs){
  const BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
  const path = "/api/home?populate=HexagonBlock";
  const url = new URL(path, BASE_URL);

  url.search = qs.stringify({
    populate: {
      cover: {
        fields: ["url", "alternativeText"],
      },
    },
  });

  const articlesData = await fetch(url.href);
  const data = await articlesData.json();
  console.log(data);
  return { articlesData: data as ArticleResponse };
}

export function meta(/*{}: Route.MetaArgs*/) {
  return [
    { title: "Spark Rite tools" },
    { name: "description", content: "Welcome Spark Rite tools!" },
  ];
}

export default function IndexRoute({ loaderData }: {loaderData: LoaderData }) {
  if (!loaderData) return <p>No data found!</p>;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Spark Rite tools
      </h1>
      {/* <div className="grid grid-cols-1 hexagons">
        {loaderData.articlesData.data.map((article: HexagonBlock) => (
          <HexagonCard
            text={article.Text}
            button={article.ButtonText}
            buttonurl={article.ButtonURL}
          />
        ))}
      </div> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loaderData.articlesData.data.map((article: Article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            publishedAt={article.publishedAt}
            slug={article.slug}
            cover={article.cover}
            />
        ))}
      </div> */}
    </div>
  );
}
