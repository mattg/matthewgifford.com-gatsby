import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="D&D Resources" />
    <h1>D&D Resources</h1>
    <p>Links to useful D&amp;D things.</p>
    <h2>Tools</h2>
    <ul>
      <li><a href="https://azgaar.github.io/Fantasy-Map-Generator/">Azgaar's Fantasy Map Generator</a></li>
      <li><a href="https://www.dndbeyond.com">D&amp;D Beyond</a></li>
      <li><a href="https://discord.com">Discord</a></li>
      <li><a href="http://www.ringbell.co.uk/info/hdist.htm">Distance to the Horizon Calculator</a></li>
      <li><a href="https://probabletrain.itch.io/dungeon-scrawl">Dungeon Scrawl</a></li>
      <li><a href="https://www.fantasynamegenerators.com">Fantasy Name Generators</a></li>
      <li><a href="https://www.jockiemusic.com">Jockie Music</a></li>
      <li><a href="https://watabou.itch.io/medieval-fantasy-city-generator">Medieval Fantasy City Generator</a></li>
      <li><a href="https://www.youtube.com/c/MichaelGhelfiMusic/videos?view=0&sort=dd&shelf_id=0">Michael Ghelfi - RPG Ambiences & Music</a></li>
      <li><a href="https://www.owlbear.rodeo">Owlbear Rodeo</a></li>
    </ul>
    <h2>Supplies</h2>
    <ul>
      <li><a href="https://www.dieharddice.com">Die Hard Dice</a></li>
      <li><a href="/initiative-tracker.pdf">my initiative tracker</a></li>
      <li><a href="https://dnd.wizards.com/products/tabletop-games/trpg-resources/character-sheets">official character sheets</a></li>
      <li><a href="https://wyrmwoodgaming.com">Wyrmwood gaming supplies</a></li>
    </ul>
    <h2>Improving Your Game</h2>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=e-YZvLUXcR8&amp;list=PLlUk42GiU2guNzWBzxn7hs8MaV7ELLCP_">Matt Colville’s Running the Game series</a> (especially his <a href="https://www.youtube.com/watch?v=7YCVHnItKuY">video on roleplaying</a>)</li>
      <li><a href="http://plothooks.buzzsprout.com">Plot Hooks</a></li>
      <li><a href="https://slyflourish.com/">Sly Flourish</a></li>
    </ul>
    <h2>Critical Role</h2>
    <ul>
      <li><a href="https://www.youtube.com/watch?v=i-p9lWIhcLQ&amp;list=PL7atuZxmT954bCkC062rKwXTvJtcqFB8i">Campaign 1</a></li>
      <li><a href="https://www.youtube.com/watch?v=byva0hOj8CU&amp;list=PL1tiwbzkOjQxD0jjAE7PsWoaCrs0EkBH2">Campaign 2</a></li>
    </ul>
  </Layout>
);

export default IndexPage;
