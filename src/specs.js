export default {
  "openapi": "3.0.2",
  "info": {
    "title": "FastAPI MySql",
    "version": "0.1.0"
  },
  "paths": {
    "/health-check": {
      "get": {
        "summary": "Health Check",
        "operationId": "health_check_health_check_get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          }
        }
      }
    },
    "/v1/admin/lenders/": {
      "get": {
        "tags": [
          "Admin Panel",
          "lenders admin"
        ],
        "summary": "Api Get Lenders",
        "operationId": "api_get_lenders_v1_admin_lenders__get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LendersOut"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Admin Panel",
          "lenders admin"
        ],
        "summary": "Api Create Lender",
        "operationId": "api_create_lender_v1_admin_lenders__post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Lender"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LenderOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/lenders/{lender_id}": {
      "get": {
        "tags": [
          "Admin Panel",
          "lenders admin"
        ],
        "summary": "Api Get Lender By Id",
        "operationId": "api_get_lender_by_id_v1_admin_lenders__lender_id__get",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Lender Id",
              "type": "string"
            },
            "name": "lender_id",
            "in": "path"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LenderOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Admin Panel",
          "lenders admin"
        ],
        "summary": "Api Update Lender",
        "operationId": "api_update_lender_v1_admin_lenders__lender_id__patch",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Lender Id",
              "type": "integer"
            },
            "name": "lender_id",
            "in": "path"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LenderInUpdate"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LenderOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/categories/": {
      "get": {
        "tags": [
          "Admin Panel",
          "categories admin"
        ],
        "summary": "Api Get Category",
        "operationId": "api_get_category_v1_admin_categories__get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CategoriesOut"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Admin Panel",
          "categories admin"
        ],
        "summary": "Api Create Category",
        "operationId": "api_create_category_v1_admin_categories__post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Category"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CategoryOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/categories/{category_id}": {
      "get": {
        "tags": [
          "Admin Panel",
          "categories admin"
        ],
        "summary": "Api Get Category By Id",
        "operationId": "api_get_category_by_id_v1_admin_categories__category_id__get",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Category Id",
              "type": "integer"
            },
            "name": "category_id",
            "in": "path"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CategoryOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Admin Panel",
          "categories admin"
        ],
        "summary": "Api Update Category",
        "operationId": "api_update_category_v1_admin_categories__category_id__patch",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Category Id",
              "type": "integer"
            },
            "name": "category_id",
            "in": "path"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CategoryInUpdate"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CategoryOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/products/": {
      "get": {
        "tags": [
          "Admin Panel",
          "products admin"
        ],
        "summary": "Api Get Products",
        "operationId": "api_get_products_v1_admin_products__get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProductsOut"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Admin Panel",
          "products admin"
        ],
        "summary": "Api Create Product",
        "operationId": "api_create_product_v1_admin_products__post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Product"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProductOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/products/{product_id}": {
      "get": {
        "tags": [
          "Admin Panel",
          "products admin"
        ],
        "summary": "Api Get Product By Id",
        "operationId": "api_get_product_by_id_v1_admin_products__product_id__get",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Product Id",
              "type": "integer"
            },
            "name": "product_id",
            "in": "path"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProductOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Admin Panel",
          "products admin"
        ],
        "summary": "Api Update Product",
        "operationId": "api_update_product_v1_admin_products__product_id__patch",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Product Id",
              "type": "integer"
            },
            "name": "product_id",
            "in": "path"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ProductInUpdate"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ProductOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/rules/": {
      "get": {
        "tags": [
          "Admin Panel",
          "rules admin"
        ],
        "summary": "Api Get Pl Rules",
        "operationId": "api_get_pl_rules_v1_admin_rules__get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PlRulesOut"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Admin Panel",
          "rules admin"
        ],
        "summary": "Api Create Pl Rule",
        "operationId": "api_create_pl_rule_v1_admin_rules__post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PlRules"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PlRuleOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/rules/{rule_id}": {
      "get": {
        "tags": [
          "Admin Panel",
          "rules admin"
        ],
        "summary": "Api Get Pl Rule By Id",
        "operationId": "api_get_pl_rule_by_id_v1_admin_rules__rule_id__get",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Rule Id",
              "type": "integer"
            },
            "name": "rule_id",
            "in": "path"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PlRuleOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Admin Panel",
          "rules admin"
        ],
        "summary": "Api Update Pl Rule",
        "operationId": "api_update_pl_rule_v1_admin_rules__rule_id__patch",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Rule Id",
              "type": "integer"
            },
            "name": "rule_id",
            "in": "path"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PlRuleInUpdate"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PlRuleOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/companies/": {
      "get": {
        "tags": [
          "Admin Panel",
          "companies admin"
        ],
        "summary": "Api Get Companies",
        "operationId": "api_get_companies_v1_admin_companies__get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompaniesOut"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Admin Panel",
          "companies admin"
        ],
        "summary": "Api Create Company",
        "operationId": "api_create_company_v1_admin_companies__post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Company"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompanyOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/admin/companies/{company_id}": {
      "get": {
        "tags": [
          "Admin Panel",
          "companies admin"
        ],
        "summary": "Api Get Company By Id",
        "operationId": "api_get_company_by_id_v1_admin_companies__company_id__get",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Company Id",
              "type": "string"
            },
            "name": "company_id",
            "in": "path"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompanyOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Admin Panel",
          "companies admin"
        ],
        "summary": "Api Update Company",
        "operationId": "api_update_company_v1_admin_companies__company_id__patch",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Company Id",
              "type": "string"
            },
            "name": "company_id",
            "in": "path"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Company"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CompanyInUpdate"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/internal/credit-reports/profiles": {
      "get": {
        "tags": [
          "Internal credit bureau"
        ],
        "summary": "Api Get All Cb",
        "operationId": "api_get_all_cb_v1_internal_credit_reports_profiles_get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AllCustomerProfileOut"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Internal credit bureau"
        ],
        "summary": "Api Add Customer Profile",
        "operationId": "api_add_customer_profile_v1_internal_credit_reports_profiles_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CustomerProfile"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddCustomerProfile"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/internal/credit-reports/{cust_id}": {
      "get": {
        "tags": [
          "Internal credit bureau"
        ],
        "summary": "Api Get Credit Score",
        "operationId": "api_get_credit_score_v1_internal_credit_reports__cust_id__get",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Cust Id",
              "type": "integer"
            },
            "name": "cust_id",
            "in": "path"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {}
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/internal/loans/": {
      "get": {
        "tags": [
          "Internal loans"
        ],
        "summary": "Api Get Loans",
        "operationId": "api_get_loans_v1_internal_loans__get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoansOut"
                }
              }
            }
          }
        }
      }
    },
    "/v1/internal/loans/{loan_id}": {
      "patch": {
        "tags": [
          "Internal loans"
        ],
        "summary": "Api Update Loan",
        "operationId": "api_update_loan_v1_internal_loans__loan_id__patch",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Loan Id",
              "type": "integer"
            },
            "name": "loan_id",
            "in": "path"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/LoanInUpdate"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoanOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/lenders/": {
      "get": {
        "tags": [
          "Lender-FE"
        ],
        "summary": "Api Get Lenders",
        "operationId": "api_get_lenders_v1_lenders__get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LendersOut"
                }
              }
            }
          }
        }
      }
    },
    "/v1/lenders/{lender_id}": {
      "get": {
        "tags": [
          "Lender-FE"
        ],
        "summary": "Api Get Lender By Id",
        "operationId": "api_get_lender_by_id_v1_lenders__lender_id__get",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Lender Id",
              "type": "string"
            },
            "name": "lender_id",
            "in": "path"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LenderOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/customers/": {
      "get": {
        "tags": [
          "Customer-FE"
        ],
        "summary": "Api Get Customers",
        "operationId": "api_get_customers_v1_customers__get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CustomersOut"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Customer-FE"
        ],
        "summary": "Api Create Customer",
        "operationId": "api_create_customer_v1_customers__post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Customer"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CustomerOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/customers/{customer_id}": {
      "get": {
        "tags": [
          "Customer-FE"
        ],
        "summary": "Api Get Customer By Id",
        "operationId": "api_get_customer_by_id_v1_customers__customer_id__get",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Customer Id",
              "type": "integer"
            },
            "name": "customer_id",
            "in": "path"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CustomerOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "Customer-FE"
        ],
        "summary": "Api Update Customer",
        "operationId": "api_update_customer_v1_customers__customer_id__patch",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Customer Id",
              "type": "integer"
            },
            "name": "customer_id",
            "in": "path"
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/CustomerInUpdate"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CustomerOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/loans/": {
      "get": {
        "tags": [
          "Loan-FE"
        ],
        "summary": "Api Get Loans",
        "operationId": "api_get_loans_v1_loans__get",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoansOut"
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "Loan-FE"
        ],
        "summary": "Api Create Loan",
        "operationId": "api_create_loan_v1_loans__post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Loan"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoanOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/loans/{loan_id}": {
      "get": {
        "tags": [
          "Loan-FE"
        ],
        "summary": "Api Get Loan By Id",
        "operationId": "api_get_loan_by_id_v1_loans__loan_id__get",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Loan Id",
              "type": "integer"
            },
            "name": "loan_id",
            "in": "path"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoanOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/v1/locations/{pin_code}": {
      "get": {
        "tags": [
          "Location-FE"
        ],
        "summary": "Api Get Location",
        "operationId": "api_get_location_v1_locations__pin_code__get",
        "parameters": [
          {
            "required": true,
            "schema": {
              "title": "Pin Code",
              "type": "integer"
            },
            "name": "pin_code",
            "in": "path"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LocationOut"
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "AddCustomerProfile": {
        "title": "AddCustomerProfile",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/components/schemas/CustomerProfile"
          }
        }
      },
      "AllCustomerProfileOut": {
        "title": "AllCustomerProfileOut",
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomerProfile"
            },
            "default": []
          }
        }
      },
      "CategoriesOut": {
        "title": "CategoriesOut",
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Category"
            },
            "default": []
          }
        }
      },
      "Category": {
        "title": "Category",
        "required": [
          "product_id",
          "category_name",
          "salary_details",
          "loan_amount_details",
          "is_active",
          "created",
          "updated"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "Id",
            "type": "integer"
          },
          "product_id": {
            "title": "Product Id",
            "type": "integer"
          },
          "category_name": {
            "title": "Category Name",
            "type": "string"
          },
          "salary_details": {
            "title": "Salary Details",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/SalaryDetails"
            }
          },
          "loan_amount_details": {
            "title": "Loan Amount Details",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LoanAmountDetails"
            }
          },
          "is_active": {
            "title": "Is Active",
            "type": "boolean"
          },
          "created": {
            "title": "Created",
            "type": "integer"
          },
          "updated": {
            "title": "Updated",
            "type": "integer"
          }
        }
      },
      "CategoryInUpdate": {
        "title": "CategoryInUpdate",
        "type": "object",
        "properties": {
          "product_id": {
            "title": "Product Id",
            "type": "integer"
          },
          "category_name": {
            "title": "Category Name",
            "type": "string"
          },
          "salary_details": {
            "title": "Salary Details",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/SalaryDetails"
            }
          },
          "loan_amount_details": {
            "title": "Loan Amount Details",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/LoanAmountDetails"
            }
          },
          "is_active": {
            "title": "Is Active",
            "type": "boolean"
          },
          "created": {
            "title": "Created",
            "type": "integer"
          },
          "updated": {
            "title": "Updated",
            "type": "integer"
          }
        }
      },
      "CategoryOut": {
        "title": "CategoryOut",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Category"
          }
        }
      },
      "CompaniesOut": {
        "title": "CompaniesOut",
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Company"
            },
            "default": []
          }
        }
      },
      "Company": {
        "title": "Company",
        "required": [
          "name"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "Id",
            "type": "integer"
          },
          "name": {
            "title": "Name",
            "type": "string"
          }
        }
      },
      "CompanyInUpdate": {
        "title": "CompanyInUpdate",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Company"
          }
        }
      },
      "CompanyOut": {
        "title": "CompanyOut",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Company"
          }
        }
      },
      "CreditDetails": {
        "title": "CreditDetails",
        "type": "object",
        "properties": {
          "credit_score": {
            "title": "Credit Score",
            "type": "number"
          }
        }
      },
      "Customer": {
        "title": "Customer",
        "required": [
          "id"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "Id",
            "type": "integer"
          },
          "email": {
            "title": "Email",
            "type": "string"
          },
          "aadhar_number": {
            "title": "Aadhar Number",
            "type": "string"
          },
          "pan_number": {
            "title": "Pan Number",
            "type": "string"
          },
          "employment_status": {
            "title": "Employment Status",
            "type": "integer"
          },
          "gross_income": {
            "title": "Gross Income",
            "type": "integer"
          },
          "net_monthly_income": {
            "title": "Net Monthly Income",
            "type": "integer"
          },
          "company_name": {
            "title": "Company Name",
            "type": "string"
          },
          "work_email_address": {
            "title": "Work Email Address",
            "type": "string"
          },
          "salary_received_in": {
            "title": "Salary Received In",
            "type": "string"
          },
          "current_emi": {
            "title": "Current Emi",
            "type": "integer"
          },
          "current_work_experience": {
            "title": "Current Work Experience",
            "type": "integer"
          },
          "total_work_experience": {
            "title": "Total Work Experience",
            "type": "integer"
          },
          "residence_type": {
            "title": "Residence Type",
            "type": "string"
          },
          "credit_card_holder": {
            "title": "Credit Card Holder",
            "type": "boolean"
          },
          "credit_score": {
            "title": "Credit Score",
            "type": "number"
          },
          "is_active": {
            "title": "Is Active",
            "type": "boolean"
          }
        }
      },
      "CustomerInUpdate": {
        "title": "CustomerInUpdate",
        "type": "object",
        "properties": {
          "email": {
            "title": "Email",
            "type": "string"
          },
          "aadhar_number": {
            "title": "Aadhar Number",
            "type": "string"
          },
          "pan_number": {
            "title": "Pan Number",
            "type": "string"
          },
          "employment_status": {
            "title": "Employment Status",
            "type": "integer"
          },
          "gross_income": {
            "title": "Gross Income",
            "type": "integer"
          },
          "net_monthly_income": {
            "title": "Net Monthly Income",
            "type": "integer"
          },
          "company_name": {
            "title": "Company Name",
            "type": "string"
          },
          "work_email_address": {
            "title": "Work Email Address",
            "type": "string"
          },
          "salary_received_in": {
            "title": "Salary Received In",
            "type": "string"
          },
          "current_emi": {
            "title": "Current Emi",
            "type": "integer"
          },
          "current_work_experience": {
            "title": "Current Work Experience",
            "type": "integer"
          },
          "total_work_experience": {
            "title": "Total Work Experience",
            "type": "integer"
          },
          "residence_type": {
            "title": "Residence Type",
            "type": "string"
          },
          "credit_card_holder": {
            "title": "Credit Card Holder",
            "type": "boolean"
          },
          "credit_score": {
            "title": "Credit Score",
            "type": "number"
          }
        }
      },
      "CustomerOut": {
        "title": "CustomerOut",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/components/schemas/CustomerStages"
          }
        }
      },
      "CustomerProfile": {
        "title": "CustomerProfile",
        "required": [
          "fname",
          "mname",
          "lname",
          "dob",
          "occupation",
          "gender",
          "mobile",
          "email",
          "address",
          "city",
          "state",
          "pincode"
        ],
        "type": "object",
        "properties": {
          "cust_id": {
            "title": "Cust Id",
            "type": "integer"
          },
          "fname": {
            "title": "Fname",
            "type": "string"
          },
          "mname": {
            "title": "Mname",
            "type": "string"
          },
          "lname": {
            "title": "Lname",
            "type": "string"
          },
          "dob": {
            "title": "Dob",
            "type": "integer"
          },
          "occupation": {
            "title": "Occupation",
            "type": "string"
          },
          "gender": {
            "title": "Gender",
            "type": "string"
          },
          "pan": {
            "title": "Pan",
            "type": "string"
          },
          "aadhar": {
            "title": "Aadhar",
            "type": "string"
          },
          "mobile": {
            "title": "Mobile",
            "type": "string"
          },
          "email": {
            "title": "Email",
            "type": "string"
          },
          "address": {
            "title": "Address",
            "type": "string"
          },
          "city": {
            "title": "City",
            "type": "string"
          },
          "state": {
            "title": "State",
            "type": "string"
          },
          "pincode": {
            "title": "Pincode",
            "type": "string"
          },
          "dateofmodification": {
            "title": "Dateofmodification",
            "type": "integer"
          }
        }
      },
      "CustomerStages": {
        "title": "CustomerStages",
        "required": [
          "personal_details",
          "professional_details",
          "credit_details"
        ],
        "type": "object",
        "properties": {
          "personal_details": {
            "$ref": "#/components/schemas/PersonalDetails"
          },
          "professional_details": {
            "$ref": "#/components/schemas/ProfessionalDetails"
          },
          "credit_details": {
            "$ref": "#/components/schemas/CreditDetails"
          },
          "is_active": {
            "title": "Is Active",
            "type": "boolean",
            "default": false
          }
        }
      },
      "CustomersOut": {
        "title": "CustomersOut",
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CustomerStages"
            },
            "default": []
          }
        }
      },
      "HTTPValidationError": {
        "title": "HTTPValidationError",
        "type": "object",
        "properties": {
          "detail": {
            "title": "Detail",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ValidationError"
            }
          }
        }
      },
      "Lender": {
        "title": "Lender",
        "required": [
          "name",
          "is_active"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "Id",
            "type": "integer"
          },
          "name": {
            "title": "Name",
            "type": "string"
          },
          "type": {
            "title": "Type",
            "type": "integer",
            "default": 1
          },
          "is_active": {
            "title": "Is Active",
            "type": "boolean"
          }
        }
      },
      "LenderInUpdate": {
        "title": "LenderInUpdate",
        "type": "object",
        "properties": {
          "name": {
            "title": "Name",
            "type": "string"
          },
          "type": {
            "title": "Type",
            "type": "integer"
          },
          "is_active": {
            "title": "Is Active",
            "type": "integer"
          }
        }
      },
      "LenderOut": {
        "title": "LenderOut",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Lender"
          }
        }
      },
      "LendersOut": {
        "title": "LendersOut",
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Lender"
            },
            "default": []
          }
        }
      },
      "Loan": {
        "title": "Loan",
        "required": [
          "customer_id",
          "product_id"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "Id",
            "type": "integer"
          },
          "customer_id": {
            "title": "Customer Id",
            "type": "integer"
          },
          "product_id": {
            "title": "Product Id",
            "type": "integer"
          },
          "loan_amount_required": {
            "title": "Loan Amount Required",
            "type": "integer"
          },
          "purpose_of_loan": {
            "title": "Purpose Of Loan",
            "type": "string"
          },
          "applied_product_type": {
            "title": "Applied Product Type",
            "type": "string"
          },
          "date_initiated": {
            "title": "Date Initiated",
            "type": "integer"
          },
          "loan_status": {
            "title": "Loan Status",
            "type": "string"
          },
          "application_number": {
            "title": "Application Number",
            "type": "string"
          },
          "date_completed": {
            "title": "Date Completed",
            "type": "integer"
          },
          "amount_sanctioned": {
            "title": "Amount Sanctioned",
            "type": "number"
          },
          "amount_disbursed": {
            "title": "Amount Disbursed",
            "type": "number"
          },
          "lead_source": {
            "title": "Lead Source",
            "type": "string"
          },
          "source_id": {
            "title": "Source Id",
            "type": "string"
          },
          "journey_completed": {
            "title": "Journey Completed",
            "type": "boolean"
          },
          "roi": {
            "title": "Roi",
            "type": "number"
          },
          "processing_fee": {
            "title": "Processing Fee",
            "type": "number"
          },
          "emi_amount": {
            "title": "Emi Amount",
            "type": "number"
          },
          "emi_start_date": {
            "title": "Emi Start Date",
            "type": "integer"
          },
          "emi_end_date": {
            "title": "Emi End Date",
            "type": "integer"
          },
          "tenure": {
            "title": "Tenure",
            "type": "integer"
          }
        }
      },
      "LoanAmountDetails": {
        "title": "LoanAmountDetails",
        "type": "object",
        "properties": {
          "min": {
            "title": "Min",
            "type": "integer",
            "default": 0
          },
          "max": {
            "title": "Max",
            "type": "integer",
            "default": 0
          },
          "foir": {
            "title": "Foir",
            "type": "integer",
            "default": 0
          },
          "interest": {
            "title": "Interest",
            "type": "number",
            "default": 0
          }
        }
      },
      "LoanInUpdate": {
        "title": "LoanInUpdate",
        "type": "object",
        "properties": {
          "customer_id": {
            "title": "Customer Id",
            "type": "integer"
          },
          "product_id": {
            "title": "Product Id",
            "type": "integer"
          },
          "loan_amount_required": {
            "title": "Loan Amount Required",
            "type": "integer"
          },
          "purpose_of_loan": {
            "title": "Purpose Of Loan",
            "type": "string"
          },
          "applied_product_type": {
            "title": "Applied Product Type",
            "type": "string"
          },
          "date_initiated": {
            "title": "Date Initiated",
            "type": "integer"
          },
          "loan_status": {
            "title": "Loan Status",
            "type": "string"
          },
          "application_number": {
            "title": "Application Number",
            "type": "string"
          },
          "date_completed": {
            "title": "Date Completed",
            "type": "integer"
          },
          "amount_sanctioned": {
            "title": "Amount Sanctioned",
            "type": "number"
          },
          "amount_disbursed": {
            "title": "Amount Disbursed",
            "type": "number"
          },
          "lead_source": {
            "title": "Lead Source",
            "type": "string"
          },
          "source_id": {
            "title": "Source Id",
            "type": "string"
          },
          "journey_completed": {
            "title": "Journey Completed",
            "type": "boolean"
          },
          "roi": {
            "title": "Roi",
            "type": "number"
          },
          "processing_fee": {
            "title": "Processing Fee",
            "type": "number"
          },
          "emi_amount": {
            "title": "Emi Amount",
            "type": "number"
          },
          "emi_start_date": {
            "title": "Emi Start Date",
            "type": "integer"
          },
          "emi_end_date": {
            "title": "Emi End Date",
            "type": "integer"
          },
          "tenure": {
            "title": "Tenure",
            "type": "integer"
          }
        }
      },
      "LoanOut": {
        "title": "LoanOut",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Loan"
          }
        }
      },
      "LoansOut": {
        "title": "LoansOut",
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Loan"
            },
            "default": []
          }
        }
      },
      "Location": {
        "title": "Location",
        "required": [
          "pin",
          "city",
          "state",
          "country"
        ],
        "type": "object",
        "properties": {
          "pin": {
            "title": "Pin",
            "type": "integer"
          },
          "city": {
            "title": "City",
            "type": "string"
          },
          "state": {
            "title": "State",
            "type": "string"
          },
          "country": {
            "title": "Country",
            "type": "string"
          }
        }
      },
      "LocationOut": {
        "title": "LocationOut",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Location"
          }
        }
      },
      "PersonalDetails": {
        "title": "PersonalDetails",
        "type": "object",
        "properties": {
          "email": {
            "title": "Email",
            "type": "string"
          },
          "aadhar_number": {
            "title": "Aadhar Number",
            "type": "string"
          },
          "pan_number": {
            "title": "Pan Number",
            "type": "string"
          },
          "residence_type": {
            "title": "Residence Type",
            "type": "string"
          }
        }
      },
      "PlRuleInUpdate": {
        "title": "PlRuleInUpdate",
        "required": [
          "salaried_foir"
        ],
        "type": "object",
        "properties": {
          "product_id": {
            "title": "Product Id",
            "type": "integer"
          },
          "self_employed_professional_foir": {
            "title": "Self Employed Professional Foir",
            "type": "number"
          },
          "salaried_foir": {
            "title": "Salaried Foir",
            "type": "number"
          },
          "self_employed_professional_roi": {
            "title": "Self Employed Professional Roi",
            "type": "number"
          },
          "self_employed_roi": {
            "title": "Self Employed Roi",
            "type": "number"
          },
          "processing_fee": {
            "title": "Processing Fee",
            "type": "number"
          },
          "sal_criteria": {
            "title": "Sal Criteria",
            "type": "boolean"
          },
          "loan_amount_criteria": {
            "title": "Loan Amount Criteria",
            "type": "boolean"
          },
          "credit_score": {
            "title": "Credit Score",
            "type": "boolean"
          },
          "min_tenure": {
            "title": "Min Tenure",
            "type": "integer"
          },
          "max_tenure": {
            "title": "Max Tenure",
            "type": "integer"
          },
          "min_age": {
            "title": "Min Age",
            "type": "integer"
          },
          "max_age": {
            "title": "Max Age",
            "type": "integer"
          },
          "min_loanamount": {
            "title": "Min Loanamount",
            "type": "integer"
          },
          "max_loanamount": {
            "title": "Max Loanamount",
            "type": "integer"
          },
          "is_active": {
            "title": "Is Active",
            "type": "boolean"
          },
          "created": {
            "title": "Created",
            "type": "integer"
          },
          "updated": {
            "title": "Updated",
            "type": "integer"
          }
        }
      },
      "PlRuleOut": {
        "title": "PlRuleOut",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/components/schemas/PlRules"
          }
        }
      },
      "PlRules": {
        "title": "PlRules",
        "required": [
          "product_id",
          "salaried_foir",
          "self_employed_professional_foir",
          "self_employed_professional_roi",
          "processing_fee",
          "min_tenure",
          "max_tenure",
          "min_age",
          "max_age",
          "min_loanamount",
          "max_loanamount",
          "sal_criteria",
          "loan_amount_criteria",
          "credit_score",
          "is_active",
          "created",
          "updated"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "Id",
            "type": "integer"
          },
          "product_id": {
            "title": "Product Id",
            "type": "integer"
          },
          "salaried_foir": {
            "title": "Salaried Foir",
            "type": "number"
          },
          "self_employed_professional_foir": {
            "title": "Self Employed Professional Foir",
            "type": "number"
          },
          "self_employed_professional_roi": {
            "title": "Self Employed Professional Roi",
            "type": "number"
          },
          "salaried_roi": {
            "title": "Salaried Roi",
            "type": "number"
          },
          "processing_fee": {
            "title": "Processing Fee",
            "type": "number"
          },
          "min_tenure": {
            "title": "Min Tenure",
            "type": "integer"
          },
          "max_tenure": {
            "title": "Max Tenure",
            "type": "integer"
          },
          "min_age": {
            "title": "Min Age",
            "type": "integer"
          },
          "max_age": {
            "title": "Max Age",
            "type": "integer"
          },
          "min_loanamount": {
            "title": "Min Loanamount",
            "type": "integer"
          },
          "max_loanamount": {
            "title": "Max Loanamount",
            "type": "integer"
          },
          "sal_criteria": {
            "title": "Sal Criteria",
            "type": "boolean"
          },
          "loan_amount_criteria": {
            "title": "Loan Amount Criteria",
            "type": "boolean"
          },
          "credit_score": {
            "title": "Credit Score",
            "type": "integer"
          },
          "is_active": {
            "title": "Is Active",
            "type": "boolean"
          },
          "created": {
            "title": "Created",
            "type": "integer"
          },
          "updated": {
            "title": "Updated",
            "type": "integer"
          }
        }
      },
      "PlRulesOut": {
        "title": "PlRulesOut",
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PlRules"
            },
            "default": []
          }
        }
      },
      "Product": {
        "title": "Product",
        "required": [
          "lender_id",
          "name",
          "is_active"
        ],
        "type": "object",
        "properties": {
          "id": {
            "title": "Id",
            "type": "integer"
          },
          "lender_id": {
            "title": "Lender Id",
            "type": "integer"
          },
          "name": {
            "title": "Name",
            "type": "string"
          },
          "is_active": {
            "title": "Is Active",
            "type": "boolean"
          },
          "promoted": {
            "title": "Promoted",
            "type": "integer"
          },
          "instant_approved": {
            "title": "Instant Approved",
            "type": "boolean"
          }
        }
      },
      "ProductInUpdate": {
        "title": "ProductInUpdate",
        "type": "object",
        "properties": {
          "lender_id": {
            "title": "Lender Id",
            "type": "integer"
          },
          "name": {
            "title": "Name",
            "type": "string"
          },
          "is_active": {
            "title": "Is Active",
            "type": "boolean"
          },
          "promoted": {
            "title": "Promoted",
            "type": "integer"
          },
          "instant_approved": {
            "title": "Instant Approved",
            "type": "boolean"
          }
        }
      },
      "ProductOut": {
        "title": "ProductOut",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "$ref": "#/components/schemas/Product"
          }
        }
      },
      "ProductsOut": {
        "title": "ProductsOut",
        "required": [
          "data"
        ],
        "type": "object",
        "properties": {
          "data": {
            "title": "Data",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Product"
            }
          }
        }
      },
      "ProfessionalDetails": {
        "title": "ProfessionalDetails",
        "type": "object",
        "properties": {
          "employment_status": {
            "title": "Employment Status",
            "type": "integer"
          },
          "gross_income": {
            "title": "Gross Income",
            "type": "integer"
          },
          "net_monthly_income": {
            "title": "Net Monthly Income",
            "type": "integer"
          },
          "company_name": {
            "title": "Company Name",
            "type": "string"
          },
          "work_email_address": {
            "title": "Work Email Address",
            "type": "string"
          },
          "salary_received_in": {
            "title": "Salary Received In",
            "type": "string"
          },
          "current_emi": {
            "title": "Current Emi",
            "type": "integer"
          },
          "current_work_experience": {
            "title": "Current Work Experience",
            "type": "integer"
          },
          "total_work_experience": {
            "title": "Total Work Experience",
            "type": "integer"
          },
          "credit_card_holder": {
            "title": "Credit Card Holder",
            "type": "boolean"
          }
        }
      },
      "SalaryDetails": {
        "title": "SalaryDetails",
        "type": "object",
        "properties": {
          "min": {
            "title": "Min",
            "type": "integer",
            "default": 0
          },
          "max": {
            "title": "Max",
            "type": "integer",
            "default": 0
          },
          "foir": {
            "title": "Foir",
            "type": "integer",
            "default": 0
          },
          "interest": {
            "title": "Interest",
            "type": "number",
            "default": 0
          }
        }
      },
      "ValidationError": {
        "title": "ValidationError",
        "required": [
          "loc",
          "msg",
          "type"
        ],
        "type": "object",
        "properties": {
          "loc": {
            "title": "Location",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "msg": {
            "title": "Message",
            "type": "string"
          },
          "type": {
            "title": "Error Type",
            "type": "string"
          }
        }
      }
    }
  }
}