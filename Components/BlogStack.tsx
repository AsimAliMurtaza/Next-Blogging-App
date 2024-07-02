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

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const truncateText = ({ text, length }: { text: string; length: number }): string => {
  if (text.length <= length) {
    return text;
  }
  return text.substring(0, length) + "...";
};

export default function BlogStack({
  params,
}: {
  params: {
    key: number;
    title: string;
    description: string;
    detailedDescription: string;
    buttonText: string;
    link: string;
    altName: string;
    date: string;
    author: string;
  };
}) {

  const truncatedDescription = truncateText({ text: params.description, length: 50 });

  const router = useRouter();

  const onClickHandler = () => {
    const state = encodeURIComponent(JSON.stringify(params));
    router.push(`/blog/${encodeURIComponent(params.title)}?state=${state}`);
  };
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
        <CardHeader>
          <Text fontWeight={1} fontSize={12} color="black">
            {params.date}, {params.author}
          </Text>
        </CardHeader>

        <CardHeader paddingBottom="0" marginTop={-10}>
          <Heading size="sm">{params.title}</Heading>
        </CardHeader>
        <CardBody paddingTop={1} paddingBottom={0} color={"silver"}>
          <Text>{truncatedDescription}</Text>
        </CardBody>
        <CardFooter display="flex" justifyContent="center" alignItems="center">
          <Button variant="outline" padding={5} marginX={5} onClick={onClickHandler}>
            {params.buttonText}
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}
