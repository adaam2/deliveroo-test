import { deserializeRestaurant, deserializeTags } from './';
import Tag from 'objects/tag';
import Restaurant from 'objects/restaurant';

describe('parser', () => {
  describe('deserializeRestaurant', () => {
    it('deserializes correctly', () => {
      const input = {
        "id": "123",
        "name": "something",
        "price": 2,
        "image": "http://placehold.it/240",
        tags: [
          "xmas"
        ]
      };

      const result: Restaurant = deserializeRestaurant(input);

      expect(result.id).toEqual("123");
      expect(result.name).toEqual("something");
      expect(result.price).toEqual(2);
      expect(result.imageUrl).toEqual("http://placehold.it/240");
      expect(result.tags.length).toEqual(1);
      expect(result.tags[0].title).toEqual("xmas");
    });

    describe('When there are no tags', () => {
      const input = {
        "id": "123",
        "name": "something",
        "price": 2,
        "image": "http://placehold.it/240"
      };

      const result = deserializeRestaurant(input);

      expect(result.tags.length).toEqual(0);
    });
  });

  describe('deserializeTags', () => {
    it('serializes the expected string array of tags to the correct format', () => {
      const input = ['xmas', 'nye'];
      const actual: Tag[] = deserializeTags(input);
      const expected: Tag[] = [{ title: 'xmas' }, { title: 'nye' }];

      expect(actual)
        .toEqual(expected)
    });

    describe('When a tag is an empty string', () => {
      it('does not include this item', () => {
        const input = ['', 'xmas'];
        const actual = deserializeTags(input);

        expect(actual).toEqual([{ title: 'xmas' }]);
      });
    });
  });
});
