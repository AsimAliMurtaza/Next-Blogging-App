import { Flex, Heading } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import { Carousel } from "antd";

const Content = {
  blog1: {
    key: 1,
    link: "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    altName: "Caffe Latte",
    title: "The perfect latte for a perfect morning",
    description:
      "Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk. It consists of one-third espresso, two-thirds heated milk and about 1cm of foam. Depending on the skill of the barista, the foam can be poured in such a way to create a picture.",
    buttonText: "Read More",
    date: "2021-06-01, 10:00 AM",
  },
  blog2: {
    key: 2,
    link: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altName: "vegs",
    title: "Healthy Veggies door to healthy life",
    description:
      "Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning is still commonly used and is applied to plants collectively to refer to all edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.",
    buttonText: "Read More",
    date: "2021-06-01, 10:00 AM",
  },
  blog3: {
    key: 3,
    link: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altName: "Yoga",
    title: "Healthy Lifestyle with Yoga",
    description:
      "A healthy lifestyle is one which helps to keep and improve people's health and well-being. Many governments and non-governmental organizations work at promoting healthy lifestyles. They measure the benefits with critical health numbers, including weight, blood sugar, blood pressure, and blood cholesterol.",
    buttonText: "Read More",
    date: "2021-06-01, 10:00 AM",
  },
  blog4: {
    key: 4,
    link: "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altName: "Sports",
    title: "Sports",
    description:
      "Sport includes all forms of competitive physical activity or games which, through casual or organized participation, at least in part aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment for spectators.",
    buttonText: "Read More",
    date: "2021-06-01, 10:00 AM",
  },
};

const BlogCardList: React.FC = () => {
  return (
    <div>
      <Heading size="2xl" textAlign="center" paddingTop={5}>
        Trending
      </Heading>
      <Carousel autoplay>
        {Object.values(Content).map((blog) => (
          <BlogCard key={blog.key} params={blog} />
        ))}
      </Carousel>
    </div>
  );
};

export default BlogCardList;
