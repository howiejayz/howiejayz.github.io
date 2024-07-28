import { findCountriesCached } from '@/services/db/gallery';

// export const dynamicParams = false;

export let generateStaticParams:
  | (() => Promise<{ countrySlug: string }[]>)
  | undefined = undefined;

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
if (false) {
  generateStaticParams = async () => {
    const countries = await findCountriesCached();

    if (!countries) return [];

    return countries;
  };
}

export default function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="">{children}</section>;
}
