import Card from "@/components/Card/Card";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import Layout from "@/layouts/Layout/Layout";
import { dummyNews } from "@/utilities/data";

const Sports = () => {
  return (
    <Layout>
      <Card>
        <NewsListingsContainer header="SPORTS" news={dummyNews} />
      </Card>
    </Layout>
  );
};

export default Sports;
