import React from 'react';
import { Text, View, Image } from 'react-native';

import { images } from 'sportunity/src/theme';
import styles from './style';

const FeedbacksList = ({ feedbacks }) => (
  <View>

    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Feedbacks: {feedbacks.count}
      </Text>
      <Text style={styles.averageText}>
        average:
      </Text>
      <Image
        style={styles.headerIcon}
        source={images.stars4}
        resizeMode="stretch"
      />
      <Image
        style={styles.headerIcon}
        source={images.down_arrow}
      />
    </View>

    {
      feedbacks.feedbacksList.edges.length > 0 ?
        feedbacks.feedbacksList.edges.map((item, index) => (
          <View
            style={styles.container}
            key={index}
          >
            <View style={styles.itemContainer}>
              <View style={styles.photoContainer} />

              <View style={styles.itemInfoContainer}>
                <View style={styles.itemTitleContainer}>
                  <Text style={styles.itemTitleText}>
                    {item.node.text}
                  </Text>
                  <Image
                    style={styles.itemStarsIcon}
                    source={images.stars4}
                    resizeMode="stretch"
                  />
                </View>

                <Text style={styles.itemSubitleText}>
                  {item.node.author.firstName}
                </Text>

                <Text style={styles.itemParagraphText}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna.
                </Text>

              </View>
            </View>
          </View>
        ))
        : null
    }

    <View style={styles.footer} />

  </View>

);

FeedbacksList.propTypes = {
  feedbacks: React.PropTypes.object.isRequired,
};

export default FeedbacksList;
