import { metrics, colors, fonts } from '../../../../theme';

const styles = {
  container: {
    marginTop: 1,
    marginHorizontal: metrics.smallMargin,
    padding: metrics.smallMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: [fonts.style.title, {
    color: colors.blue
  }]
};

export default styles;