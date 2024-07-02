import BlogStack from "./BlogStack";
import { SimpleGrid, Container, Heading } from "@chakra-ui/react";

const Content = {
  blog1: {
    author: "John Doe",
    key: 1,
    link: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    altName: "Caffe Latte",
    title: "The perfect latte for a perfect morning",
    description:
      "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk. It consists of one-third espresso, two-thirds heated milk and about 1cm of foam. Depending on the skill of the barista, the foam can be poured in such a way to create a picture.",
    buttonText: "Read More",
    detailedDescription: "Caffè latte, also known simply as 'latte,' is a beloved coffee beverage that originated in Italy. It is traditionally made with a shot of espresso and steamed milk, creating a creamy and smooth texture. The ratio of one-third espresso to two-thirds milk provides a balanced flavor, allowing the rich taste of the coffee to shine through without being overpowering. Skilled baristas often take pride in their latte art, creating intricate designs in the foam atop the beverage. Whether enjoyed in the morning or as an afternoon treat, a perfect latte can brighten anyone's day.",
    date: "2021-06-01, 10:00 AM",
  },
  blog2: {
    author: "John Doe",
    key: 2,
    link: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altName: "vegs",
    title: "Healthy Veggies door to healthy life",
    description:
      "Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.",
    buttonText: "Read More",
    detailedDescription: "Eating a diet rich in vegetables is crucial for maintaining good health and preventing various diseases. Vegetables are packed with essential nutrients like vitamins, minerals, fiber, and antioxidants that are vital for bodily functions. They help in reducing the risk of chronic diseases such as heart disease, diabetes, and cancer. Incorporating a variety of vegetables in your diet can improve digestion, boost your immune system, and promote a healthy weight. From leafy greens to root vegetables, each type offers unique health benefits, making them a cornerstone of a nutritious diet.",
    date: "2021-06-01, 10:00 AM",
  },
  blog3: {
    author: "John Doe",
    key: 3,
    link: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altName: "Yoga",
    title: "Healthy Lifestyle with Yoga",
    description:
      "A healthy lifestyle is one which helps to keep and improve people's health and well-being. Many governments and non-governmental organizations work at promoting healthy lifestyles. They measure the benefits with critical health numbers, including weight, blood sugar, blood pressure, and blood cholesterol.",
    buttonText: "Read More",
    detailedDescription: "Yoga is an ancient practice that combines physical postures, breathing exercises, and meditation to promote overall well-being. It helps in improving flexibility, strength, and balance, while also reducing stress and anxiety. Regular yoga practice can enhance cardiovascular health, boost mental clarity, and support a healthy immune system. The mindful approach of yoga encourages a deeper connection between the mind and body, leading to greater self-awareness and emotional stability. Whether practiced at home or in a class, yoga is a powerful tool for achieving a balanced and healthy lifestyle.",
    date: "2021-06-01, 10:00 AM",
  },
  blog4: {
    author: "John Doe",
    key: 4,
    link: "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altName: "Sports",
    title: "Sports",
    description:
      "Sport includes all forms of competitive physical activity or games which, through casual or organized participation, at least in part aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment for spectators.",
    buttonText: "Read More",
    detailedDescription: "Sports are an essential part of a healthy lifestyle, offering numerous physical and mental benefits. Engaging in sports helps in maintaining physical fitness, building strength and endurance, and improving coordination and flexibility. It also promotes social interaction, teamwork, and leadership skills. Regular participation in sports can boost self-confidence, reduce stress, and enhance mood by releasing endorphins. Whether you enjoy individual sports like running or swimming or team sports like soccer or basketball, there are countless ways to stay active and have fun. Embrace the spirit of sportsmanship and challenge yourself to reach new heights.",
    date: "2021-06-01, 10:00 AM",
  },
  blog5: {
    author: "John Doe",
    key: 5,
    link: "https://images.unsplash.com/photo-1719727033384-fe3982381d8c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altName: "Festival",
    title: "Festival Celebration",
    description:
      "A festival is an event ordinarily celebrated by a community and centering on some characteristic aspect of that community and its religion or cultures. It is often marked as a local or national holiday, mela, or eid, etc.",
    buttonText: "Read More",
    detailedDescription: "Festivals are a time of celebration and joy, bringing people together to honor cultural traditions and create lasting memories. They provide an opportunity to express gratitude, share happiness, and strengthen bonds with family and friends. Festivals are often marked by special rituals, decorations, music, dance, and feasting, creating a festive atmosphere that uplifts spirits and fosters a sense of community. Whether celebrating religious holidays, seasonal events, or cultural observances, festivals play an essential role in preserving heritage and promoting unity among diverse groups. Embrace the spirit of festivity and enjoy the magic of these special occasions.",
    date: "2021-06-01, 10:00 AM",
  },
  blog6: {
    author: "John Doe",
    key: 6,
    link: "https://images.unsplash.com/photo-1719216324845-53224baf1ea3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altName: "NY Subway",
    title: "New York Subway System",
    description:
      "The New York City Subway is a rapid transit system owned by the City of New York and leased to the New York City Transit Authority, a subsidiary agency of the state-run Metropolitan Transportation Authority (MTA). Opened in 1904, the New York City Subway is one of the world's oldest public transit systems, one of the most-used, and the one with the most stations.",
    buttonText: "Read More",
    detailedDescription: "The New York City Subway is a vital part of the city's transportation network, providing millions of residents and visitors with a convenient and efficient way to travel throughout the five boroughs. With over 400 stations and 24 subway lines, the system offers extensive coverage and accessibility to various neighborhoods, landmarks, and attractions. The subway's iconic signage, distinctive tile work, and diverse architecture reflect the city's rich history and cultural heritage. Whether commuting to work, exploring the city, or attending events, the New York City Subway is an essential mode of transportation that keeps New York moving.",
    date: "2021-06-01, 10:00 AM",
  },
};

const BlogStackList = () => {
  return (
    <div>
      <Container
        maxW="container.xl"
        paddingLeft="25px"
        paddingTop={10}
        paddingRight="35px"
      >

        <SimpleGrid spacing={4} columns={{ sm: 1, md: 2, lg: 3 }} w="100%">
          {Object.values(Content).map((blog) => (
            <BlogStack key={blog.key} params={blog} />
          ))}
        </SimpleGrid>

      </Container>
    </div>
  );
};

export default BlogStackList;
