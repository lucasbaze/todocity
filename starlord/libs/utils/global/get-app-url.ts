export function getAppUrl() {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case 'production':
      return 'https://todocity.app';
    case 'preview':
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    case 'development':
    default:
      return 'http://localhost:3000';
  }
}
