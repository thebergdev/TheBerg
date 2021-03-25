export class MyLink {
  constructor(id, title, link, className, target) {
    this.id = id;
    this.title = title;
    this.link = link;
    this.className = className;
    this.target = target;
  }
}

export class MyMedia {
  constructor({id, title = "", src = "", height = "", width = "", className = "", objectFit = "", objectPosition = ""}) {
    this.id = id;
    this.title = title;
    this.src = src;
    this.height = height;
    this.width = width;
    this.className = className;
    this.objectFit = objectFit;
    this.objectPosition = objectPosition;
  }
}
