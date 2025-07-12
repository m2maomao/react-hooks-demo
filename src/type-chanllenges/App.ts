interface Article {
  title: string;
  content: string;
  author: string;
  date: Date;
  readCount: number;
}

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type CreateArticleOption = Optional<Article, 'readCount' | 'date'>;

function createArticle(options: CreateArticleOption) {
  console.log('options: ', options);
}
createArticle({
  title: '标题',
  content: '内容',
  author: '作者',
});