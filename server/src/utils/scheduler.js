import config from "./config";
import cron from "node-cron";
import AssetStatesInstance from "./assetStates";

const defaultPeriod = 10; // in seconds
const scheduler = cron.schedule(
  `*/${config.SCHEDULER_PERIOD_SECONDS || defaultPeriod} * * * * *`,
  () => {
    try {
      const assetLength = AssetStatesInstance.length;

      // init all states to true
      AssetStatesInstance.setAllAssetState(true);

      // set random one state to false
      const random = Math.floor(Math.random() * 10) % assetLength;
      AssetStatesInstance.setAssetState(random, false);
      console.debug(
        "[Scheduler] Updated states:",
        Object.assign({}, AssetStatesInstance.states),
        new Date()
      );
    } catch (err) {
      console.error(err);
    }
  }
);

export default scheduler;
