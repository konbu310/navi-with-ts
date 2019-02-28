import { NotFoundError } from "navi";

interface Data {
  id: string;
  name: string;
  url: string;
  release: string;
}

const db: Data[] = [
  {
    id: "0",
    name: "Golang",
    url: "https://golang.org/",
    release: "2009年",
  },
  {
    id: "1",
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
    release: "2012年",
  },
  {
    id: "2",
    name: "Rust",
    url: "https://www.rust-lang.org/",
    release: "2006年",
  },
];

interface Api {
  fetchAll: () => {};
  fetchData: (id: number) => {};
}

export const api: Api = {
  fetchAll: async () => {
    await delay(1000);
    return db;
  },
  fetchData: async id => {
    await delay(1000);
    let data = await db[id];
    if (!data) throw new NotFoundError();
    return data;
  },
};

const delay = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
