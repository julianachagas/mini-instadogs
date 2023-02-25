import React from 'react';
import styles from './PhotosContent.module.css';
import { useSelector } from 'react-redux';

function PhotosContent() {
  const { list } = useSelector(state => state.photos);

  return (
    <ul>
      {list.map(item => (
        <li className={`${styles.item} anime`} key={item.id}>
          <img src={item.src} alt={item.title}></img>
          <h2>{item.title}</h2>
          <span>{item.acessos}</span>
        </li>
      ))}
    </ul>
  );
}

export default PhotosContent;
