{
	"info": {
		"_postman_id": "3f0be540-a92d-4aaa-9210-af0299ecbeaa",
		"name": "API documentation",
		"description": "# 📄 Get started here\n\nThis template contains a boilerplate for documentation that you can quickly customize and reuse.\n\n## 🔖 How to use this template\n\n- Replace the content given brackets (()) with your API's details.\n- Tips are formatted in `codespan` - feel free to read and remove them.\n    \n\n---\n\n`Start with a brief overview of what your API offers.`\n\nThe ((product name)) provides many API products, tools, and resources that enable you to ((add product value here)).\n\n`You can also list the APIs you offer, link to the relevant pages, or do both in this section.`\n\n## **Getting started guide**\n\n`List the steps or points required to start using your APIs. Make sure to cover everything required to reach success with your API as quickly as possible.`\n\nTo start using the ((add APIs here)), you need to -\n\n`The points given below are from The Postman API's documentation. You can reference it to write your own getting started guide.`\n\n- You must use a valid API Key to send requests to the API endpoints. You can get your API key from Postman's [integrations dashboard](https://go.postman.co/settings/me/api-keys).\n- The API has [rate and usage limits](https://learning.postman.com/docs/developer/postman-api/postman-api-rate-limits/).\n- The API only responds to HTTPS-secured communications. Any requests sent via HTTP return an HTTP 301 redirect to the corresponding HTTPS resources.\n- The API returns request responses in JSON format. When an API request returns an error, it is sent in the JSON response as an error key.\n    \n\n## Authentication\n\n`Add details on the authorization keys/tokens required, steps that cover how to get them, and the relevant error codes.`\n\nThe ((product name)) API uses ((add your API's authorization type)) for authentication.\n\n`The details given below are from the Postman API's documentation. You can reference it to write your own authentication section.`\n\nPostman uses API keys for authentication. You can generate a Postman API key in the [API keys](https://postman.postman.co/settings/me/api-keys) section of your Postman account settings.\n\nYou must include an API key in each request to the Postman API with the X-Api-Key request header.\n\n### Authentication error response\n\nIf an API key is missing, malformed, or invalid, you will receive an HTTP 401 Unauthorized response code.\n\n## Rate and usage limits\n\n`Use this section to cover your APIs' terms of use. Include API limits, constraints, and relevant error codes, so consumers understand the permitted API usage and practices.`\n\n`The example given below is from The Postman API's documentation. Use it as a reference to write your APIs' terms of use.`\n\nAPI access rate limits apply at a per-API key basis in unit time. The limit is 300 requests per minute. Also, depending on your plan, you may have usage limits. If you exceed either limit, your request will return an HTTP 429 Too Many Requests status code.\n\nEach API response returns the following set of headers to help you identify your use status:\n\n| Header | Description |\n| --- | --- |\n| `X-RateLimit-Limit` | The maximum number of requests that the consumer is permitted to make per minute. |\n| `X-RateLimit-Remaining` | The number of requests remaining in the current rate limit window. |\n| `X-RateLimit-Reset` | The time at which the current rate limit window resets in UTC epoch seconds. |\n\n### 503 response\n\nAn HTTP `503` response from our servers indicates there is an unexpected spike in API access traffic. The server is usually operational within the next five minutes. If the outage persists or you receive any other form of an HTTP `5XX` error, [contact support](https://support.postman.com/hc/en-us/requests/new/).\n\n### **Need some help?**\n\n`Add links that customers can refer to whenever they need help.`\n\nIn case you have questions, go through our tutorials ((link to your video or help documentation here)). Or visit our FAQ page ((link to the relevant page)).\n\nOr you can check out our community forum, there’s a good chance our community has an answer for you. Visit our developer forum ((link to developer forum)) to review topics, ask questions, and learn from others.\n\n`You can also document or add links to libraries, code examples, and other resources needed to make a request.`",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "21769012"
	},
	"item": [
		{
			"name": "User",
			"item": [
				{
					"name": "register",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"name\": \"one\",\r\n  \"email\": \"one@gmail.com\",\r\n  \"password\":\"123456789\",\r\n  \"phone\": \"1234567890\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/api/users/register",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"users",
								"register"
							]
						},
						"description": "Gets information about the authenticated user."
					},
					"response": [
						{
							"name": "Successful Response",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/me",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"me"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"name": "Content-Type",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"user\": {\n        \"id\": 12345678,\n        \"username\": \"taylor-lee\",\n        \"email\": \"taylor.lee@example.com\",\n        \"fullName\": \"Taylor Lee\",\n        \"avatar\": \"https://example.com/user/r5u9qpvmujfjf6lbqmga.jpg\",\n        \"isPublic\": true\n    },\n    \"operations\": [\n        {\n            \"name\": \"mock_usage\",\n            \"limit\": 1000000,\n            \"usage\": 110276,\n            \"overage\": 0\n        },\n        {\n            \"name\": \"monitor_request_runs\",\n            \"limit\": 10000000,\n            \"usage\": 1141750,\n            \"overage\": 0\n        },\n        {\n            \"name\": \"api_usage\",\n            \"limit\": 1000000,\n            \"usage\": 16240,\n            \"overage\": 0\n        },\n        {\n            \"name\": \"custom_domains\",\n            \"limit\": 25,\n            \"usage\": 25,\n            \"overage\": 0\n        },\n        {\n            \"name\": \"serverless_requests\",\n            \"limit\": 10000,\n            \"usage\": 0,\n            \"overage\": 0\n        },\n        {\n            \"name\": \"integrations\",\n            \"limit\": 5000,\n            \"usage\": 1018,\n            \"overage\": 0\n        },\n        {\n            \"name\": \"cloud_agent_requests\",\n            \"limit\": 1000000,\n            \"usage\": 1615,\n            \"overage\": 0\n        }\n    ]\n}"
						},
						{
							"name": "Rate Limit Exceeded",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/me",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"me"
									]
								}
							},
							"status": "Too Many Requests",
							"code": 429,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": \"rateLimited\",\n    \"message\": \"Rate limit exceeded. Please retry after 1669048687\"\n}"
						}
					]
				},
				{
					"name": "login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n \r\n  \"email\": \"one@gmail.com\",\r\n  \"password\": \"123456789\"\r\n \r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/api/users/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"users",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "update",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"userId\": \"678a3b87f7576d64eb9b8583\",\r\n  \"name\": \"John Doe Updated\",\r\n  \"email\": \"john_updated@example.com\",\r\n  \"phone\": \"0987654321\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/api/users/update",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"users",
								"update"
							]
						}
					},
					"response": []
				},
				{
					"name": "get user details",
					"request": {
						"method": "GET",
						"header": []
					},
					"response": []
				},
				{
					"name": "deactivate users",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"userId\": \"678a3b87f7576d64eb9b8583\"\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/api/users/deactivate",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"api",
								"users",
								"deactivate"
							]
						}
					},
					"response": []
				}
			],
			"description": "The `/me` endpoints let you manage information about the authenticated user."
		},
		{
			"name": "admin",
			"item": [
				{
					"name": "Admin login",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n  \"email\": \"admin@example.com\",\r\n  \"password\": \"admin123\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/admin/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"admin",
								"login"
							],
							"query": [
								{
									"key": "access_key",
									"value": "{{accessKey}}",
									"description": "Optional. A collection's read-only access key. Using this query parameter does not require an API key to call the endpoint.",
									"disabled": true
								}
							]
						},
						"description": "Gets information about a collection. For a complete list of this endpoint's possible values, use the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json)."
					},
					"response": [
						{
							"name": "Successful Response",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"name": "Content-Type",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"collection\": {\n        \"info\": {\n            \"name\": \"Test Collection\",\n            \"description\": \"This is a test collection that makes a tiny request to Postman Echo service to get the list of request headers sent by a HTTP client.\",\n            \"_postman_id\": \"12ece9e1-2abf-4edc-8e34-de66e74114d2\",\n            \"schema\": \"https://schema.getpostman.com/json/collection/v2.0.0/collection.json\",\n            \"updatedAt\": \"2022-06-16T20:21:13.000Z\",\n            \"fork\": {\n                \"label\": \"Test Fork\",\n                \"createdAt\": \"2022-06-16T19:51:44.069Z\",\n                \"from\": \"12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2\"\n            }\n        },\n        \"item\": [\n            {\n                \"name\": \"Test GET Response\",\n                \"id\": \"82ee981b-e19f-962a-401e-ea34ebfb4848\",\n                \"event\": [\n                    {\n                        \"listen\": \"test\",\n                        \"script\": {\n                            \"id\": \"7d2334fc-a84a-4c3d-b26c-7529afa4c0ae\",\n                            \"exec\": [\n                                \"pm.test(\\\"Status code is 200\\\", function () {\",\n                                \"    pm.response.to.have.status(200);\",\n                                \"});\"\n                            ],\n                            \"type\": \"text/javascript\"\n                        }\n                    }\n                ],\n                \"request\": {\n                    \"url\": \"https://echo.getpostman.com/headers\",\n                    \"method\": \"GET\",\n                    \"header\": [\n                        {\n                            \"key\": \"Content-Type\",\n                            \"value\": \"application/json\"\n                        }\n                    ]\n                },\n                \"response\": []\n            }\n        ]\n    }\n}"
						},
						{
							"name": "Get Collection with Access Token",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2?access_key={{accessKey}}",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									],
									"query": [
										{
											"key": "access_key",
											"value": "{{accessKey}}"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"collection\": {\n        \"info\": {\n            \"name\": \"Test Collection\",\n            \"description\": \"This is a test collection that makes a tiny request to Postman Echo service to get the list of request headers sent by a HTTP client.\",\n            \"_postman_id\": \"12ece9e1-2abf-4edc-8e34-de66e74114d2\",\n            \"schema\": \"https://schema.getpostman.com/json/collection/v2.0.0/collection.json\",\n            \"updatedAt\": \"2022-06-16T20:21:13.000Z\",\n            \"fork\": {\n                \"label\": \"Test Fork\",\n                \"createdAt\": \"2022-06-16T19:51:44.069Z\",\n                \"from\": \"12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2\"\n            }\n        },\n        \"item\": [\n            {\n                \"name\": \"Test GET Response\",\n                \"id\": \"82ee981b-e19f-962a-401e-ea34ebfb4848\",\n                \"event\": [\n                    {\n                        \"listen\": \"test\",\n                        \"script\": {\n                            \"id\": \"7d2334fc-a84a-4c3d-b26c-7529afa4c0ae\",\n                            \"exec\": [\n                                \"pm.test(\\\"Status code is 200\\\", function () {\",\n                                \"    pm.response.to.have.status(200);\",\n                                \"});\"\n                            ],\n                            \"type\": \"text/javascript\"\n                        }\n                    }\n                ],\n                \"request\": {\n                    \"url\": \"https://echo.getpostman.com/headers\",\n                    \"method\": \"GET\",\n                    \"header\": [\n                        {\n                            \"key\": \"Content-Type\",\n                            \"value\": \"application/json\"\n                        }\n                    ]\n                },\n                \"response\": []\n            }\n        ]\n    }\n}"
						},
						{
							"name": "Not Found",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"error\": {\n        \"name\": \"instanceNotFoundError\",\n        \"message\": \"We could not find the collection you are looking for\"\n    }\n}"
						},
						{
							"name": "Rate Limit Exceeded",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "Too Many Requests",
							"code": 429,
							"_postman_previewlanguage": "json",
							"header": [],
							"cookie": [],
							"body": "{\n    \"error\": \"rateLimited\",\n    \"message\": \"Rate limit exceeded. Please retry after 1669048687\"\n}"
						}
					]
				},
				{
					"name": "get all users using admin",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OGNkZDJiZDU0NDQ5ZjBlNTdhNDg4ZSIsImlzU3VwZXJBZG1pbiI6dHJ1ZSwiaWF0IjoxNzM3MzE5ODk1LCJleHAiOjE3Mzc0MDYyOTV9.JWSUewIoKqKeGq8oBiCLGfUXB4WIImMmn7gbVtbhQzE",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:3000/admin/users",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"admin",
								"users"
							]
						},
						"description": "Deletes a collection."
					},
					"response": [
						{
							"name": "Successful Response",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"collection\": {\n        \"id\": \"12ece9e1-2abf-4edc-8e34-de66e74114d2\",\n        \"uid\": \"12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2\"\n    }\n}"
						},
						{
							"name": "Not Found",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"name": "Content-Type",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": {\n        \"name\": \"instanceNotFoundError\",\n        \"message\": \"The specified item does not exist.\",\n        \"details\": {\n            \"item\": \"collection\",\n            \"id\": \"12ece9e1-2abf-4edc-8e34-de66e74114d2\"\n        }\n    }\n}"
						},
						{
							"name": "Rate Limit Exceeded",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "Too Many Requests",
							"code": 429,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": \"rateLimited\",\n    \"message\": \"Rate limit exceeded. Please retry after 1669048687\"\n}"
						}
					]
				},
				{
					"name": "deactivate users  account",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript",
								"packages": {}
							}
						}
					],
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "Authorization",
								"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OGNkZDJiZDU0NDQ5ZjBlNTdhNDg4ZSIsImlzU3VwZXJBZG1pbiI6dHJ1ZSwiaWF0IjoxNzM3MzE5ODk1LCJleHAiOjE3Mzc0MDYyOTV9.JWSUewIoKqKeGq8oBiCLGfUXB4WIImMmn7gbVtbhQzE",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"collection\": {\n        \"info\": {\n            \"name\": \"{{collectionName}}\",\n            \"schema\": \"{{collectionSchemaUrl}}\"\n        },\n        \"item\": [\n            {\n                \"request\": {}\n            }\n        ]\n    }\n}"
						},
						"url": {
							"raw": "http://localhost:3000/admin/users/deactivate/678de58212d2d8a81f3aa079",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"admin",
								"users",
								"deactivate",
								"678de58212d2d8a81f3aa079"
							]
						},
						"description": "Updates a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html). Include a `collection` object in the request body that contains the following required properties:\n\n- `info` — An **object** that contains the following properties:\n    - `name` — A **string** value that contains the collection's name.\n    - `schema` — A **string** that contains a URL to the collection's schema. For example, the `https://schema.getpostman.com/collection/v1` URL.\n- `item` — An **object** that contains the HTTP request and response information.\n    - `request` — An **object** that contains the collection's request information. For a complete list of values, refer to the `definitions.request` entry in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json). If you pass an empty object for this value, the system defaults to an untitled GET request.\n\n**Note:**\n\n- For a complete list of available property values for this endpoint, use the following references available in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json):\n    - `info` object — Use the `definitions.info` entry.\n    - `item` object — Use the `definitions.items` entry.\n- For all other possible values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).\n    \n\n### Important\n\nUse caution when using this endpoint. The system will replace the existing collection with the values passed in the request body."
					},
					"response": [
						{
							"name": "Successful Response",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"collection\": {\n        \"info\": {\n            \"name\": \"Test Collection\",\n            \"description\": \"This collection makes a request to the Postman Echo service to get a list of request headers sent by an HTTP client.\",\n            \"schema\": \"https://schema.getpostman.com/json/collection/v2.1.0/collection.json\"\n        },\n        \"item\": [\n            {\n                \"name\": \"Test POST Response\",\n                \"event\": [\n                    {\n                        \"listen\": \"test\",\n                        \"script\": {\n                            \"id\": \"7d2334fc-a84a-4c3d-b26c-7529afa4c0ae\",\n                            \"exec\": [\n                                \"pm.test(\\\"Status code is 200\\\", function () {\",\n                                \"    pm.response.to.have.status(200);\",\n                                \"});\"\n                                ],\n                            \"type\": \"text/javascript\"\n                            }\n                        }\n                    ],\n                \"request\": {\n                    \"url\": \"https://echo.getpostman.com/headers\",\n                    \"method\": \"POST\",\n                    \"header\": [\n                        {\n                            \"key\": \"Content-Type\",\n                            \"value\": \"application/json\"\n                        }\n                    ]\n                }\n            }\n        ]\n    }\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"name": "Content-Type",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"collection\": {\n        \"id\": \"12ece9e1-2abf-4edc-8e34-de66e74114d2\",\n        \"name\": \"Test Collection\",\n        \"uid\": \"12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2\"\n    }\n}"
						},
						{
							"name": "Forbidden",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"collection\": {\n        \"info\": {\n            \"name\": \"Test Collection\",\n            \"description\": \"This collection makes a request to the Postman Echo service to get a list of request headers sent by an HTTP client.\",\n            \"schema\": \"https://schema.getpostman.com/json/collection/v2.1.0/collection.json\"\n        },\n        \"item\": [\n            {\n                \"name\": \"Test POST Response\",\n                \"event\": [\n                    {\n                        \"listen\": \"test\",\n                        \"script\": {\n                            \"id\": \"7d2334fc-a84a-4c3d-b26c-7529afa4c0ae\",\n                            \"exec\": [\n                                \"pm.test(\\\"Status code is 200\\\", function () {\",\n                                \"    pm.response.to.have.status(200);\",\n                                \"});\"\n                                ],\n                            \"type\": \"text/javascript\"\n                            }\n                        }\n                    ],\n                \"request\": {\n                    \"url\": \"https://echo.getpostman.com/headers\",\n                    \"method\": \"POST\",\n                    \"header\": [\n                        {\n                            \"key\": \"Content-Type\",\n                            \"value\": \"application/json\"\n                        }\n                    ]\n                }\n            }\n        ]\n    }\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "Forbidden",
							"code": 403,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": {\n        \"name\": \"forbiddenError\",\n        \"message\": \"You do not have enough permissions to perform this action.\"\n    }\n}"
						},
						{
							"name": "Not Found",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"collection\": {\n        \"info\": {\n            \"name\": \"Test Collection\",\n            \"description\": \"This collection makes a request to the Postman Echo service to get a list of request headers sent by an HTTP client.\",\n            \"schema\": \"https://schema.getpostman.com/json/collection/v2.1.0/collection.json\"\n        },\n        \"item\": [\n            {\n                \"name\": \"Test POST Response\",\n                \"event\": [\n                    {\n                        \"listen\": \"test\",\n                        \"script\": {\n                            \"id\": \"7d2334fc-a84a-4c3d-b26c-7529afa4c0ae\",\n                            \"exec\": [\n                                \"pm.test(\\\"Status code is 200\\\", function () {\",\n                                \"    pm.response.to.have.status(200);\",\n                                \"});\"\n                                ],\n                            \"type\": \"text/javascript\"\n                            }\n                        }\n                    ],\n                \"request\": {\n                    \"url\": \"https://echo.getpostman.com/headers\",\n                    \"method\": \"POST\",\n                    \"header\": [\n                        {\n                            \"key\": \"Content-Type\",\n                            \"value\": \"application/json\"\n                        }\n                    ]\n                }\n            }\n        ]\n    }\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "Not Found",
							"code": 404,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"name": "Content-Type",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": {\n        \"name\": \"instanceNotFoundError\",\n        \"message\": \"The specified item does not exist.\",\n        \"details\": {\n            \"item\": \"collection\",\n            \"id\": \"12ece9e1-2abf-4edc-8e34-de66e74114d2\"\n        }\n    }\n}"
						},
						{
							"name": "Malformed Request",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"collection\": {\n        \"info\": {\n            \"name\": \"Test Collection\"\n        }\n    }\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"name": "Content-Type",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": {\n        \"name\": \"malformedRequestError\",\n        \"message\": \"Found 2 errors with the supplied collection.\",\n        \"details\": [\n            \": must have required property 'item'\",\n            \"info: must have required property 'schema'\"\n        ]\n    }\n}"
						},
						{
							"name": "Collection ID Mismatch",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"collection\": {\n        \"info\": {\n            \"name\": \"Test Collection\",\n            \"description\": \"This collection makes a request to the Postman Echo service to get a list of request headers sent by an HTTP client.\",\n            \"schema\": \"https://schema.getpostman.com/json/collection/v2.1.0/collection.json\"\n        },\n        \"item\": [\n            {\n                \"name\": \"Test POST Response\",\n                \"event\": [\n                    {\n                        \"listen\": \"test\",\n                        \"script\": {\n                            \"id\": \"7d2334fc-a84a-4c3d-b26c-7529afa4c0ae\",\n                            \"exec\": [\n                                \"pm.test(\\\"Status code is 200\\\", function () {\",\n                                \"    pm.response.to.have.status(200);\",\n                                \"});\"\n                                ],\n                            \"type\": \"text/javascript\"\n                            }\n                        }\n                    ],\n                \"request\": {\n                    \"url\": \"https://echo.getpostman.com/headers\",\n                    \"method\": \"POST\",\n                    \"header\": [\n                        {\n                            \"key\": \"Content-Type\",\n                            \"value\": \"application/json\"\n                        }\n                    ]\n                }\n            }\n        ]\n    }\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"name": "Content-Type",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": {\n        \"name\": \"collectionMismatchError\",\n        \"message\": \"The collection ID in the path does not match the collection ID in the request body.\"\n    }\n}"
						},
						{
							"name": "Rate Limit Exceeded",
							"originalRequest": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"collection\": {\n        \"info\": {\n            \"name\": \"Test Collection\",\n            \"description\": \"This collection makes a request to the Postman Echo service to get a list of request headers sent by an HTTP client.\",\n            \"schema\": \"https://schema.getpostman.com/json/collection/v2.1.0/collection.json\"\n        },\n        \"item\": [\n            {\n                \"name\": \"Test POST Response\",\n                \"event\": [\n                    {\n                        \"listen\": \"test\",\n                        \"script\": {\n                            \"id\": \"7d2334fc-a84a-4c3d-b26c-7529afa4c0ae\",\n                            \"exec\": [\n                                \"pm.test(\\\"Status code is 200\\\", function () {\",\n                                \"    pm.response.to.have.status(200);\",\n                                \"});\"\n                                ],\n                            \"type\": \"text/javascript\"\n                            }\n                        }\n                    ],\n                \"request\": {\n                    \"url\": \"https://echo.getpostman.com/headers\",\n                    \"method\": \"POST\",\n                    \"header\": [\n                        {\n                            \"key\": \"Content-Type\",\n                            \"value\": \"application/json\"\n                        }\n                    ]\n                }\n            }\n        ]\n    }\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "https://api.getpostman.com/collections/12ece9e1-2abf-4edc-8e34-de66e74114d2",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections",
										"12ece9e1-2abf-4edc-8e34-de66e74114d2"
									]
								}
							},
							"status": "Too Many Requests",
							"code": 429,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": \"rateLimited\",\n    \"message\": \"Rate limit exceeded. Please retry after 1669048687\"\n}"
						}
					]
				},
				{
					"name": "Get all collections",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									""
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "https://api.getpostman.com/collections",
							"protocol": "https",
							"host": [
								"api",
								"getpostman",
								"com"
							],
							"path": [
								"collections"
							],
							"query": [
								{
									"key": "workspace",
									"value": "{{workspaceId}}",
									"description": "Optional. A workspace ID.",
									"disabled": true
								}
							]
						},
						"description": "Gets all of your [collections](https://www.getpostman.com/docs/collections). The response includes all of your subscribed collections."
					},
					"response": [
						{
							"name": "Successful Response",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/collections",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections"
									],
									"query": [
										{
											"key": "workspace",
											"value": "1f0df51a-8658-4ee8-a2a1-d2567dfa09a9",
											"description": "Optional. A workspace ID.",
											"disabled": true
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"collections\": [\n        {\n            \"id\": \"dac5eac9-148d-a32e-b76b-3edee9da28f7\",\n            \"name\": \"Cloud API\",\n            \"owner\": \"12345678\",\n            \"createdAt\": \"2022-04-12T10:29:46.000Z\",\n            \"updatedAt\": \"2022-04-12T10:29:56.000Z\",\n            \"uid\": \"12345678-dac5eac9-148d-a32e-b76b-3edee9da28f7\",\n            \"isPublic\": true\n        },\n        {\n            \"id\": \"12ece9e1-2abf-4edc-8e34-de66e74114d2\",\n            \"name\": \"Test Collection\",\n            \"owner\": \"12345678\",\n            \"createdAt\": \"2022-01-13T10:21:46.000Z\",\n            \"updatedAt\": \"2022-02-12T11:29:56.000Z\",\n            \"uid\": \"12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2\",\n            \"isPublic\": false,\n            \"fork\": {\n                \"label\": \"Test Fork\",\n                \"createdAt\": \"2022-06-16T19:51:44.069Z\",\n                \"from\": \"12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2\"\n            }\n        },\n        {\n            \"id\": \"f695cab7-6878-eb55-7943-ad88e1ccfd65\",\n            \"name\": \"Postman Echo\",\n            \"owner\": \"12345678\",\n            \"createdAt\": \"2021-04-11T09:18:26.000Z\",\n            \"updatedAt\": \"2022-05-01T15:29:32.000Z\",\n            \"uid\": \"12345678-f695cab7-6878-eb55-7943-ad88e1ccfd65\",\n            \"isPublic\": true\n        }\n    ]\n}"
						},
						{
							"name": "Filter by Workspace",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/collections?workspace=1f0df51a-8658-4ee8-a2a1-d2567dfa09a9",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections"
									],
									"query": [
										{
											"key": "workspace",
											"value": "1f0df51a-8658-4ee8-a2a1-d2567dfa09a9",
											"description": "Optional. A workspace ID."
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"collections\": [\n        {\n            \"id\": \"dac5eac9-148d-a32e-b76b-3edee9da28f7\",\n            \"name\": \"Cloud API\",\n            \"owner\": \"12345678\",\n            \"createdAt\": \"2022-04-12T10:29:46.000Z\",\n            \"updatedAt\": \"2022-04-12T10:29:56.000Z\",\n            \"uid\": \"12345678-dac5eac9-148d-a32e-b76b-3edee9da28f7\",\n            \"isPublic\": true\n        }\n    ]\n}"
						},
						{
							"name": "Rate Limit Exceeded",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "https://api.getpostman.com/collections",
									"protocol": "https",
									"host": [
										"api",
										"getpostman",
										"com"
									],
									"path": [
										"collections"
									],
									"query": [
										{
											"key": "workspace",
											"value": "1f0df51a-8658-4ee8-a2a1-d2567dfa09a9",
											"description": "Optional. A workspace ID.",
											"disabled": true
										}
									]
								}
							},
							"status": "Too Many Requests",
							"code": 429,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Content-Type",
									"value": "application/json",
									"description": {
										"content": "",
										"type": "text/plain"
									}
								}
							],
							"cookie": [],
							"body": "{\n    \"error\": \"rateLimited\",\n    \"message\": \"Rate limit exceeded. Please retry after 1669048687\"\n}"
						}
					]
				}
			],
			"description": "The `/collections` endpoints let you manage your [collections](https://learning.postman.com/docs/sending-requests/intro-to-collections/)."
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
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "baseUrl",
			"value": "https://farming-simulator.pstmn.io"
		}
	]
}
