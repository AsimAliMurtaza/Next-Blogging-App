import {
  SimpleGrid,
  CardFooter,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Button,
  Container,
  Image,
} from "@chakra-ui/react";

const truncateText = (text, length) => {
  if (text.length <= length) {
    return text;
  }
  return text.substring(0, length) + "...";
};

export default function BlogStack({
  params,
}: {
  params: {
    title: string;
    description: string;
    buttonText: string;
    link: string;
    altName: string;
    date: string;
  };
}) {
  const truncatedDescription = truncateText(params.description, 70);

  return (
    <Container maxW="container.xl" paddingTop={10}>
      <Card height="100%">
        <Image
          objectFit="cover"
          minW={{ base: "50%" }}
          borderRadius={{ base: "20px", sm: "md" }}
          height="160px"
          src={params.link}
          alt={params.altName}
        />
        <CardHeader >
          <Text fontWeight={1} fontSize={12} color="black">{params.date}</Text>
        </CardHeader>

        <CardHeader paddingBottom="0" marginTop={-10}>
          <Heading size="sm">{params.title}</Heading>
        </CardHeader>
        <CardBody paddingTop={1} paddingBottom={0} color={"silver"}>
          <Text>{truncatedDescription}</Text>
        </CardBody>
        <CardFooter display="flex" justifyContent="center" alignItems="center">
          <Button variant="outline" padding={5} marginX={5}>
            {params.buttonText}
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}
