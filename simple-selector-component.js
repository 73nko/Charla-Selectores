import { connect } from 'react-redux'
import { selectPagesOfResults } from './our-selectors-somewhere'

const MyComponent = () => (
  ...
);

// our select function
const select = appState => {
  // now we can use the selector we wrote
  // and imported here!
  pagesOfResults: selectPagesOfResults(appState),
  results: appState.results
}

export default connect(select)(MyComponent);