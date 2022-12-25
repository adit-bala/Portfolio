import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { GraphQLClient, gql } from "graphql-request";
import pfp from "../../public/Aditya-Balasubramanian.jpg";

const GetArticlesQuery = gql`
  {
    posts(orderBy: publishedAt_ASC) {
      title
      id
      content
      createdAt
      date
      num
    }
  }
`;

export let loader = async () => {
  const endpoint =
    "https://us-west-2.cdn.hygraph.com/content/clarv3czf7huu01uq06x5es1i/master";
  const auth = `Bearer ${process.env.GRAPHQL_FETCH_TOKEN}`;
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: auth,
    },
  });

  const data = await graphQLClient.request(GetArticlesQuery);
  return json({ data });
};

export default function Index() {
  let data = useLoaderData();
  console.log(data.data.posts[0]);
  return (
    <>
      <nav className="">
        <div className="container ">
          <div className="flex justify-end gap-x-8 space-x-4">
            <a
              href="/"
              className="px-8 py-2 rounded-md text-sm font-medium"
              aria-current="page"
            >
              {" "}
              Home{" "}
            </a>
            <a
              href="/"
              className="text-gray-300 hover:text-black px-8 py-2 rounded-md text-sm font-medium"
            >
              {" "}
              Blog{" "}
            </a>
          </div>
        </div>
      </nav>
      <div className="py-10 max-w-sm mx-auto items-center space-x-4 space-y-3 text-center">
        <div className="shrink-0 flex justify-center">
          <img src={pfp} className="md:h md:w rounded-full" alt="Adit"></img>
        </div>
        <div className="text-2xl font-semibold text-black">
          Aditya Balasubramanian
        </div>
        <p className="text-slate-5000">
          {" "}
          Greetings! I'm a student at UC Berkeley studying Computer Science.
          Welcome into my little corner of the internet where I house some of my
          musings!{" "}
        </p>
      </div>
      <div>
        {data.data.posts.map(({ num, title }) => (
          <div key={num}>
            <div> {title} </div>
          </div>
        ))}
      </div>
    </>
  );
}
