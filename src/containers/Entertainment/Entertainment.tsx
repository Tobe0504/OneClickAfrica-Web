import Card from "@/components/Card/Card";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import Layout from "@/layouts/Layout/Layout";
import { dummyNews } from "@/utilities/data";

const Entertainment = () => {
  return (
    <Layout>
      <Card>
        <NewsListingsContainer header="ENTERTAINMENT" news={dummyNews} />
      </Card>
    </Layout>
  );
};

export default Entertainment;
