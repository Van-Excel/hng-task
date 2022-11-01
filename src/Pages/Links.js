import React from "react";
import slackicon from "../Images/slackicon.png"
import github from "../Images/github.png"



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
      url: "https://books.zuri.team/python-for-beginners?ref_id=vanexcel acheampong/",
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

        <div className="logo-link">
           <a href="https://www.slack.com/" alt="slack">
           <img src={slackicon} alt="slack" />
        </a>
        &nbsp; &nbsp; &nbsp;
           <a href="https://github.com/Van-Excel" alt="slack">
           <img src={github} alt="github" />
           </a>
        </div>
       
        </section>
  );
};

export default Link
