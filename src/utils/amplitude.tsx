import amplitude from "amplitude-js";

export const initializeAmplitude = () => {
  amplitude.getInstance().init("default", "", {
    apiEndpoint: "amplitude.nav.no/collect-auto",
    saveEvents: false,
    includeUtm: true,
    includeReferrer: true,
    platform: window.location.toString(),
  });
};

export function logAmplitudeEvent(skjemaurl: string) {
  amplitude.getInstance().logEvent("skjema åpnet", {
    skjemaurl,
  });
}
