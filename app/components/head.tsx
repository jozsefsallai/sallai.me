export interface HeadProps {
  title: string;
  description: string;
  coverUrl?: string;
}

export default function Head({ title, description, coverUrl }: HeadProps) {
  const baseUrl = "https://www.sallai.me";
  const finalCoverUrl = coverUrl ?? `${baseUrl}/images/social.png`;
  const faviconUrl = `${baseUrl}/images/favicon.ico`;

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <meta name="description" content={description} />
      <link rel="image_src" href={finalCoverUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="József Sallai" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={finalCoverUrl} />
      <link rel="shortcut icon" href={faviconUrl} />
      <meta httpEquiv="Cache-control" content="public" />
    </>
  );
}
