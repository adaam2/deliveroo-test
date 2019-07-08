import React, { useState, useEffect } from "react";
import classNames from "classnames";

import { Nav, Title, P, Spacer, Button, AccentedHeader, RestaurantList, TagFilter } from "ui";
import Neighbourhood from "objects/neighbourhood";
import { ButtonType } from "../../components/ui/Button";

import styles from "./Home.module.scss";

import { collectTags, filterByTag } from "../../../server/parser";
import Tag from "objects/tag";

const cx = classNames.bind(styles);

export interface HomeProps {
  neighbourhood: Neighbourhood;
}

const Home: React.SFC<HomeProps> = ({ neighbourhood }) => {
  const [restaurants, setRestaurants] = useState(neighbourhood.restaurants);

  const buttonContainerClasses = cx({
    [styles.flexAlignedRight]: true,
    [styles.flexItem]: true
  })

  const locationContainerClasses = cx({
    [styles.flexItem]: true,
    [styles.locationContainer]: true
  });

  const handleTagFilter = (tag: Tag) => {

  const result = filterByTag(neighbourhood.restaurants, tag);
    setRestaurants(result);
  };

  useEffect(() => {
    setRestaurants(restaurants);
  }, [restaurants])

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

      <TagFilter handleTagFilter={handleTagFilter} tags={collectTags(neighbourhood.restaurants)} />

      <main>
        <RestaurantList restaurants={restaurants} />
      </main>
    </div>
  );
}

export default Home;