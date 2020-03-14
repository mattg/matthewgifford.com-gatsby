import React from "react"
import { Link } from "gatsby"
import LayoutIndex from "../components/layout-index"
import SEO from "../components/seo"

const IndexPage = () => (
  <LayoutIndex>
    <SEO title="Home" />
    <h1>Matthew Gifford</h1>
    <p>Dad to <a href="http://www.augustgifford.com/">August</a> and <a href="http://www.hazelgifford.com/">Hazel</a>. Husband to <a href="http://www.thegiffordranch.com/">Angela</a>. Developer at ❓. DM for Dragon Hunters Intercontinental. Maker of old fashioneds.</p>
    <h2>Links</h2>
    <ul>
      <li><Link to="/newsletter/">Giff’s Miscellanea</Link> (my email newsletter)</li>
      <li><Link to="/dnd-resources/">D&amp;D Resources</Link></li>
      <li><a href="https://github.com/mattg">GitHub</a></li>
      <li><a href="https://keybase.io/giff">Keybase</a></li>
      <li><a href="mailto:mgifford@gmail.com">email</a></li>
      <li><a href="http://www.amazon.com/gp/registry/wishlist/O31YDA173GFW/ref=cm_wl_rlist_go_o?sort=priority&amp;itemPerPage=25">wish list</a></li>
      <li><a href="https://cash.me/$matthewgifford">Square Cash</a></li>
    </ul>
  </LayoutIndex>
)

export default IndexPage
