import React, { PropTypes } from 'react';
import { ScrollView, View, } from 'react-native';

import styles from './style';
import { images } from '../../../theme';

import FiltersListItem from '../FiltersPage/FiltersListItem';
import SportunityPageView from '../../SportunityPageView';
import SportunityAccordion from '../../SportunityAccordion';
import SportunityButton from '../../SportunityButton';

import FilterDetailPlaces from './FilterDetailPlaces';
import FilterDetailDates from './FilterDetailDates';
import FilterDetailHours from './FilterDetailHours';


const FilterDetailPage = (props) => {
  const {
    savedFilters,
    changeFilterHour,
    minHour,
    maxHour,
    changeFilterPrice,
  } = props;

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

  const renderHeader = (text) => (
    <FiltersListItem
      caption={text}
      image={images.expand_arrow}
      itemStyle={styles.headerViewStyle}
      captionStyle={styles.headerCaptionStyle}
      imageStyle={styles.headerImageStyle}
    />
  );

  const from = new Date();
  from.setDate(from.getDate() - 16);
  const to = new Date();
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() + 1);

  return (
    <SportunityPageView>
      <ScrollView automaticallyAdjustContentInsets={false}>
        <SportunityAccordion
          renderHeader={() => renderHeader('Sports')}
          collapsed={savedFiltersComponent.lenght === 0}
        >
          {savedFiltersComponent}
          <FiltersListItem
            caption="CLEAR ALL"
            itemStyle={styles.footerViewStyle}
            captionStyle={styles.footerCaptionStyle}
          />
        </SportunityAccordion>

        <SportunityAccordion
          renderHeader={() => renderHeader('Places')}
          collapsed={false}
        >
          <FilterDetailPlaces
            setAroundOfPlace={props.setAroundOfPlace}
            aroundOfPlace={props.aroundOfPlace}
          />
          <FiltersListItem
            caption="CLEAR ALL"
            itemStyle={styles.footerViewStyle}
            captionStyle={styles.footerCaptionStyle}
          />
        </SportunityAccordion>

        <SportunityAccordion
          renderHeader={() => renderHeader('Dates')}
          collapsed={false}
        >
          <FilterDetailDates
            startDate={startDate}
            selectFrom={from}
            selectTo={to}
          />
          <FiltersListItem
            caption="CLEAR ALL"
            itemStyle={styles.footerViewStyle}
            captionStyle={styles.footerCaptionStyle}
          />
        </SportunityAccordion>

        <SportunityAccordion
          renderHeader={() => renderHeader('Hours')}
          collapsed={false}
        >
          <FilterDetailHours
            onValuesChange={changeFilterHour}
            minValue={minHour}
            maxValue={maxHour}
          />
          <FiltersListItem
            caption="CLEAR ALL"
            itemStyle={styles.footerViewStyle}
            captionStyle={styles.footerCaptionStyle}
          />
        </SportunityAccordion>

        <SportunityAccordion
          renderHeader={() => renderHeader('Price')}
          collapsed={false}
        >
          <FilterDetailHours
            onValuesChange={changeFilterPrice}
            minValue={0}
            maxValue={1000}
          />
          <FiltersListItem
            caption="CLEAR ALL"
            itemStyle={styles.footerViewStyle}
            captionStyle={styles.footerCaptionStyle}
          />
        </SportunityAccordion>

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

FilterDetailPage.defaultProps = {
  savedFilters: [],
};

FilterDetailPage.propTypes = {
  setAroundOfPlace: PropTypes.func.isRequired,
  changeFilterHour: PropTypes.func.isRequired,
  changeFilterPrice: PropTypes.func.isRequired,
  aroundOfPlace: PropTypes.number,
  minHour: PropTypes.number,
  maxHour: PropTypes.number,
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  rangeHour: PropTypes.array,
  rangePrice: PropTypes.array,
  savedFilters: PropTypes.array.isRequired,
};

export default FilterDetailPage;
