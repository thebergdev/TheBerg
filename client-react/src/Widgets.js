import {Component} from "react";
import './widgets.css';
import {MyLink, MyMedia} from "./Entities";

//optionList: Link[], key: string
export class NavBar extends Component {
  myLinkList = [new MyLink("HomeButton", "Home", "home", "active"), new MyLink("1", "1", "1"), new MyLink("2", "2", "2", "disabled"), new MyLink("Google", "Google", "https://www.google.com/", "", "_blank")];

  render() {
    return <div id={this.props.id}>
      <nav className="my-navbar navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav ml-auto">
          {this.myLinkList.map(c => (
              <li className="nav-item">
                <a id={c.id} key={this.id + "_" + c.id} target= {c.target} href={c.link} className={"nav-link " + c.className}>{c.title}</a>
              </li>
          ))}
        </ul>
      </nav>
    </div>
  }
}

export class VideoBanner extends Component {
  myMedia = new MyMedia({id: this.props.id, title: "lofi_girl_video", src:"https://srv-store4.gofile.io/download/n1UXVA/b3af739ab7ef2c83adaf9eb928b62495/lofi_girl_loop.mp4", height: "30vh"})

  render() {
    return <div id={this.props.id} style={{height: this.myMedia.height}}>
      <video className={"my-video-banner " + this.myMedia.className} autoPlay loop muted style={{objectFit: this.myMedia.objectFit, objectPosition: this.myMedia.objectPosition}}>
        <source src={this.myMedia.src} type="video/mp4" />
      </video>
    </div>
  }
}

export class VideoBannerV extends Component {

  render() {
    return <div id={this.props.id} style={{width: this.props.width, height: "100%"}}>
      <video className={"my-video-banner " + this.props.className} autoPlay loop muted style={{objectFit: this.props.objectFit, objectPosition: this.props.objectPosition}}>
        <source src={this.props.src} type="video/mp4" />
      </video>
    </div>
  }
}