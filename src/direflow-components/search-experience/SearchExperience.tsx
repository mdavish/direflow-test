import React from "react";
// import { Styled } from "direflow-component";
import { SearchHeadlessProvider } from "@yext/search-headless-react";
import { SearchBar, UniversalResults } from "@yext/search-ui-react";

interface SearchExperienceProps {
  experienceKey: string;
  experienceVersion: string;
  apiKey: string;
  locale: string;
}

const SearchExperience: React.FC<SearchExperienceProps> = ({
  experienceKey,
  experienceVersion,
  apiKey,
  locale
}) => {
  return (
    // <Styled styles={{}}>
    <SearchHeadlessProvider
      experienceKey={experienceKey}
      experienceVersion={experienceVersion}
      apiKey={apiKey}
      locale={locale}
    >
      <SearchBar />
      <UniversalResults
        verticalConfigMap={{}}
      />
    </SearchHeadlessProvider>
    // </Styled>
  );
}

SearchExperience.defaultProps = {
  experienceKey: "",
  experienceVersion: "",
  apiKey: "",
  locale: ""
}

export default SearchExperience;