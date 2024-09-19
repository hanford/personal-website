export async function getServerSideProps() {
  return {
    redirect: {
      destination: "https://theknot.com/erica-and-jack-wedding-day",
      permanent: false,
    },
  };
}

export default function RedirectPage() {
  return null; // The page will never be rendered because of the redirect
}
