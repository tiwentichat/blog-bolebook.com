import React from "react";
import { Link } from "gatsby";
import avator from "../images/avator.jpg";

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <img className="logo" src={avator} alt="logo" />
    <div className="content">
      <div className="inner">
        <h1>Photo·the·Life
        </h1>
        <span className="slogan">生活不来就我</span>
        <br />
        <span className="slogan">我就给它拍张照</span>
        <div className="social">
          <a
            target="_blank"
            href="//bolebook.com"
            className="ico fa fa-camera"
          />
          {/* <a target="_blank" href="//www.douban.com/people/yanggc/" className="ico fa fa-douban" /> */}
        </div>
      </div>
    </div>
    <nav>
      <ul>

  
        <li>
          <a
            href="#"
            onClick={(e) => {
            e.preventDefault();
            props.onOpenArticle("about");
          }}
            >
            关于我
          </a>
        </li>

      </ul>
    </nav>
  </header>
);

export default Header;
