import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  activeClassName,
  children,
  ...rest
}: IActiveLinkProps) {
  const { asPath } = useRouter();
  let className = asPath === rest.href ? activeClassName : '';

  className =
    className === '' && asPath.includes(String(rest.href)) && rest.href !== '/'
      ? activeClassName
      : className;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}
