// global SES url for SAYT prompts
const SES_URL = "https://cloud-test.smartlogic.com/svc/fc8d049c-29fa-4053-b0f7-ab59f0874089/SES";

// absolute url to DA instance
const DA_URL =
  "https://cloud-test.smartlogic.com/semaphore/2ea9a4f2-93f3-4992-a4ac-9d508161912b/da/urn:uuid:389f8f3c-6cd3-3f51-ddf5-02346d4d0707";

const KMM_URL = "https://cloud-test.smartlogic.com/semaphore/2ea9a4f2-93f3-4992-a4ac-9d508161912b/kmm";

// Api Key, to be generated in Studio->Licensed Environments->Generate Access Token
const STUDIO_API_KEY =
  "WyJncnplZ29yemNAc21hcnRsb2dpYy5jb20iLDE2Mjg5NDAyMzMsWyJTZW1hcGhvcmVBdXRoZW50aWNhdGVkVXNlcnMiLCJTZW1hcGhvcmVTdXBlckFkbWluaXN0cmF0b3JzIiwiU2VtYXBob3JlVXNlcnMiLCJTZW1hcGhvcmVBZG1pbmlzdHJhdG9ycyJdLCJNRVlDSVFDenlJRmFHSDFuRktJZWV2YnFQeFUwaFI0ZWU3czlCdGtheVZFVmhpSUZVUUloQU8yWkpWL0p3S2NnTXFNQ1FUSXl0Qk5ybWg4b1NPamdFSmJvM1JRRHNUdFIiXQ";

// Set CLOUD_CONFIG if you connect via cloud, otherwise leave it undefined
const STUDIO_CLOUD_CONFIG = {
  API_KEY: "K20MM3yXl7iF1PUu6g2LuA==",
  TOKEN_PROVIDER: "https://cloud-test.smartlogic.com/token"
};

const SES_CLOUD_CONFIG = STUDIO_CLOUD_CONFIG;

const config = {
  STUDIO_API_KEY,
  SES_URL,
  DA_URL,
  KMM_URL,
  SES_CLOUD_CONFIG,
  STUDIO_CLOUD_CONFIG
};

module.exports = config;
