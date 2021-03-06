const { ApolloError } = require("apollo-server");
const _ = require("lodash");
module.exports = {
  async speakers(session, args, { dataSources }) {
    try {
      const speakers = await dataSources.speakerAPI.getSpeakers(args);
      return speakers.filter((speaker) => {
        return _.filter(session.speakers, { id: speaker.id }).length > 0;
      });
    } catch (error) {
      return new ApolloError("Unable to get speakers", "SPEAKERAPIERROR", {
        token: "UNIQUETOKEN",
        error: error
      });
    }
  },
};
