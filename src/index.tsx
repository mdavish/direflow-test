/**
 * This is the entry file of the Direflow setup.
 *
 * You can add any additional functionality here.
 * For example, this is a good place to hook into your
 * Web Component once it's mounted on the DOM.
 *
 * !This file cannot be removed.
 * It can be left blank if not needed.
 */

import SearchExperience from './direflow-components/search-experience'

SearchExperience.then((element) => {

  /**
   * Access DOM node when it's mounted
   */
  console.log('search-experience is mounted on the DOM', element);
});
