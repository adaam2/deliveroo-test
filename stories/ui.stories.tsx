import React from "react";
import { storiesOf } from '@storybook/react';

import { Nav, Logo, Icon, P, ImageCard, Title, RestaurantCard, AccentedHeader, Spacer, Container } from "ui";
import Restaurant from "objects/restaurant";

// Atoms
storiesOf('01 / Atoms|Logo', module).add("Logo", () => <Logo />);
storiesOf('01 / Atoms|Container', module).add("Container", () => <Container><Title>Title in container</Title></Container>)
storiesOf('01 / Atoms|Icon', module).add("User Icon", () => <Icon iconKey="user" />)
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