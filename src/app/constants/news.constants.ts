export enum NewsType {
  NEWS = "news",
  STYLE = "style",
}

export const newsType = {
  [NewsType.NEWS]: "Tin tức",
  [NewsType.STYLE]: "Style",
};
export const getNewsType = (key: string): string => {
  return newsType[key as NewsType] || "Uncategorized";
};
