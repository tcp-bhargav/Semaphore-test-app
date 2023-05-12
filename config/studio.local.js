// SES installed locally
const SES_URL = "http://localhost:8983/ses";

// absolute url to DA instance
const DA_URL = "/da/urn:uuid:14e53992-e5f0-b69f-4a39-a23f763e07ec";

const KMM_URL = "/kmm";

// Api Key, to be generated in Studio->Licensed Environments->Generate Access Token
const STUDIO_API_KEY =
  "WyJTdXBlckFkbWluaXN0cmF0b3IiLDE2NTY5NDI5NjAsWyJTZW1hcGhvcmVSb290cyIsIlNlbWFwaG9yZUF1dGhlbnRpY2F0ZWRVc2VycyIsIlNlbWFwaG9yZVN1cGVyQWRtaW5pc3RyYXRvcnMiLCJTZW1hcGhvcmVBZG1pbmlzdHJhdG9ycyJdLCJNRVVDSUM0T2N6Zk9JWklOWkdGN1IybHU4dEN0eEtKaFBrZHJrSkRjNm5CbUkzN2VBaUVBcjk3S2JrRVJRa3NRam93OG5BSnVvWU91UXRMcUw1RWZoRXpXVGZCaGNuRT0iXQ";

const config = {
  STUDIO_API_KEY,
  SES_URL,
  DA_URL,
  KMM_URL
};

module.exports = config;
