import Card from "@/components/Card/Card";
import NewsListingsContainer from "@/components/NewsListingsContainer/NewsListingsContainer";
import Layout from "@/layouts/Layout/Layout";
import { dummyNews } from "@/utilities/data";

const Africa = () => {
  return (
    <Layout>
      <Card>
        <NewsListingsContainer header="AFRICA" news={dummyNews} />
      </Card>
    </Layout>
  );
};

export default Africa;
