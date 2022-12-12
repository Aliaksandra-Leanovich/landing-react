import { useState } from "react";
import AuthorImage1 from "../../assets/blogAuth1.svg";
import AuthorImage2 from "../../assets/blogAuth2.svg";
import AuthorImage3 from "../../assets/blogAuth3.svg";
import BlogImg2 from "../../assets/blogSection2.svg";
import BlogImg3 from "../../assets/blogSection3.svg";
import BlogImg1 from "../../assets/exploreImg1.svg";
import {
  AuthorImageSC,
  AuthorInformation,
  BlockSC,
  Category,
  CategoryBlockSC,
  ContainerOfBlocksSC,
  ContainerSC,
  Date,
  Descripion,
  ImageSC,
  LinkSC,
  Name,
  SectionSC,
  Title,
  TitleSC,
} from "./style";

const config = [
  {
    category: "Category",
    date: "November 22, 2021",
    description: "Pitch termsheet backing validation focus release.",
    authorName: "Chandler Bing",
    authorImage: AuthorImage1,
    image: BlogImg1,
  },
  {
    category: "Category",
    date: "November 22, 2021",
    description:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    authorName: "Rachel Green",
    authorImage: AuthorImage2,
    image: BlogImg2,
  },
  {
    category: "Category",
    date: "November 22, 2021",
    description:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    authorName: "Monica Geller",
    authorImage: AuthorImage3,
    image: BlogImg3,
  },

  {
    category: "Category",
    date: "November 22, 2021",
    description:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    authorName: "Rachel Green",
    authorImage: AuthorImage2,
    image: BlogImg2,
  },
  {
    category: "Category",
    date: "November 22, 2021",
    description: "Pitch termsheet backing validation focus release.",
    authorName: "Chandler Bing",
    authorImage: AuthorImage1,
    image: BlogImg1,
  },
  {
    category: "Category",
    date: "November 22, 2021",
    description:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    authorName: "Monica Geller",
    authorImage: AuthorImage3,
    image: BlogImg3,
  },
];

export const BlogSection = () => {
  const [index, setIndex] = useState(3);
  const itemsToRender = config.slice(0, index);
  return (
    <SectionSC>
      <ContainerSC>
        <TitleSC>Our Blog</TitleSC>
        <Title>Value proposition accelerator product management venture</Title>
        <ContainerOfBlocksSC>
          {itemsToRender.map((block) => (
            <BlockSC>
              <div>
                <ImageSC background={block.image} />

                <CategoryBlockSC>
                  <Category>{block.category}</Category>
                  <Date>{block.date}</Date>
                </CategoryBlockSC>
                <Descripion>{block.description}</Descripion>
              </div>

              <AuthorInformation>
                <AuthorImageSC background={block.authorImage} />
                <Name>{block.authorName}</Name>
              </AuthorInformation>
            </BlockSC>
          ))}
        </ContainerOfBlocksSC>

        <LinkSC
          onClick={() => setIndex(index + 3)}
          display={index > 3 ? "none" : "block"}
        >
          Load more
        </LinkSC>
      </ContainerSC>
    </SectionSC>
  );
};
