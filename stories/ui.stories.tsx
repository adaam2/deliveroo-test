import React from "react";
import { storiesOf } from '@storybook/react';

import { Nav, Logo, Icon, P, ImageCard, Title } from "ui";

// Atoms
storiesOf('01 / Atoms|Logo', module).add("Logo", () => <Logo />);
storiesOf('01 / Atoms|Icon', module).add("User Icon", () => <Icon iconKey="user" />)
storiesOf('01 / Atoms|Paragraph', module).add("Paragraph", () => (<P>This is some paragraph level text</P>))
storiesOf('01 / Atoms|Title', module).add("Heading", () => (<Title>This is a title</Title>))

// Organisms
storiesOf('02 / Organisms|Nav', module).add("Nav", () => <Nav />);
storiesOf('02 / Organisms|ImageCard', module)
  .add("ImageCard", () => (
    <ImageCard imageUrl="https://www.placecage.com/354/202">
      <P>
        Hello this is some content
      </P>
    </ImageCard>
  )
)