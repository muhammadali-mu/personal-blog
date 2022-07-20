import PostHeader from "./post-header";
import styles from "./post-content.module.scss";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlight } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p: ({ node, ...props }) => {
      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{props.children}</p>;
    },
    code: ({ children }) => {
      return (
        <SyntaxHighlight
          showLineNumbers={true}
          style={nord}
          language="javascript"
          children={children}
          wrapLongLines={true}
        />
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
