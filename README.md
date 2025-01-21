
{
  "info": {
    "name": "Postman API Collections",
    "description": "The /collections endpoints let you manage your collections.",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Rate Limit Exceeded",
      "request": {
        "method": "GET",
        "url": {
          "raw": "https://api.getpostman.com/collections",
          "protocol": "https",
          "host": ["api", "getpostman", "com"],
          "path": ["collections"]
        },
        "header": [],
        "description": "Get collections with rate limit example."
      },
      "response": [
        {
          "name": "Rate Limit Response",
          "status": "Too Many Requests",
          "code": 429,
          "body": {
            "error": "rateLimited",
            "message": "Rate limit exceeded. Please retry after some time."
          }
        }
      ]
    }
  ],
  "auth": {
    "type": "apikey",
    "apikey": [
      {
        "key": "key",
        "value": "X-API-Key",
        "type": "string"
      },
      {
        "key": "value",
        "value": "{{token}}",
        "type": "string"
      }
    ]
  },
  "variable": [
    {
      "key": "baseUrl",
      "value": "https://farming-simulator.pstmn.io"
    }
  ]
}
