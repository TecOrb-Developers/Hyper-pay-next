const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  phase === PHASE_PRODUCTION_BUILD && process.env.SERVER_MODE === "3";
  const env = {
    RESTURL_SESSIONS: (() => {
      if (isDev)
        return {
          NEXT_GOEJAR_HYPERPAY_VISA_MASTER_ENTITYID:
            process.env.NEXT_GOEJAR_HYPERPAY_VISA_MASTER_ENTITYID,
          NEXT_GOEJAR_HYPERPAY_VISA_MADA_ENTITYID:
            process.env.NEXT_GOEJAR_HYPERPAY_VISA_MADA_ENTITYID,
          NEXT_GOEJAR_HYPERPAY_PAYMENT_WIDGET:
            process.env.NEXT_GOEJAR_HYPERPAY_PAYMENT_WIDGET,
          NEXT_HYPERPAY_PAYMENT_URL: process.env.NEXT_HYPERPAY_PAYMENT_URL,
        };
      return "RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)";
    })(),
  };
  return {
    env,
  };
};
