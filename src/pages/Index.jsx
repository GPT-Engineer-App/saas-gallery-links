import { Box, Container, SimpleGrid, Image, Text, Link, Heading, VStack, Button, useColorModeValue } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const softwareProducts = [
  {
    name: "Productivity Suite",
    description: "Boost your productivity with our integrated suite of apps.",
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjBzb2Z0d2FyZXxlbnwwfHx8fDE3MDkzNjg1MTB8MA&ixlib=rb-4.0.3&q=80&w=1080',
    affiliateLink: "https://example.com/productivity-suite",
  },
  {
    name: "CRM Platform",
    description: "Manage customer relationships with ease and efficiency.",
    imageUrl: 'https://images.unsplash.com/photo-1580983561371-7f4b242d8ec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDUk0lMjBzb2Z0d2FyZXxlbnwwfHx8fDE3MDkzNjg1MTB8MA&ixlib=rb-4.0.3&q=80&w=1080',
    affiliateLink: "https://example.com/crm-platform",
  },
  {
    name: "Project Management Tool",
    description: "Keep your projects on track with our advanced management tool.",
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMHNvZnR3YXJlfGVufDB8fHx8MTcwOTM2ODUxMXww&ixlib=rb-4.0.3&q=80&w=1080',
    affiliateLink: "https://example.com/project-management",
  },
  // ... add more products as needed
];

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          SaaS Gallery
        </Heading>
        <Text>Explore our curated list of Software as a Service (SaaS) products. Click on the links to visit their respective affiliate pages.</Text>
        <SimpleGrid columns={[1, null, 3]} spacing={10}>
          {softwareProducts.map((product, index) => (
            <Box key={index} bg={bg} borderRadius="md" p={5} textAlign="center">
              <Image src={product.imageUrl} alt={product.name} borderRadius="md" />
              <Heading as="h3" size="lg" mt={4}>
                {product.name}
              </Heading>
              <Text mt={2}>{product.description}</Text>
              <Button as={Link} href={product.affiliateLink} isExternal mt={4} colorScheme="teal" rightIcon={<FaExternalLinkAlt />}>
                Learn More
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
