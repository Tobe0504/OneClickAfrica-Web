import Card from "@/components/Card/Card";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import Layout from "@/layouts/Layout/Layout";
import { dummyNews } from "@/utilities/data";

const Politics = () => {
  return (
    <Layout>
      <Card>
        <NewsListingsContainer header="POLITICS" news={dummyNews} />
      </Card>
    </Layout>
  );
};

export default Politics;
