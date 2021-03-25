import {Component} from "react";
import {NavBar, VideoBanner, VideoBannerV} from "./Widgets";
import {MyLink} from "./Entities";
import './bootstrap.min.css';
import './app.css';

export class Header extends Component {

  render() {
    return <div>
      <VideoBanner
          id={"main-banner"}
      />
      <NavBar
          id={"main-menu"}
      />
    </div>
  }
}

