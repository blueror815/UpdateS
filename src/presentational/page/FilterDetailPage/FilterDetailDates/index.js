import React, { PropTypes } from 'react';
import { View, Text, ScrollView, } from 'react-native';
import Calendar from 'react-native-day-picker';

import styles from './style';
import { metrics, images } from '../../../../theme';

const FilterDetailDates = (props) => {
  const { fromDate, toDate, onDateSelected } = props;

  return (
    <View style={styles.applyView}>
      <View style={styles.datesFromToView}>
        <View style={styles.datesFromView}>
          <View style={styles.datesFromTopView}>
            <Text style={styles.fromLabel}>From</Text>
          </View>
          <View style={styles.datesFromBottomView}>
            <Text style={styles.fromValue}>Mon</Text>
            <Text style={styles.fromValue}>16 May 2016</Text>
          </View>
        </View>
        <View style={styles.datesToView}>
          <View style={styles.datesFromTopView}>
            <Text style={styles.fromLabel}>To</Text>
          </View>
          <View style={styles.datesFromBottomView}>
            <Text style={styles.fromValue}>Mon</Text>
            <Text style={styles.fromValue}>3 June 2016</Text>
          </View>
        </View>
      </View>
      <View style={styles.datePicker}>
        <ScrollView>
          <Calendar
            monthCount={12}
            startFromMonday={Boolean(true)}
            width={metrics.screenWidth - 80}
            onSelectionChange={(current, previous) => {
              onDateSelected(current, previous);
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};


FilterDetailDates.propTypes = {
  startDate: PropTypes.object,
  from: PropTypes.any,
  to: PropTypes.any,
};

export default FilterDetailDates;
