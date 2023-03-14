import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack 
      backgroundColor="white" 
      borderRadius="xl" 
      color="black"
    >
      <VStack>
        <Image src={imageSrc} borderRadius='xl' />
        <VStack alignItems='left' p={4}>
        <Heading>
          {title}
        </Heading>
        <Text color='gray'>{description}</Text>
        <a>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </a>
      </VStack>
      </VStack>
      

    </HStack>
    
  );
};

export default Card;
