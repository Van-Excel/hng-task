import React from "react";



const data = [
    {
      url: "https://twitter.com/Van_z_excel",
      text: "Twitter",
      id: "twitter",
    },
    {
      url: "https://training.zuri.team/",
      text: "Zuri Team",
      id: "btn__zuri",
    },
    {
      url: "http://books.zuri.team/",
      text: "Zuri Books",
      id: "books",
    },
    {
      url: "https://books.zuri.team/python-for-beginners?ref_id=ejovwo-godbless/",
      text: "Python Books",
      id: "book__python",
    },
    {
      url: "https://background.zuri.team/",
      text: "Background Check for Coders",
      id: "pitch",
    },
    {
      url: "https://books.zuri.team/design-rules/",
      text: "Design Books",
      id: "book__design",
    },
  ];
  
  const Link = () => {
    return (
      <section>
        <div className="links-container">
          {data.map((urls, index) => (
            <a href={urls.url} id={urls.id} key={index}>
              {urls.text}
            </a>
          ))}
        </div>
       
        </section>
  );
};

export default Link
