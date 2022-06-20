/* eslint-disable react/require-default-props */
import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  source: string;
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({ source, hasBorder, alt, ...rest }: IAvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={source}
      alt={alt}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}
