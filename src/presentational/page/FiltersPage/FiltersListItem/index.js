import React, { PropTypes } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './style';

const FiltersListItem = (props) => {
  const { caption, captionStyle, image, imageStyle, itemStyle, onPress } = props;

  let leftImage;
  if (image) {
    leftImage = (<Image style={[styles.itemImage, imageStyle]} source={image} />);
  }

  let item = (
    <View style={[styles.itemContainer, itemStyle]}>
      <Text style={[styles.itemCaption, captionStyle]} >{caption}</Text>
      {leftImage}
    </View>
  );

  if (onPress) {
    item = (
      <TouchableOpacity onPress={onPress} >
        {item}
      </TouchableOpacity>
    );
  }

  return item;
};

FiltersListItem.propTypes = {
  itemStyle: PropTypes.number,
  caption: PropTypes.string.isRequired,
  captionStyle: PropTypes.number,
  image: PropTypes.number,
  imageStyle: PropTypes.number,
};

export default FiltersListItem;
