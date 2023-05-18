import { SlicedButton } from '@/components/stitches';
import Link from 'next/link';
import { type NextRouter, useRouter } from 'next/router';

interface Props {
  href: string
  exactPath?: boolean
  label: string
}

const NavigationBarLink = ({ href, exactPath, label }: Props) => {
  const router: NextRouter = useRouter();

  const isPrimary = exactPath ? (router.asPath === href) : (router.pathname.startsWith(href));

  return (
    <Link href={href}>
      <SlicedButton
        type={isPrimary ? 'primary' : 'secondary'}
        variant={{ '@bp3': 'standard' }}
        size={{ '@bp4': 'dense' }}
        fontSize={5}
        weight={3}
      >
        {label}
      </SlicedButton>
    </Link>
  );
};

export default NavigationBarLink;
