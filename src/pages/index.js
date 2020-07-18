import React from "react";
import { Link } from "gatsby";
import LayoutIndex from "../components/layout-index";
import SEO from "../components/seo";

const IndexPage = () => (
  <LayoutIndex>
    <SEO title="Home" />
    <h1>Matthew Gifford</h1>
    <p>👨‍👩‍👧‍👦 👨‍💻 👨‍🌾 🐉 🥃</p>
    <h2>Links</h2>
    <ul>
      <li><Link to="/dnd-resources/">D&amp;D Resources</Link></li>
      <li><a href="https://github.com/mattg">GitHub</a></li>
      <li><a href="https://keybase.io/giff">Keybase</a></li>
      <li><a href="mailto:hi.giff+website@pm.me">email</a></li>
      <li><a href="http://www.amazon.com/gp/registry/wishlist/O31YDA173GFW/ref=cm_wl_rlist_go_o?sort=priority&amp;itemPerPage=25">wish list</a></li>
      <li><a href="https://cash.me/$matthewgifford">Square Cash</a></li>
    </ul>
  </LayoutIndex>
);

export default IndexPage;