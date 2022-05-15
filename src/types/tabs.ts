export interface ITabs {
  title: string;
  content: {
    paragraph: string;
    images: Array<string>;
  };
  backgroundImage: string;
}

export interface ITabsBackground {
  backgroundImage: string;
}
