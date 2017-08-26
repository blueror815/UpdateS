import React, { PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';

import FiltersListItem from './FiltersListItem';
import SportunityPageView from '../../SportunityPageView';
import SportunityAccordion from '../../SportunityAccordion';
import SportunityButton from '../../SportunityButton';

import styles from './style';
import { images } from '../../../theme';

const FiltersPage = (props) => {
  const { savedFilters, filters } = props;

  let savedFiltersComponent;
  if (savedFilters) {
    savedFiltersComponent = (
      savedFilters.map(filter =>
        <FiltersListItem
          key={filter.id}
          caption={filter.caption}
          image={images.close}
          itemStyle={styles.savedFilterStyle}
          captionStyle={styles.savedFilterCaptionStyle}
          imageStyle={styles.savedFilterImageStyle}
        />
      )
    );
  }

  const renderHeader = () => (
    <FiltersListItem
      caption="Apply saved filters"
      image={images.expand_arrow}
      itemStyle={styles.headerViewStyle}
      captionStyle={styles.headerCaptionStyle}
      imageStyle={styles.headerImageStyle}
    />
  );

  return (
    <SportunityPageView>
      <ScrollView automaticallyAdjustContentInsets={false}>
        <SportunityAccordion
          renderHeader={renderHeader}
          collapsed={savedFiltersComponent.lenght !== 0}
        >
          {savedFiltersComponent}
          <FiltersListItem
            caption="CLEAR ALL"
            itemStyle={styles.footerViewStyle}
            captionStyle={styles.footerCaptionStyle}
          />
        </SportunityAccordion>

        <View style={{ paddingVertical: 5 }} />

        {filters.map(filter =>
          <FiltersListItem
            key={filter.id}
            caption={filter.caption}
            image={images.right_arrow}
            itemStyle={styles.filterStyle}
            captionStyle={styles.filterCaptionStyle}
            imageStyle={styles.filterImageStyle}
            onPress={() => NavigationActions.filterdetail()}
          />
        )}

        <View style={styles.buttonsContainer}>
          <SportunityButton
            buttonStyle={styles.buttonStyle}
            text="APPLY"
          />
          <SportunityButton
            text="RESET"
          />
        </View>
      </ScrollView>
    </SportunityPageView>
  );
};

FiltersPage.propTypes = {
  filters: PropTypes.array.isRequired,
  savedFilters: PropTypes.array,
};

export default FiltersPage;
