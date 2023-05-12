// global SES url for SAYT prompts
const SES_URL = "http://dock13:44019/ses";

// absolute url to DA instance
const DA_URL = "http://dock13:44018/da/urn:uuid:3c9f100d-9ea3-c369-d3d4-9af7ff175a92";

// absolute url to KMM instance
const KMM_URL = "http://dock13:44018/kmm";

// Api Key, to be generated in Studio->Licensed Environments->Generate Access Token
const STUDIO_API_KEY =
  "WyJTdXBlckFkbWluaXN0cmF0b3IiLDE2Mjg3MjQ5MDgsWyJTZW1hcGhvcmVSb290cyIsIlNlbWFwaG9yZUF1dGhlbnRpY2F0ZWRVc2VycyIsIlNlbWFwaG9yZVN1cGVyQWRtaW5pc3RyYXRvcnMiLCJTZW1hcGhvcmVBZG1pbmlzdHJhdG9ycyJdLCJNRVFDSUc0WDEycU5EOVJTb2NEM09Gb2x0THRlNTROSFRpQ3ZQMmhCQTNKNnpnRWxBaUJlcHlJVUxTeXAzSWRwSzQ1L1l1b00zRHNOWlcvak9tYXBOSWE5M1ZhU1VRPT0iXQ";

const config = {
  STUDIO_API_KEY,
  SES_URL,
  DA_URL,
  KMM_URL
};

module.exports = config;
