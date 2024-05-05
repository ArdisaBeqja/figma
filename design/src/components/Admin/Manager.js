import * as React from "react";
function Mng() {
  const posts = [
    {
      id: 1,
      date: "19/09/2022",
      title: "Lorem ipsum",
      author: "Darlene Robertson",
      authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5f44f8b773ee49d3687f371404aa7ef27912f734d0e118d8b7ea0c93a8d53e6?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&",
    },
    {
        id: 2,
        date: "19/09/2022",
        title: "Lorem ipsum",
        author: "Darlene Robertson",
        authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5f44f8b773ee49d3687f371404aa7ef27912f734d0e118d8b7ea0c93a8d53e6?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&",
      },{
        id: 3,
        date: "19/09/2022",
        title: "Lorem ipsum",
        author: "Darlene Robertson",
        authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5f44f8b773ee49d3687f371404aa7ef27912f734d0e118d8b7ea0c93a8d53e6?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&",
      },{
        id: 4,
        date: "19/09/2022",
        title: "Lorem ipsum",
        author: "Darlene Robertson",
        authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5f44f8b773ee49d3687f371404aa7ef27912f734d0e118d8b7ea0c93a8d53e6?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&",
      },{
        id: 5,
        date: "19/09/2022",
        title: "Lorem ipsum",
        author: "Darlene Robertson",
        authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5f44f8b773ee49d3687f371404aa7ef27912f734d0e118d8b7ea0c93a8d53e6?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&",
      }
   
  ];
  return (
    <>
      <style jsx>{`
        .post-list {
          display: flex;
          flex-direction: column;
          font-size: 16px;
          color: #535353;
          font-weight: 400;
          justify-content: center;
        }
        .post-item {
          border-radius: 4px;
          box-shadow: 0px 2px 16px 0px rgba(153, 155, 168, 0.12);
          background-color: #fff;
          display: flex;
          width: 100%;
          align-items: center;
          gap: 20px;
          padding: 24px 28px;
        }
        @media (max-width: 991px) {
          .post-item {
            max-width: 100%;
            flex-wrap: wrap;
            padding: 0 20px;
          }
        }
        .post-meta {
          align-self: stretch;
          display: flex;
          align-items: center;
          gap: 20px;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .post-meta {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .post-image {
          aspect-ratio: 4.35;
          object-fit: cover;
          object-position: center;
          width: 104px;
          align-self: stretch;
          max-width: 100%;
        }
        .post-date {
          font-family: Rubik, sans-serif;
          align-self: stretch;
          margin: auto 0;
        }
        .post-title {
          color: #383838;
          align-self: stretch;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
          font: 18px/133% Rubik, sans-serif;
        }
        .post-author {
          align-self: stretch;
          display: flex;
          gap: 12px;
          font-size: 18px;
          color: #383838;
          text-align: right;
          line-height: 133%;
        }
        .author-name {
          font-family: Rubik, sans-serif;
          flex-grow: 1;
          margin: auto 0;
        }
        .author-image {
          aspect-ratio: 1;
          object-fit: cover;
          object-position: center;
          width: 32px;
          border-radius: 50%;
        }
      `}</style>
      <section className="post-list">
        {posts.map((post) => (
          <article key={post.id} className="post-item">
            <div className="post-meta">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ee06e645f43cf282e37be9daa508dbe1ab157c3172d7586280849c6d9c24354?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&"
                alt=""
                className="post-image"
                loading="lazy"
              />
              <time className="post-date">{post.date}</time>
              <h3 className="post-title">{post.title}</h3>
              <time className="post-date">{post.date}</time>
            </div>
            <div className="post-author">
              <span className="author-name">{post.author}</span>
              <img
                src={post.authorImage}
                alt={`${post.author}'s profile picture`}
                className="author-image"
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
export default Mng;