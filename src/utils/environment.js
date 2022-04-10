export const getApiUrl = () => {
  let env = process.env.NODE_ENV;
  return envKey[env];
};

const envKey = {
  development: "https://revperformance-dev.ryacom.org/",
  test: "https://revperformance-test.ryacom.org/",
  production: "https://revperformance.ryacom.org/",
};
