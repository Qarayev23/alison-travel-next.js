import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ClipLoader } from 'react-spinners';
import styles from './LazyImage.module.scss';

const LazyImage = ({ src, alt, sizes, className, type, borderRadius = "0.8rem" }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  return (
    <div
      style={{ borderRadius }}
      className={`${styles.container} ${isLoading ? styles.show : ''}`}
    >
      {isLoading && (
        <div
          className={`${styles.spinner} 
                      ${type === 'small' ? styles.small : ''}
                      ${type === 'middle' ? styles.middle : ''}`}
        >
          <ClipLoader color="#E63561" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        sizes={sizes}
        fill
        onLoad={() => setIsLoading(false)}
        className={`${isLoading ? styles.hidden : ''} ${className ? className : ''}`}
        key={`${src}-${isLoading}`}
        />
    </div>
  );
};

export default LazyImage;