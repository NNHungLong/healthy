import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MoreButton from '../buttons/MoreButton';

import './Articles.css';
const ARTICLES = [
  {
    id: 1,
    thumbnail: 'column-1.jpg',
    date: '2021.05.07 23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ… (Clipping group)',
    tags: ['魚料理', '和食', 'DHA']
  },
  {
    id: 2,
    thumbnail: 'column-2.jpg',
    date: '2021.05.07 23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ… (Clipping group)',
    tags: ['魚料理', '和食', 'DHA']
  },
  {
    id: 3,
    thumbnail: 'column-3.jpg',
    date: '2021.05.07 23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ… (Clipping group)',
    tags: ['魚料理', '和食', 'DHA']
  },
  {
    id: 4,
    thumbnail: 'column-4.jpg',
    date: '2021.05.07 23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ… (Clipping group)',
    tags: ['魚料理', '和食', 'DHA']
  },
  {
    id: 5,
    thumbnail: 'column-5.jpg',
    date: '2021.05.07 23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ… (Clipping group)',
    tags: ['魚料理', '和食', 'DHA']
  },
  {
    id: 6,
    thumbnail: 'column-6.jpg',
    date: '2021.05.07 23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ… (Clipping group)',
    tags: ['魚料理', '和食', 'DHA']
  },
  {
    id: 7,
    thumbnail: 'column-7.jpg',
    date: '2021.05.07 23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ… (Clipping group)',
    tags: ['魚料理', '和食', 'DHA']
  },
  {
    id: 8,
    thumbnail: 'column-8.jpg',
    date: '2021.05.07 23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ… (Clipping group)',
    tags: ['魚料理', '和食', 'DHA']
  }
];

const ArticleThumbnail = ({ article }) => {
  const [image, setImage] = useState();
  useEffect(() => {
    import(/* @vite-ignore */ `../../assets/imgs/${article.thumbnail}`).then((image) => {
      setImage(image.default);
    });
  }, [article.thumbnail]);
  return <img src={image} loading='lazy' alt={`Thumbnail ${article.thumbnail}`} />;
};

ArticleThumbnail.propTypes = {
  article: PropTypes.object
};

const Articles = () => {
  const [articles, setArticles] = useState(ARTICLES);
  const handleMoreClick = () => {
    let newArticles = ARTICLES.map((article) => ({ ...article, id: articles.length + article.id }));
    setArticles((prevArticles) => [...prevArticles, ...newArticles]);
  };
  return (
    <>
      <div className='mt-8 flex flex-wrap items-center justify-center gap-8'>
        {articles.map((article) => (
          <div key={article.id} className='article-cell w-[234px]'>
            <div className='relative h-[144px] w-full overflow-hidden'>
              <ArticleThumbnail article={article} />
              <div className='absolute bottom-0 left-0 bg-primary-300 px-[8px] py-[3px] text-xs text-light'>
                {article.date}
              </div>
            </div>
            <div className='article-title text-md my-2'>{article.title}</div>
            <div className='flex gap-2 text-primary-400'>
              {article.tags.map((tag) => (
                <span key={tag} className='tag'>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='mt-8 flex items-center justify-center'>
        <MoreButton className='w-[256px]' onClick={handleMoreClick}>
          もっと見る
        </MoreButton>
      </div>
    </>
  );
};

export default Articles;
