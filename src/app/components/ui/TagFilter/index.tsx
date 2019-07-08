import React from 'react';
import Tag from "objects/tag";
import { Container } from '..';

import styles from "./TagFilter.module.scss";

export interface TagFilterProps {
  tags: Tag[];
  handleTagFilter: Function;
}

const TagFilter: React.SFC<TagFilterProps> = ({ tags, handleTagFilter }) => {
  const handleClick = (e: any, tag: Tag) => {
    e.preventDefault();
    handleTagFilter(tag);
  }
  const tagList = tags.map((tag: Tag) => {
    return (
      <div onClick={(e) => handleClick(e, tag)} className={styles.tag}>
        {tag.title} ({tag.restaurantCount})
      </div>
    )
  });

  return (
    <Container>
      {tagList}
    </Container>
  );
}

export default TagFilter;