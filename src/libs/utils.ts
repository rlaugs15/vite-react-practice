export function cls(...classnames: string[]) {
  return classnames.join(" ");
}

export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}
