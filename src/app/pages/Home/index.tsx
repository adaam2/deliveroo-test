import React from "react";
import classNames from "classnames";

import { Nav, Title, Container, P, Spacer, CardList } from "ui";
import RestaurantCard from "components/RestaurantCard";
import Neighbourhood from "objects/neighbourhood";
import AccentedHeader from "app/components/ui/AccentedHeader";
import Button, { ButtonType } from "app/components/ui/Button";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

export interface HomeProps {
  neighbourhood: Neighbourhood;
}

const Home: React.SFC<HomeProps> = ({ neighbourhood }) => {
  const buttonContainerClasses = cx({
    [styles.flexAlignedRight]: true,
    [styles.flexItem]: true
  })

  const locationContainerClasses = cx({
    [styles.flexItem]: true,
    [styles.locationContainer]: true
  })

  return (
    <div className="Home">
      <Nav />

      <AccentedHeader className={styles.flexContainer}>
        <div className={locationContainerClasses}>
          <P opacity={0.5} fontSize={16} colour="black">
            Location
          </P>

          <Title fontSize={34} colour="white">
            {neighbourhood.title}
          </Title>

          <Spacer height={10} />
        </div>
        <div className={buttonContainerClasses}>
          <Button onClick={() => alert('Clicked!')} type={ButtonType.Primary}>
            Change location
          </Button>
        </div>
      </AccentedHeader>
      <Spacer height={10} />
      <Container>
        <Spacer height={40} />
        <P fontSize={16} colour="#828585">{neighbourhood.restaurants.length} Restaurants</P>
        <Spacer height={40} />

        <CardList>
          {neighbourhood.restaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            );
          })}
        </CardList>
      </Container>
    </div>
  );
}

export default Home;