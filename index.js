const { Parser } = require('json2csv');

const fields = ['field1', 'field2', 'field3'];
const opts = { fields };

try {

    // #region
    const myData = {
        "swagger": "2.0",
        "info": {
            "version": "1.0.0",
            "title": "Walgreens API",
            "description": "."
        },
        "host": "localhost.walgreens.com:8080",
        "basePath": "/",
        "tags": [
            {
                "name": "Patient",
                "description": ""
            },
            {
                "name": "Other",
                "description": ""
            },
            {
                "name": "Screening",
                "description": ""
            },
            {
                "name": "Locations",
                "description": ""
            },
            {
                "name": "Appointment",
                "description": ""
            },
            {
                "name": "Vouchers",
                "description": ""
            },
            {
                "name": "Insurance",
                "description": ""
            },
            {
                "name": "Consent",
                "description": ""
            },
            {
                "name": "Results",
                "description": ""
            },
            {
                "name": "Smart Health Cards",
                "description": ""
            },
            {
                "name": "Labcorp",
                "description": ""
            },
            {
                "name": "Admin External Appointments",
                "description": ""
            },
            {
                "name": "Admin External Other",
                "description": ""
            },
            {
                "name": "Admin External DriveUp",
                "description": ""
            },
            {
                "name": "Admin External Engagements",
                "description": ""
            },
            {
                "name": "Admin External Reports",
                "description": ""
            },
            {
                "name": "Admin External Sites",
                "description": ""
            },
            {
                "name": "Admin External Vouchers",
                "description": ""
            },
            {
                "name": "Admin External Consents",
                "description": ""
            },
            {
                "name": "Admin External Clients",
                "description": ""
            },
            {
                "name": "Admin External Manage",
                "description": ""
            },
            {
                "name": "Admin Other",
                "description": ""
            },
            {
                "name": "Admin Vouchers",
                "description": ""
            },
            {
                "name": "Admin Requisitions",
                "description": ""
            },
            {
                "name": "Admin DriveUp",
                "description": ""
            },
            {
                "name": "Curbside Pickup Order",
                "description": ""
            },
            {
                "name": "Heart Beat Instance",
                "description": ""
            },
            {
                "name": "Immunization ConsolidatedRoster",
                "description": ""
            },
            {
                "name": "IVR External",
                "description": ""
            },
            {
                "name": "Internal Other",
                "description": ""
            },
            {
                "name": "Internal Bulk Email",
                "description": ""
            },
            {
                "name": "Internal Medical Billing",
                "description": ""
            },
            {
                "name": "Partner Other",
                "description": ""
            },
            {
                "name": "Partner Members",
                "description": ""
            },
            {
                "name": "Partner Test",
                "description": ""
            },
            {
                "name": "Partner External",
                "description": ""
            }
        ],
        "schemes": [
            "http",
            "https"
        ],
        "consumes": [
            "application/json"
        ],
        "produces": [
            "application/json"
        ],
        "paths": {
            "/patient/{patientId}": {
                "get": {
                    "tags": [
                        "Patient"
                    ],
                    "summary": "Lab scheduling: get patient profile",
                    "description": "Lab scheduling: get patient profile",
                    "parameters": [
                        {
                            "name": "patientId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                },
                "put": {
                    "tags": [
                        "Patient"
                    ],
                    "summary": "Lab scheduling: patient profile updating",
                    "description": "Lab scheduling: patient profile updating",
                    "parameters": [
                        {
                            "name": "patientId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "dob": {
                                        "example": "any"
                                    },
                                    "contact": {
                                        "example": "any"
                                    },
                                    "guardian": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/patient/": {
                "post": {
                    "tags": [
                        "Patient"
                    ],
                    "summary": "Lab scheduling: patient profile creation",
                    "description": "Lab scheduling: patient profile creation",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "user-agent",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "dob": {
                                        "example": "any"
                                    },
                                    "contact": {
                                        "example": "any"
                                    },
                                    "guardian": {
                                        "example": "any"
                                    },
                                    "engagementId": {
                                        "example": "any"
                                    },
                                    "profileType": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/resources": {
                "get": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "Get all resources",
                    "description": "Get all resources",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "resources",
                            "in": "query",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/screeningResults": {
                "patch": {
                    "tags": [
                        "Screening"
                    ],
                    "summary": "Lab scheduling: screening survey",
                    "description": "Lab scheduling: screening survey",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "screeningResults": {
                                        "example": "any"
                                    },
                                    "engagementId": {
                                        "example": "any"
                                    },
                                    "patientId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/termsAgreement": {
                "post": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "Lab scheduling: Terms agreement API",
                    "description": "Lab scheduling: Terms agreement API",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "user-agent",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "acceptPrivacyNotice": {
                                        "example": "any"
                                    },
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/screeningSurvey": {
                "get": {
                    "tags": [
                        "Screening"
                    ],
                    "summary": "Lab scheduling: Get survey questionnaire API",
                    "description": "Lab scheduling: Get survey questionnaire API",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/createOrder": {
                "patch": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "Lab scheduling: Create order API",
                    "description": "Lab scheduling: Create order API",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/locations/search": {
                "post": {
                    "tags": [
                        "Locations"
                    ],
                    "summary": "Previously used post call for getting the list of locations. Still needed to handle parameters other then updateDate.",
                    "description": "Previously used post call for getting the list of locations. Still needed to handle parameters other then updateDate.",
                    "parameters": [
                        {
                            "name": "transactionid",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                },
                "get": {
                    "tags": [
                        "Locations"
                    ],
                    "summary": "Converted from locations/search post to get endpoint to handle akmai configuration bug",
                    "description": "Converted from locations/search post to get endpoint to handle akmai configuration bug",
                    "parameters": [
                        {
                            "name": "transactionid",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/locations/searchByTimeAndGeoRange": {
                "post": {
                    "tags": [
                        "Locations"
                    ],
                    "summary": "Returns slots within N miles for specified location and in specific date/time range. See searchByTimeAndGeoRangeInputValidator for parameters.",
                    "description": "Returns slots within N miles for specified location and in specific date/time range. See searchByTimeAndGeoRangeInputValidator for parameters.",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "latitude": {
                                        "example": "any"
                                    },
                                    "longitude": {
                                        "example": "any"
                                    },
                                    "range": {
                                        "example": "any"
                                    },
                                    "testingModels": {
                                        "example": "any"
                                    },
                                    "startDate": {
                                        "example": "any"
                                    },
                                    "endDate": {
                                        "example": "any"
                                    },
                                    "haversine": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/slots": {
                "post": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "Returns configured slots for specified location and priority",
                    "description": "Returns configured slots for specified location and priority",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "verbose": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/appointment/updateAvailability/": {
                "post": {
                    "tags": [
                        "Appointment"
                    ],
                    "summary": "Updates availability for specified store",
                    "description": "Updates availability for specified store",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "query": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                }
            },
            "/appointment": {
                "post": {
                    "tags": [
                        "Appointment"
                    ],
                    "summary": "Books an appointment, or appointment from held.",
                    "description": "Books an appointment, or appointment from held.",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    },
                                    "patientId": {
                                        "example": "any"
                                    },
                                    "heldAppointmentId": {
                                        "example": "any"
                                    },
                                    "testId": {
                                        "example": "any"
                                    },
                                    "voucherId": {
                                        "example": "any"
                                    },
                                    "memberId": {
                                        "example": "any"
                                    },
                                    "languageSelection": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/fetchAppointment": {
                "post": {
                    "tags": [
                        "Appointment"
                    ],
                    "summary": "Lab scheduling: fetches appointment data. Made from Get appointment for security reasons.",
                    "description": "Lab scheduling: fetches appointment data. Made from Get appointment for security reasons.",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "FCAppoinmentAccessToken",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "appointmentId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    }
                }
            },
            "/checkResultExpiration": {
                "post": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "Check Result Expiration",
                    "description": "Check Result Expiration",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/checkAppointmentExpiration": {
                "post": {
                    "tags": [
                        "Appointment"
                    ],
                    "summary": "Check Appointment Expiration",
                    "description": "Check Appointment Expiration",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "appointmentId": {
                                        "example": "any"
                                    },
                                    "appointmentDate": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/fetchEngagementFromAppointment": {
                "post": {
                    "tags": [
                        "Appointment"
                    ],
                    "summary": "Temporary helper endpoint to get engagementId from appointmentId.",
                    "description": "Temporary helper endpoint to get engagementId from appointmentId.",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "appointmentId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/appointment/{appointmentId}": {
                "get": {
                    "tags": [
                        "Appointment"
                    ],
                    "summary": "Lab scheduling: Get appointment. Obsolete.",
                    "description": "Lab scheduling: Get appointment. Obsolete.",
                    "parameters": [
                        {
                            "name": "appointmentId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/appointment/{appointmentId}/reschedule": {
                "post": {
                    "tags": [
                        "Appointment"
                    ],
                    "summary": "Lab scheduling: Reschedule appointment",
                    "description": "Lab scheduling: Reschedule appointment",
                    "parameters": [
                        {
                            "name": "appointmentId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "location": {
                                        "example": "any"
                                    },
                                    "voucherId": {
                                        "example": "any"
                                    },
                                    "appointmentDate": {
                                        "example": "any"
                                    },
                                    "slot": {
                                        "example": "any"
                                    },
                                    "languageSelection": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/appointment/{appointmentId}/cancel": {
                "put": {
                    "tags": [
                        "Appointment"
                    ],
                    "summary": "Lab scheduling: Cancel appointment. Handles both Hard cancel and Soft cancel.",
                    "description": "Lab scheduling: Cancel appointment. Handles both Hard cancel and Soft cancel.",
                    "parameters": [
                        {
                            "name": "appointmentId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/{voucherId}": {
                "get": {
                    "tags": [
                        "Vouchers"
                    ],
                    "summary": "Get all vouchers by voucherId",
                    "description": "Get all vouchers by voucherId",
                    "parameters": [
                        {
                            "name": "voucherId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/cache/{cacheKey}": {
                "get": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "Lab scheduling: get patient profile",
                    "description": "Lab scheduling: get patient profile",
                    "parameters": [
                        {
                            "name": "cacheKey",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/addresslookup": {
                "post": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "validate ZIP API - Wrapper for google maps API",
                    "description": "validate ZIP API - Wrapper for google maps API",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/standardizeNameForSearch": {
                "post": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "FIC-4526 - COVID-19 Testing - lastNameForSearch implementation",
                    "description": "FIC-4526 - COVID-19 Testing - lastNameForSearch implementation",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/insurance": {
                "post": {
                    "tags": [
                        "Insurance"
                    ],
                    "summary": "Add patient insurance",
                    "description": "Add patient insurance",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/insurance/{insuranceId}": {
                "put": {
                    "tags": [
                        "Insurance"
                    ],
                    "summary": "Update patient insurance",
                    "description": "Update patient insurance",
                    "parameters": [
                        {
                            "name": "insuranceId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/insuranceCompanies": {
                "get": {
                    "tags": [
                        "Insurance"
                    ],
                    "summary": "Insurance: Fetch All Insurance Companies",
                    "description": "Insurance: Fetch All Insurance Companies",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "list",
                            "in": "query",
                            "type": "string"
                        },
                        {
                            "name": "type",
                            "in": "query",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/insuranceCompanies/{payerId}": {
                "get": {
                    "tags": [
                        "Insurance"
                    ],
                    "summary": "Insurance: Fetch Insurance Company Details",
                    "description": "Insurance: Fetch Insurance Company Details",
                    "parameters": [
                        {
                            "name": "payerId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/appointment/hold": {
                "post": {
                    "tags": [
                        "Appointment"
                    ],
                    "summary": "Lab scheduling: Hold appointment",
                    "description": "Lab scheduling: Hold appointment",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    },
                                    "patientId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/appointment/hold/{appointmentId}": {
                "put": {
                    "tags": [
                        "Appointment"
                    ],
                    "summary": "Lab scheduling: Hold appointment",
                    "description": "Lab scheduling: Hold appointment",
                    "parameters": [
                        {
                            "name": "appointmentId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "appointmentId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/uilogger": {
                "post": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "Lab scheduling: UI Error Logger",
                    "description": "Lab scheduling: UI Error Logger",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/match": {
                "post": {
                    "tags": [
                        "Vouchers"
                    ],
                    "summary": "Matches specified group, plan, optional access code and member fields to response contains several root attributes that are conditional based on the outcome of the match operation.",
                    "description": "Matches specified group, plan, optional access code and member fields to response contains several root attributes that are conditional based on the outcome of the match operation.",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "groupId": {
                                        "example": "any"
                                    },
                                    "planId": {
                                        "example": "any"
                                    },
                                    "member": {
                                        "example": "any"
                                    },
                                    "info": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/updateUtilization": {
                "post": {
                    "tags": [
                        "Vouchers"
                    ],
                    "summary": "OBSOLETE. Will be removed later, and only used to notify on moved endpoint.",
                    "description": "OBSOLETE. Will be removed later, and only used to notify on moved endpoint.",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/consent/search": {
                "post": {
                    "tags": [
                        "Consent"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/consent/{engagementId}": {
                "put": {
                    "tags": [
                        "Consent"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/drupal/cms": {
                "post": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "contentURLAlias": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/consent/getConsentPdfs/{engagementId}": {
                "get": {
                    "tags": [
                        "Consent"
                    ],
                    "summary": "Gets previously created consent Pdfs for specified engagementId",
                    "description": "Gets previously created consent Pdfs for specified engagementId",
                    "produces": [
                        "application/pdf"
                    ],
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    }
                }
            },
            "/consent/createConsentPdfs": {
                "post": {
                    "tags": [
                        "Consent"
                    ],
                    "summary": "Creates or downloads and then merges concent Pdf files based on Voucher to get list of consents to generate.",
                    "description": "Creates or downloads and then merges concent Pdf files based on Voucher to get list of consents to generate.",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    }
                }
            },
            "/fetchToken": {
                "post": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "Validates test result notification email by validating DOB based on results/:engagementId/fetch, but takes engagement OR appontmentId, and uses body instead of get.",
                    "description": "Validates test result notification email by validating DOB based on results/:engagementId/fetch, but takes engagement OR appontmentId, and uses body instead of get.",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    },
                                    "appointmentId": {
                                        "example": "any"
                                    },
                                    "auth": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/results/{engagementId}/fetch": {
                "post": {
                    "tags": [
                        "Results"
                    ],
                    "summary": "Validates test result notification email by validating DOB",
                    "description": "Validates test result notification email by validating DOB",
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    },
                                    "auth": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/results/{engagementId}/labReports": {
                "post": {
                    "tags": [
                        "Results"
                    ],
                    "summary": "PUBLIC endpoint for retreiving lab reports after validating DOB",
                    "description": "PUBLIC endpoint for retreiving lab reports after validating DOB",
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "FCLabReportToken",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementIds": {
                                        "example": "any"
                                    },
                                    "clearScreen": {
                                        "example": "any"
                                    },
                                    "isPublicEndPoint": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "403": {
                            "description": "Forbidden"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    }
                }
            },
            "/smartHealthCards/qr/{engagementId}": {
                "get": {
                    "tags": [
                        "Smart Health Cards"
                    ],
                    "summary": "",
                    "description": "",
                    "produces": [
                        "image/png"
                    ],
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    }
                }
            },
            "/smartHealthCards/downloadCard/{engagementId}": {
                "get": {
                    "tags": [
                        "Smart Health Cards"
                    ],
                    "summary": "",
                    "description": "",
                    "produces": [
                        "application/smart-health-card"
                    ],
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "403": {
                            "description": "Forbidden"
                        }
                    }
                }
            },
            "/testomnisysresult": {
                "patch": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/postalinquiry": {
                "post": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "Returns at home testing eligibility flag for a specified zip code",
                    "description": "Returns at home testing eligibility flag for a specified zip code",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "zip": {
                                        "example": "any"
                                    },
                                    "city": {
                                        "example": "any"
                                    },
                                    "neighborhood": {
                                        "example": "any"
                                    },
                                    "sublocality": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/labcorpinquiry": {
                "post": {
                    "tags": [
                        "Labcorp"
                    ],
                    "summary": "Test endpoint to generate HL7 message, to be removed",
                    "description": "Test endpoint to generate HL7 message, to be removed",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "partnerOrderId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/labcorpresult": {
                "post": {
                    "tags": [
                        "Labcorp"
                    ],
                    "summary": "Test endpoint to process result HL7 message, to be removed",
                    "description": "Test endpoint to process result HL7 message, to be removed",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "fileContents": {
                                        "example": "any"
                                    },
                                    "fileName": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/setUiPayloadInCache": {
                "post": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "sets UI Payload specified in CovidPatientDataUI cache",
                    "description": "sets UI Payload specified in CovidPatientDataUI cache",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "zip": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/insights/mmq/{engagementId}": {
                "put": {
                    "tags": [
                        "Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/appointments/search": {
                "post": {
                    "tags": [
                        "Admin External Appointments"
                    ],
                    "summary": "Admin tool: Search the appointment details",
                    "description": "Admin tool: Search the appointment details",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/appointments/pdfbatch": {
                "post": {
                    "tags": [
                        "Admin External Appointments"
                    ],
                    "summary": "Admin tool: generate composite PDF for the appointments",
                    "description": "Admin tool: generate composite PDF for the appointments",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    }
                }
            },
            "/admin/appointments/cancelbatch": {
                "put": {
                    "tags": [
                        "Admin External Appointments"
                    ],
                    "summary": "Admin tool: batch cancel of appointments",
                    "description": "Admin tool: batch cancel of appointments",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                }
            },
            "/admin/appointments/pdfblobexport": {
                "post": {
                    "tags": [
                        "Admin External Appointments"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/appointments/testtimeout": {
                "put": {
                    "tags": [
                        "Admin External Appointments"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "serviceTimeout": {
                                        "example": "any"
                                    },
                                    "apiTimer": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                }
            },
            "/admin/users": {
                "post": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/dbcommands": {
                "post": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/engagements": {
                "post": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "DriveUp Portal: Create DriveUp Engagememant API",
                    "description": "DriveUp Portal: Create DriveUp Engagememant API",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagement": {
                                        "example": "any"
                                    },
                                    "patient": {
                                        "example": "any"
                                    },
                                    "insurance": {
                                        "example": "any"
                                    },
                                    "consent": {
                                        "example": "any"
                                    },
                                    "screeningResults": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/engagements/{engagementId}": {
                "put": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "DriveUp Portal: Update DriveUp Engagement",
                    "description": "DriveUp Portal: Update DriveUp Engagement",
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagement": {
                                        "example": "any"
                                    },
                                    "patient": {
                                        "example": "any"
                                    },
                                    "insurance": {
                                        "example": "any"
                                    },
                                    "consent": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                },
                "delete": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "DriveUp Portal: Delete DriveUp Engagement",
                    "description": "DriveUp Portal: Delete DriveUp Engagement",
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/engagements/{engagementId}/results": {
                "post": {
                    "tags": [
                        "Admin External Engagements"
                    ],
                    "summary": "Portal Post Results for Engagement",
                    "description": "Portal Post Results for Engagement",
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "lastRecordedDate": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/locations": {
                "get": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/registrations/{engagementId}": {
                "get": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/registrations/": {
                "post": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/mailmerge": {
                "post": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementIds": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "404": {
                            "description": "Not Found"
                        }
                    }
                }
            },
            "/admin/driveup/mailmerge/uploadFilesToAzure": {
                "post": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "uploadFilesToAzure loads files from local file system to cloud, in situations when you have problems writing to the cloud otherwise",
                    "description": "uploadFilesToAzure loads files from local file system to cloud, in situations when you have problems writing to the cloud otherwise",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "filesToUpload": {
                                        "example": "any"
                                    },
                                    "verbose": {
                                        "example": "any"
                                    },
                                    "containerName": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/mailmerge/checkdependencies": {
                "get": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/mailmerge/updateTemplatesCache": {
                "get": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/bulk/engagements": {
                "post": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "DriveUp Portal: Create K-12 DriveUp Engagement API",
                    "description": "DriveUp Portal: Create K-12 DriveUp Engagement API",
                    "parameters": [
                        {
                            "name": "transtransactionIdzactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "selectedSite": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/patientengagements": {
                "post": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "DriveUp Portal: Create DriveUp Engagement for an existing Patient API",
                    "description": "DriveUp Portal: Create DriveUp Engagement for an existing Patient API",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "insurance": {
                                        "example": "any"
                                    },
                                    "patient": {
                                        "example": "any"
                                    },
                                    "engagement": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/reports": {
                "get": {
                    "tags": [
                        "Admin External Reports"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/reports/{reportId}": {
                "get": {
                    "tags": [
                        "Admin External Reports"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "reportId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                },
                "post": {
                    "tags": [
                        "Admin External Reports"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "reportId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                }
            },
            "/admin/testmodels/": {
                "get": {
                    "tags": [
                        "Admin Other"
                    ],
                    "summary": "Get TestingModels",
                    "description": "Get TestingModels",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/resultmaps/{mapName}": {
                "get": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "Get Resultmaps",
                    "description": "Get Resultmaps",
                    "parameters": [
                        {
                            "name": "mapName",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/sites/search": {
                "post": {
                    "tags": [
                        "Admin External Sites"
                    ],
                    "summary": "Search the covid test sites collection with multiple critera",
                    "description": "Search the covid test sites collection with multiple critera",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "selectedStoreNumbers": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/sitesSearch": {
                "get": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "Search the covid test sites collection thjrough get",
                    "description": "Search the covid test sites collection thjrough get",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/sites/translateUiToSvc": {
                "put": {
                    "tags": [
                        "Admin External Sites"
                    ],
                    "summary": "Service endpoint just calling translateUiToSvc with required UI schema, and optional allowed sites list and debugLog",
                    "description": "Service endpoint just calling translateUiToSvc with required UI schema, and optional allowed sites list and debugLog",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "hoursOfOperation": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/sites": {
                "put": {
                    "tags": [
                        "Admin External Sites"
                    ],
                    "summary": "Update test site fields",
                    "description": "Update test site fields",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                },
                "post": {
                    "tags": [
                        "Admin External Sites"
                    ],
                    "summary": "Add new test site",
                    "description": "Add new test site",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/sites/{storeNumber}": {
                "get": {
                    "tags": [
                        "Admin External Sites"
                    ],
                    "summary": "Search test site using storeNumber",
                    "description": "Search test site using storeNumber",
                    "parameters": [
                        {
                            "name": "storeNumber",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/sites/bulk": {
                "post": {
                    "tags": [
                        "Admin External Sites"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/sites/actions": {
                "patch": {
                    "tags": [
                        "Admin External Sites"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "sites": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/groupsAndPlans": {
                "get": {
                    "tags": [
                        "Admin Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "membership",
                            "in": "query",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/search": {
                "post": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/members/searchSchema": {
                "post": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers": {
                "post": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/{voucherId}": {
                "put": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "voucherId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                },
                "get": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "voucherId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/{voucherId}/members/{memberId}": {
                "put": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "voucherId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "memberId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                },
                "get": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "voucherId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "memberId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/members/search": {
                "post": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                }
            },
            "/admin/consents": {
                "get": {
                    "tags": [
                        "Admin External Consents"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/{voucherId}/members": {
                "get": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "voucherId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "showDeleted",
                            "in": "query",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/match": {
                "post": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "storeNumber": {
                                        "example": "any"
                                    },
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/members/delete": {
                "post": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "Bulk soft delete voucher members by groupId or planId",
                    "description": "Bulk soft delete voucher members by groupId or planId",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "voucherMembers": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/members/reactivate": {
                "post": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "voucherMembers": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/members/bulk": {
                "post": {
                    "tags": [
                        "Admin External Vouchers"
                    ],
                    "summary": "Bulk upload voucher members by groupId or planId",
                    "description": "Bulk upload voucher members by groupId or planId",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "groupId": {
                                        "example": "any"
                                    },
                                    "planId": {
                                        "example": "any"
                                    },
                                    "members": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                }
            },
            "/admin/sop": {
                "post": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "state": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/clients": {
                "post": {
                    "tags": [
                        "Admin External Clients"
                    ],
                    "summary": "Add new covidClient",
                    "description": "Add new covidClient",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "_id": {
                                        "example": "any"
                                    },
                                    "created": {
                                        "example": "any"
                                    },
                                    "updated": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                },
                "put": {
                    "tags": [
                        "Admin External Clients"
                    ],
                    "summary": "Update covidClient",
                    "description": "Update covidClient",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "created": {
                                        "example": "any"
                                    },
                                    "updated": {
                                        "example": "any"
                                    },
                                    "_id": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                },
                "get": {
                    "tags": [
                        "Admin External Clients"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "pathy",
                            "in": "query",
                            "type": "string"
                        },
                        {
                            "name": "members",
                            "in": "query",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/clients/testTCSApi": {
                "post": {
                    "tags": [
                        "Admin External Clients"
                    ],
                    "summary": "Test various methods to update TCS",
                    "description": "Test various methods to update TCS",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/clients/{clientId}": {
                "get": {
                    "tags": [
                        "Admin External Clients"
                    ],
                    "summary": "Search client",
                    "description": "Search client",
                    "parameters": [
                        {
                            "name": "clientId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/engagements/{engagementId}/laborder/approval": {
                "post": {
                    "tags": [
                        "Admin External Engagements"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transtransactionIdzactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/clients/heriarchy": {
                "post": {
                    "tags": [
                        "Admin External Clients"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "clientId": {
                                        "example": "any"
                                    },
                                    "traverseStyle": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/manage/consents/": {
                "post": {
                    "tags": [
                        "Admin External Manage"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/manage/consents/{consentId}": {
                "put": {
                    "tags": [
                        "Admin External Manage"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "consentId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/consents/getConsentById/{consentId}": {
                "get": {
                    "tags": [
                        "Admin External Consents"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "consentId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/consent/search": {
                "post": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/singleResource": {
                "get": {
                    "tags": [
                        "Admin Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "resource",
                            "in": "query",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/sendResultsEmails": {
                "post": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementIds": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/orders/{engagementId}": {
                "put": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "Update order",
                    "description": "Update order",
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "patientInfo": {
                                        "example": "any"
                                    },
                                    "engagement": {
                                        "example": "any"
                                    },
                                    "insuranceInfo": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/uniqueId": {
                "get": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "Get next available uniqueId for driveup",
                    "description": "Get next available uniqueId for driveup",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/patients/{patientId}/{engagementId}/count": {
                "get": {
                    "tags": [
                        "Admin External DriveUp"
                    ],
                    "summary": "Get count of other viable engagements under same patientId",
                    "description": "Get count of other viable engagements under same patientId",
                    "parameters": [
                        {
                            "name": "patientId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/checkAkvValue": {
                "post": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/dowloadAzureFile": {
                "get": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "",
                    "description": "",
                    "produces": [
                        "application/pdf"
                    ],
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/patient/{engagementId}": {
                "get": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "engagementId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/engagements/patients/{patientId}": {
                "get": {
                    "tags": [
                        "Admin External Engagements"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "patientId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/survey": {
                "get": {
                    "tags": [
                        "Admin External Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/appointments": {
                "post": {
                    "tags": [
                        "Admin Other"
                    ],
                    "summary": "Admin tool: Fetch the appointment details",
                    "description": "Admin tool: Fetch the appointment details",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/requisitions/{orderID}": {
                "get": {
                    "tags": [
                        "Admin Requisitions"
                    ],
                    "summary": "Admin tool: Fetch the Order requisition PDF",
                    "description": "Admin tool: Fetch the Order requisition PDF",
                    "parameters": [
                        {
                            "name": "orderID",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/requisitions": {
                "patch": {
                    "tags": [
                        "Admin Requisitions"
                    ],
                    "summary": "Admin tool: Prod support API to get PWN requisition PDF and save in DB",
                    "description": "Admin tool: Prod support API to get PWN requisition PDF and save in DB",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/requisitions/movePwnFilesToBlob": {
                "patch": {
                    "tags": [
                        "Admin Requisitions"
                    ],
                    "summary": "Admin tool: Prod support API to copy PWN requisition from PDF from and save in DB expects either startDate/endDate, or engagementIds as parameters.",
                    "description": "Admin tool: Prod support API to copy PWN requisition from PDF from and save in DB expects either startDate/endDate, or engagementIds as parameters.",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementIds": {
                                        "example": "any"
                                    },
                                    "startDate": {
                                        "example": "any"
                                    },
                                    "endDate": {
                                        "example": "any"
                                    },
                                    "summaryOnly": {
                                        "example": "any"
                                    },
                                    "pwnMoveBatchSize": {
                                        "example": "any"
                                    },
                                    "skipExisting": {
                                        "example": "any"
                                    },
                                    "batchMode": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                }
            },
            "/admin/backfill/appointmentmanagement": {
                "post": {
                    "tags": [
                        "Admin Other"
                    ],
                    "summary": "Appointment Management MVP (FIC-4009, FIC-4010)",
                    "description": "Appointment Management MVP (FIC-4009, FIC-4010)",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "appointmentDate": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/testclasses": {
                "get": {
                    "tags": [
                        "Admin Other"
                    ],
                    "summary": "Get TestingClasses",
                    "description": "Get TestingClasses",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/fixresults": {
                "post": {
                    "tags": [
                        "Admin DriveUp"
                    ],
                    "summary": "Post driveups fix results",
                    "description": "Post driveups fix results",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/driveup/undelete": {
                "post": {
                    "tags": [
                        "Admin DriveUp"
                    ],
                    "summary": "Post driveups undelete",
                    "description": "Post driveups undelete",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/vouchers/updateUtilization": {
                "post": {
                    "tags": [
                        "Admin Vouchers"
                    ],
                    "summary": "Updates Utilization info either in batch mode, or for specified voucher/member",
                    "description": "Updates Utilization info either in batch mode, or for specified voucher/member",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "batchMode": {
                                        "example": "any"
                                    },
                                    "voucherId": {
                                        "example": "any"
                                    },
                                    "memberId": {
                                        "example": "any"
                                    },
                                    "showDetails": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/resources": {
                "get": {
                    "tags": [
                        "Admin Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "resources",
                            "in": "query",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/allowedAttributes": {
                "get": {
                    "tags": [
                        "Admin Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/patientCoveredAttributes": {
                "get": {
                    "tags": [
                        "Admin Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/insurance/patientIdToEngagementId": {
                "post": {
                    "tags": [
                        "Admin Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "tiemoutTime": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/admin/wagLabOrders/allocateIds": {
                "post": {
                    "tags": [
                        "Admin Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "quantity": {
                                        "example": "any"
                                    },
                                    "allowPartial": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/order/": {
                "post": {
                    "tags": [
                        "Curbside Pickup Order"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "user-agent",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "orderLocation": {
                                        "example": "any"
                                    },
                                    "screeningAnswers": {
                                        "example": "any"
                                    },
                                    "patientInfo": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/": {
                "get": {
                    "tags": [
                        "Heart Beat Instance"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/details": {
                "get": {
                    "tags": [
                        "Heart Beat Instance"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/consolidatedRoster/search": {
                "post": {
                    "tags": [
                        "Immunization ConsolidatedRoster"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/engagement/search": {
                "post": {
                    "tags": [
                        "IVR External"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/resendEmail": {
                "post": {
                    "tags": [
                        "IVR External"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "type": {
                                        "example": "any"
                                    },
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/ordernotification/{partnerOrderId}": {
                "put": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "Lab scheduling: partner order decision update",
                    "description": "Lab scheduling: partner order decision update",
                    "parameters": [
                        {
                            "name": "partnerOrderId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "status",
                            "in": "query",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "order": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/replayresultedorder/{partnerOrderId}": {
                "put": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "partnerOrderId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/sendEmail": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    },
                                    "emailTemplateName": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/covidorderresults/encrypt": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/covidconfig/{configName}": {
                "get": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "configName",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/covidorderresultscopy": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "orderType": {
                                        "example": "any"
                                    },
                                    "startDate": {
                                        "example": "any"
                                    },
                                    "endDate": {
                                        "example": "any"
                                    },
                                    "engagementIds": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/backfillcollectiondate": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "startDate": {
                                        "example": "any"
                                    },
                                    "endDate": {
                                        "example": "any"
                                    },
                                    "engagementIds": {
                                        "example": "any"
                                    },
                                    "testId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/savephysiciandetails": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "partnerOrders": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/updatebookingcount": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "appointmentIds": {
                                        "example": "any"
                                    },
                                    "appointmentId": {
                                        "example": "any"
                                    },
                                    "appointment": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/bulkemail/sendreminders": {
                "post": {
                    "tags": [
                        "Internal Bulk Email"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                }
            },
            "/bulkemail/sendresults": {
                "post": {
                    "tags": [
                        "Internal Bulk Email"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                }
            },
            "/bulkemail/sendconfirmationemails": {
                "post": {
                    "tags": [
                        "Internal Bulk Email"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        },
                        "500": {
                            "description": "Internal Server Error"
                        }
                    }
                }
            },
            "/clearCache/{cacheKey}": {
                "get": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "cacheKey",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "regexMask",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/testRedisLocalCache": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "smallSampleCount": {
                                        "example": "any"
                                    },
                                    "largeSampleCount": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/initLocalCache": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "needsFlush": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/extractMongoSchema": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "Extract Mongo Schema schema for specified collections",
                    "description": "Extract Mongo Schema schema for specified collections",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "collectionList": {
                                        "example": "any"
                                    },
                                    "limit": {
                                        "example": "any"
                                    },
                                    "raw": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/aegis/resultnotification/{partnerOrderId}": {
                "put": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "Lab scheduling: aegis result notification",
                    "description": "Lab scheduling: aegis result notification",
                    "parameters": [
                        {
                            "name": "partnerOrderId",
                            "in": "path",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "length": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/medicalBilling/retryOrderSend": {
                "post": {
                    "tags": [
                        "Internal Medical Billing"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/medicalBilling/retryResultSend": {
                "post": {
                    "tags": [
                        "Internal Medical Billing"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/localThresholdMStest": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/generateOrderRequestObject": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    },
                                    "requestType": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/backfillTestId": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "startDate": {
                                        "example": "any"
                                    },
                                    "endDate": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/fetchEngagementKey": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "engagementId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/labcorp/processResults": {
                "post": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "LabCorp process results",
                    "description": "LabCorp process results",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/checkLabCorpEnvs": {
                "get": {
                    "tags": [
                        "Internal Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/getRoleAndClientsForUser": {
                "get": {
                    "tags": [
                        "Partner Other"
                    ],
                    "summary": "Fetch client hierarchy traversal client",
                    "description": "Fetch client hierarchy traversal client",
                    "parameters": [
                        {
                            "name": "authorization",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/clients/hierarchy": {
                "post": {
                    "tags": [
                        "Partner Other"
                    ],
                    "summary": "Fetch client hierarchy traversal client",
                    "description": "Fetch client hierarchy traversal client",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "clientId": {
                                        "example": "any"
                                    },
                                    "traverseStyle": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/clientById": {
                "post": {
                    "tags": [
                        "Partner Other"
                    ],
                    "summary": "Fetch clientByName by client",
                    "description": "Fetch clientByName by client",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/all": {
                "post": {
                    "tags": [
                        "Partner Other"
                    ],
                    "summary": "Fetch vouchers all, or by planId",
                    "description": "Fetch vouchers all, or by planIdt",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/members": {
                "post": {
                    "tags": [
                        "Partner Members"
                    ],
                    "summary": "Fetch voucher members by groupId or planId",
                    "description": "Fetch voucher members by groupId or planId",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "groupId": {
                                        "example": "any"
                                    },
                                    "planId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/members/consent": {
                "post": {
                    "tags": [
                        "Partner Members"
                    ],
                    "summary": "Fetch voucher members and consent data by groupId or planId",
                    "description": "Fetch voucher members and consent data by groupId or planId",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "groupId": {
                                        "example": "any"
                                    },
                                    "planId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/listActivity": {
                "post": {
                    "tags": [
                        "Partner Other"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "error": {
                                        "example": "any"
                                    },
                                    "response": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/members/detail": {
                "post": {
                    "tags": [
                        "Partner Members"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "mid": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/test/results": {
                "post": {
                    "tags": [
                        "Partner Test"
                    ],
                    "summary": "Fetch voucher test tracking by groupId or planId",
                    "description": "Fetch voucher test tracking by groupId or planId",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "groupId": {
                                        "example": "any"
                                    },
                                    "planId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/test/adoption": {
                "post": {
                    "tags": [
                        "Partner Test"
                    ],
                    "summary": "Fetch voucher test tracking by groupId or planId",
                    "description": "Fetch voucher test tracking by groupId or planId",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "groupId": {
                                        "example": "any"
                                    },
                                    "planId": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/members/bulk": {
                "post": {
                    "tags": [
                        "Partner Members"
                    ],
                    "summary": "Bulk upload voucher members by groupId or planId",
                    "description": "Bulk upload voucher members by groupId or planId",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "groupId": {
                                        "example": "any"
                                    },
                                    "planId": {
                                        "example": "any"
                                    },
                                    "members": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/members/delete": {
                "post": {
                    "tags": [
                        "Partner Members"
                    ],
                    "summary": "Bulk soft delete voucher members by groupId or planId",
                    "description": "Bulk soft delete voucher members by groupId or planId",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "voucherMembers": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/external/report/redis/unlock": {
                "get": {
                    "tags": [
                        "Partner External"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/external/report": {
                "get": {
                    "tags": [
                        "Partner External"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            },
            "/vouchers/test/bwell": {
                "post": {
                    "tags": [
                        "Partner Test"
                    ],
                    "summary": "",
                    "description": "",
                    "parameters": [
                        {
                            "name": "transactionId",
                            "in": "header",
                            "type": "string"
                        },
                        {
                            "name": "body",
                            "in": "body",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "resource": {
                                        "example": "any"
                                    },
                                    "payload": {
                                        "example": "any"
                                    }
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                }
            }
        }
    }
    // #endregion
    const parser = new Parser(opts);
    const csv = parser.parse(myData.paths);
    console.log(csv);
} catch (err) {
    console.error(err);
}