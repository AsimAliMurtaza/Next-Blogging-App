import "../../globals.css";
import { Flex } from "@chakra-ui/react";

export default function Category({
  params,
}: {
  params: { categoryid: string };
}) {
  return (
    <div>
      <Flex direction="column" align="center" height="80vh">
        <h1>Category id {params.categoryid} </h1>
      </Flex>
    </div>
  );
}
