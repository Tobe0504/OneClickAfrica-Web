import Card from "@/components/Card/Card";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import Layout from "@/layouts/Layout/Layout";
import { dummyNews } from "@/utilities/data";

const Naija = () => {
  return (
    <Layout>
      <Card>
        <NewsListingsContainer header="NAIJA" news={dummyNews} />
      </Card>
    </Layout>
  );
};

export default Naija;
