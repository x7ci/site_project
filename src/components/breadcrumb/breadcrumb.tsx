import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { convertBreadcrumb } from './breadcrumb-helper';
import { type Breadcrumb, type CharacterMap } from './breadcrumb.types';
import { styled } from 'stitches.config';
import { CustomNextLink } from '../stitches/custom-next-link';
import { PointedButton } from '../stitches/pointed-button';

interface BreadcrumbsProps {
  /** The title for the very first breadcrumb pointing to the root directory. Example: '/' Default: 'HOME' */
  rootLabel: string

  /** Boolean indicator if the labels should be displayed as uppercase. Example: true Default: false */
  labelsToUppercase?: boolean | undefined

  /** Array containing a list of specific characters that should be replaced in the label. This can be useful to convert special characters such as vowels. Example: [{ from: 'ae', to: 'ä' }, { from: '-', to: ' '}] Default: [{ from: '-', to: ' ' }] */
  replaceCharacterList?: CharacterMap[] | undefined

  /** A transformation function that allows to customize the label strings. Receives the label string and has to return a string. */
  transformLabel?: ((title: string) => string) | undefined
}

const Breadcrumbs = ({
  rootLabel,
  labelsToUppercase,
  replaceCharacterList,
  transformLabel,
}: BreadcrumbsProps) => {
  const router = useRouter();

  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[] | null>(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath === '/' ? [''] : router.asPath.split('/');

      const pathArray = linkPath.map((path, i) => {
        const href: string = `${linkPath.slice(0, i + 1).join('/')}`;

        return {
          breadcrumb: path,
          href,
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  return (
    <BreadcrumbContainer aria-label="breadcrumbs">
      <BreadcrumbList>
        <CustomNextLink href="/">
          <PointedButton
            fontSize={5}
            weight={3}
            type={router.pathname === '/' ? 'primary' : 'secondary'}
            size="breadcrumb"
            pointed="onlyRight"
          >
            {convertBreadcrumb(
              rootLabel,
              replaceCharacterList,
              transformLabel,
              labelsToUppercase
            )}
          </PointedButton>
        </CustomNextLink>

        {breadcrumbs && breadcrumbs.length >= 1 && breadcrumbs.map((breadcrumb: Breadcrumb, i: number) => {
          const previousRoute = i > 0 && breadcrumbs[i - 1].breadcrumb === 'posts';

          if (previousRoute) return null;

          if (!breadcrumb || breadcrumb.breadcrumb.length === 0) {
            return null;
          }

          const isActive: boolean = i === breadcrumbs.length - 1;

          return (
            <CustomNextLink href={breadcrumb.href} key={breadcrumb.href}>
              <PointedButton
                fontSize={5}
                weight={3}
                type={isActive ? 'primary' : 'secondary'}
                size="breadcrumb"
                pointed="full"
              >
                {convertBreadcrumb(
                  breadcrumb.breadcrumb,
                  replaceCharacterList,
                  transformLabel,
                  labelsToUppercase
                )}
              </PointedButton>
            </CustomNextLink>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbContainer >
  );
};

Breadcrumbs.defaultProps = {
  labelsToUppercase: false,
  replaceCharacterList: [{ from: '-', to: ' ' }],
  transformLabel: undefined,
} as BreadcrumbsProps;

const BreadcrumbContainer = styled('nav', {
  height: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'left',
  alignItems: 'center'
});

const BreadcrumbList = styled('div', {
  display: 'flex',
  flexDirection: 'row',
});

export default Breadcrumbs;
