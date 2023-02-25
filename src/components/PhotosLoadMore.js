import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewPhotos } from '../store/photos';
import Loading from './helper/Loading';
import styles from './PhotosLoadMore.module.css';

function PhotosLoadMore() {
  const dispatch = useDispatch();
  const { pages, loading, photosAvailable } = useSelector(
    state => state.photos,
  );

  function handleClick() {
    dispatch(loadNewPhotos(pages + 1));
  }

  if (!photosAvailable)
    return (
      <p style={{ textAlign: 'center', fontSize: '1.5rem', color: '#747474' }}>
        There are no more photos to show right now.
      </p>
    );

  if (loading) return <Loading />;

  return (
    <button
      className={styles.button}
      aria-label="Load More Photos"
      onClick={handleClick}
    >
      +
    </button>
  );
}

export default PhotosLoadMore;
