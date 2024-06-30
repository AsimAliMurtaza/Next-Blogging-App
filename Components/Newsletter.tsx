import { Input, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Container,
  Box,
  FormHelperText,
} from "@chakra-ui/react";

export default function Newsletter() {
  return (
    <Container
      maxW="container.xl"
      paddingTop={20}
      paddingLeft="40px"
      paddingRight="55px"
      paddingBottom={5}
    >
      <Box
        padding="40px"
        background={"gray.60"}
        borderRadius="10px"
        borderWidth="2px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <FormControl>
          <FormLabel fontSize="20px" textAlign="center" marginBottom="10px">
            Subscribe to our Newsletter
          </FormLabel>
          <Input type="email" colorScheme="teal" variant="filled" />
          <FormHelperText textAlign="center">
            We'll never share your email.
          </FormHelperText>
          <Button
            type="submit"
            colorScheme="teal"
            variant="ghost"
            marginTop="10px"
          >
            Subscribe
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
