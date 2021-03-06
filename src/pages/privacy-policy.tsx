import type { NextPage } from 'next';

import Privacy from '../components/Privacy/Privacy';
import PrivacyContent from '../components/PrivacyContent/PrivacyContent';

import Layout from '../components/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Privacy Policy">
      <Privacy />
      <PrivacyContent />
    </Layout>
  );
};

export default Home;
