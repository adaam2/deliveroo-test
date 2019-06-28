import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Nav, Logo, Icon, P, ImageCard, Title, RestaurantCard, AccentedHeader, Spacer, Container, Button } from "ui";
import Restaurant from "objects/restaurant";
import { ButtonType } from "../src/app/components/ui/Button";
import Home from "pages/Home";
import Neighbourhood from "objects/neighbourhood";

// Atoms
storiesOf('01 / Atoms|Logo', module).add("Logo", () => <Logo />);
storiesOf('01 / Atoms|Container', module).add("Container", () => <Container><Title>Title in container</Title></Container>)
storiesOf('01 / Atoms|Icon', module).add("User Icon", () => <Icon />)
storiesOf('01 / Atoms|Button', module).add("Button", () => (
  <Button type={ButtonType.Primary} onClick={() => action('Clicked button')}>
    Some button text
  </Button>
))
storiesOf('01 / Atoms|Paragraph', module).add("Paragraph", () => (<P>This is some paragraph level text</P>))
storiesOf('01 / Atoms|Title', module).add("Heading", () => (<Title>This is a title</Title>))

// Organisms
storiesOf('02 / Organisms|Nav', module).add("Nav", () => <Nav />);

const restaurant : Restaurant = {
  id: "123",
  name: "Adam's Diner",
  imageUrl: "https://www.placecage.com/354/202",
  tags: [
    {
      title: "Burgers"
    },
    {
      title: "Cosy"
    }
  ],
  price: 2
}
storiesOf('02 / Organisms|RestaurantCard', module).add("Restaurant card", () => <RestaurantCard {...restaurant} />)
storiesOf('02 / Organisms|ImageCard', module)
  .add("ImageCard", () => (
    <ImageCard altText="This is some alt text" imageUrl="https://www.placecage.com/354/202">
      <P>
        Hello this is some content
      </P>
    </ImageCard>
  )
);
storiesOf('02 / Organisms|AccentedHeader', module).add("Accented header", () => (
  <AccentedHeader>
    <Title colour="white">
      I ♥️ Deliveroo
    </Title>
    <Spacer />
    <P fontSize={18} colour="white">
      This is just some text below it.
    </P>
  </AccentedHeader>
))

const neighbourhood: Neighbourhood = {
  title: 'Shoreditch',
  restaurants: [
    {
      name: "Breakfast club",
      price: 1,
      imageUrl: "https://thenudge.com/wp-content/uploads/2001/09/breakfast-club-soho.jpg",
      tags: [
        {
          title: "Breakfast"
        }
      ],
      id: "123"
    },
    {
      name: "Five Guys",
      price: 1,
      imageUrl: "https://cloud.lovindublin.com/images/uploads/2018/05/_featuredImage/fiveguys2.jpeg?mtime=20180523204414%20880w",
      tags: [
        {
          title: "Burgers"
        },
        {
          title: "American"
        }
      ],
      id: "1234"
    },
    {
      name: "Homeslice",
      price: 2,
      imageUrl: "https://static1.squarespace.com/static/558d04b2e4b0750606e349c9/55a226d6e4b0417147b993be/55d4375ce4b05b3ce743c477/1439971166177/_MG_5077.jpg",
      tags: [
        {
          title: "Pizza"
        }
      ],
      id: "211"
    }
  ]
};

storiesOf('03 / Pages|Home', module).add("Home page", () => (
  <Home neighbourhood={neighbourhood} />
))