export function getAppUrl() {
  switch (process.env.VERCEL_ENV) {
    case 'production':
      return 'https://todocity.app';
    case 'preview':
      return `https://${process.env.VERCEL_URL}`;
    case 'development':
    default:
      return 'http://localhost:3000';
  }
}
