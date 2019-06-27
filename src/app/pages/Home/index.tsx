import React from "react";
import classNames from "classnames";

import { Nav, Title, P, Spacer } from "ui";
import Neighbourhood from "objects/neighbourhood";
import AccentedHeader from "app/components/ui/AccentedHeader";
import Button, { ButtonType } from "app/components/ui/Button";

import styles from "./Home.module.scss";
import RestaurantList from "app/components/ui/RestaurantList";

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

          <Title fontWeight={600} fontSize={34} colour="white">
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

      <main>
        <RestaurantList neighbourhood={neighbourhood} />
      </main>
    </div>
  );
}

export default Home;