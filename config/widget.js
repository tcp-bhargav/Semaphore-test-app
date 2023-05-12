// absolute url to CMiS widget
// for development
const WIDGET_APP_URL = "http://localhost:3004";

// for build
//const WIDGET_APP_URL = "%HTTP_SERVER_URL%/%YOUR_WIDGET_PATH%";

// configuration for fields to be displayed and edited in CMiS widget
const config = [
  {
    label: "Subjects",
    // rulebase class in CS
    rulebaseClass: "Subjects-Subjects",
    // field with SAYT lookup in SES
    sesLookup: {
      indexName: "Subjects",
      conceptClass: "skos:Concept",
      lang: "en"
      /*
                filter: [
                  ["AT", "AZ-Entry"],
                  ["FA", "Leisure and culture"]
                ]
        */
    },
    newConcept: {
      taskUri: "model:Subjects",
      // Parent Concept/Concept Scheme when adding new model items
      parentUri: "http://basenamespace.smartlogic.com/ConceptScheme/Subjects",
      parentType: "ConceptScheme" // "ConceptScheme"|"Concept"
    }
  },
  {
    label: "Organizations",
    rulebaseClass: "hasOrganization"
  },
  {
    label: "People",
    rulebaseClass: "hasPerson"
  }
];
module.exports = {WIDGET_APP_URL, config};
