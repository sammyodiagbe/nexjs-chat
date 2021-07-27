const Blog = ({ posts }) => {
  return (
    <div>
      Blog
      {posts.map((post, index) => {
        return <p key={index}>{post.title}</p>;
      })}
    </div>
  );
};

export async function getStaticProps() {
  const data = [
    {
      title: "Some random title",
      content:
        "Just some random message sitting inside of this place, let kick some ass",
    },
    { title: "Another random title", content: "Let us kick some bad asses." },
  ];

  return {
    props: {
      posts: data,
    },
  };
}

export default Blog;
