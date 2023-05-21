import { type CharacterMap } from './breadcrumb.types';

/**
 * Takes an URL String and removes query params and hash params
 *
 * @param url - The URL string
 * @returns The transformed URL string
 *
 */
export const getPathFromUrl = (url: string): string => {
  return url.split(/[?#]/)[0];
};

/**
 * Takes a breadcrumb title (from url path) and replaces
 * special chars to more readable chars
 *
 * @param title - The breadcrumb title
 * @returns The transformed title or the result of the custom transformLabel function
 *
 */
export const convertBreadcrumb = (
  title: string,
  replaceCharacterList?: CharacterMap[],
  transformLabel?: ((title: string) => string),
  uppercase?: boolean
): string => {
  let transformedTitle = getPathFromUrl(title);

  if (transformLabel) {
    transformedTitle = transformLabel(transformedTitle);
  }

  if (replaceCharacterList) {
    for (let i = 0; i < replaceCharacterList.length; i++) {
      transformedTitle = transformedTitle.replaceAll(
        replaceCharacterList[i].from,
        replaceCharacterList[i].to
      );
    }
  }

  if (uppercase) transformedTitle = transformedTitle.toUpperCase();

  // decode for utf-8 characters and return ascii.
  return decodeURI(transformedTitle);
};
