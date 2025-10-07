import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;

type CardData = {
  name: string;
  image: string;
  description: string;
};

const data: CardData[] = [
  {
    name: "Lionel Messi",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_20180626.jpg",
    description:
      "Considerado uno de los mejores futbolistas de la historia."
  },
  {
    name: "Marie Curie",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg",
    description:
      "Pionera en el estudio de la radiactividad y primera mujer en ganar un Nobel."
  }
];

export const CardsExample = () => {
  return (
    <>
      <Title level={2}>Ejemplo de Tarjetas</Title>
      <Row gutter={[16, 16]}>
        {data.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt={item.name}
                  src={item.image}
                  style={{ height: 250, objectFit: "cover" }}
                />
              }
            >
              <Card.Meta title={item.name} description={item.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};