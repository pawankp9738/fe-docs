export default {
  openapi: "3.0.2",
  info: {
    title: "API doc",
    version: "0.1.0"
  },
  paths: {
    "/health-check": {
      get: {
        summary: "Health Check",
        operationId: "health_check_health_check_get",
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {}
              }
            }
          }
        }
      }
    },
    "/auth/login": {
      post: {
        tags: ["auth"],
        summary: "Api User Login",
        operationId: "api_user_login_auth_login_post",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UserInLogin"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AccessToken"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/auth/register": {
      post: {
        tags: ["auth"],
        summary: "Api Register User",
        operationId: "api_register_user_auth_register_post",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UserInRegister"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/BaseResponseModel"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/lenders/": {
      get: {
        tags: ["lenders"],
        summary: "Api Get Lenders",
        operationId: "api_get_lenders_lenders__get",
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LendersOut"
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["lenders"],
        summary: "Api Create Lender",
        operationId: "api_create_lender_lenders__post",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Lender"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LenderOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/lenders/{lender_id}": {
      get: {
        tags: ["lenders"],
        summary: "Api Get Lender By Id",
        operationId: "api_get_lender_by_id_lenders__lender_id__get",
        parameters: [
          {
            required: true,
            schema: {
              title: "Lender Id",
              type: "string"
            },
            name: "lender_id",
            in: "path"
          }
        ],
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LenderOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      },
      patch: {
        tags: ["lenders"],
        summary: "Api Update Customer",
        operationId: "api_update_customer_lenders__lender_id__patch",
        parameters: [
          {
            required: true,
            schema: {
              title: "Lender Id",
              type: "integer"
            },
            name: "lender_id",
            in: "path"
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LenderInUpdate"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LenderOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/products/": {
      get: {
        tags: ["products"],
        summary: "Api Get Products",
        operationId: "api_get_products_products__get",
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductsOut"
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["products"],
        summary: "Api Create Product",
        operationId: "api_create_product_products__post",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/products/{product_id}": {
      get: {
        tags: ["products"],
        summary: "Api Get Product By Id",
        operationId: "api_get_product_by_id_products__product_id__get",
        parameters: [
          {
            required: true,
            schema: {
              title: "Product Id",
              type: "integer"
            },
            name: "product_id",
            in: "path"
          }
        ],
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      },
      patch: {
        tags: ["products"],
        summary: "Api Update Product",
        operationId: "api_update_product_products__product_id__patch",
        parameters: [
          {
            required: true,
            schema: {
              title: "Product Id",
              type: "integer"
            },
            name: "product_id",
            in: "path"
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ProductInUpdate"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProductOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/customers/": {
      get: {
        tags: ["customers"],
        summary: "Api Get Customers",
        operationId: "api_get_customers_customers__get",
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CustomersOut"
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["customers"],
        summary: "Api Create Customer",
        operationId: "api_create_customer_customers__post",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Customer"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CustomerOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/customers/{customer_id}": {
      get: {
        tags: ["customers"],
        summary: "Api Get Customer By Id",
        operationId: "api_get_customer_by_id_customers__customer_id__get",
        parameters: [
          {
            required: true,
            schema: {
              title: "Customer Id",
              type: "integer"
            },
            name: "customer_id",
            in: "path"
          }
        ],
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CustomerOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      },
      patch: {
        tags: ["customers"],
        summary: "Api Update Customer",
        operationId: "api_update_customer_customers__customer_id__patch",
        parameters: [
          {
            required: true,
            schema: {
              title: "Customer Id",
              type: "integer"
            },
            name: "customer_id",
            in: "path"
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CustomerInUpdate"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CustomerOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/loans/": {
      get: {
        tags: ["loans"],
        summary: "Api Get Loans",
        operationId: "api_get_loans_loans__get",
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoansOut"
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["loans"],
        summary: "Api Create Loan",
        operationId: "api_create_loan_loans__post",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Loan"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoanOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/loans/{loan_id}": {
      get: {
        tags: ["loans"],
        summary: "Api Get Loan Loans",
        operationId: "api_get_loan_loans_loans__loan_id__get",
        parameters: [
          {
            required: true,
            schema: {
              title: "Loan Id",
              type: "integer"
            },
            name: "loan_id",
            in: "path"
          }
        ],
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoanOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      },
      patch: {
        tags: ["loans"],
        summary: "Api Update Loan",
        operationId: "api_update_loan_loans__loan_id__patch",
        parameters: [
          {
            required: true,
            schema: {
              title: "Loan Id",
              type: "integer"
            },
            name: "loan_id",
            in: "path"
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoanInUpdate"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoanOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/companies/": {
      get: {
        tags: ["companies"],
        summary: "Api Get Company",
        operationId: "api_get_company_companies__get",
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CompaniesOut"
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["companies"],
        summary: "Api Create Company",
        operationId: "api_create_company_companies__post",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Company"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CompanyOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/companies/{company_id}": {
      get: {
        tags: ["companies"],
        summary: "Api Get Company By Id",
        operationId: "api_get_company_by_id_companies__company_id__get",
        parameters: [
          {
            required: true,
            schema: {
              title: "Company Id",
              type: "string"
            },
            name: "company_id",
            in: "path"
          }
        ],
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CompanyOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      },
      patch: {
        tags: ["companies"],
        summary: "Api Update Company",
        operationId: "api_update_company_companies__company_id__patch",
        parameters: [
          {
            required: true,
            schema: {
              title: "Company Id",
              type: "string"
            },
            name: "company_id",
            in: "path"
          }
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Company"
              }
            }
          },
          required: true
        },
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/CompanyInUpdate"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    },
    "/locations/{pin_code}": {
      get: {
        tags: ["locations"],
        summary: "Api Get Location",
        operationId: "api_get_location_locations__pin_code__get",
        parameters: [
          {
            required: true,
            schema: {
              title: "Pin Code",
              type: "integer"
            },
            name: "pin_code",
            in: "path"
          }
        ],
        responses: {
          "200": {
            description: "Successful Response",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LocationOut"
                }
              }
            }
          },
          "422": {
            description: "Validation Error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/HTTPValidationError"
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      AccessToken: {
        title: "AccessToken",
        required: ["token"],
        type: "object",
        properties: {
          token: {
            title: "Token",
            type: "string"
          }
        }
      },
      AddCustomerProfile: {
        title: "AddCustomerProfile",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/CustomerProfile"
          }
        }
      },
      AllCustomerProfileOut: {
        title: "AllCustomerProfileOut",
        type: "object",
        properties: {
          data: {
            title: "Data",
            type: "array",
            items: {
              $ref: "#/components/schemas/CustomerProfile"
            },
            default: []
          }
        }
      },
      BaseResponseModel: {
        title: "BaseResponseModel",
        required: ["message"],
        type: "object",
        properties: {
          message: {
            title: "Message",
            type: "string"
          },
          status_code: {
            title: "Status Code",
            type: "string",
            default: 200
          }
        }
      },
      CategoriesOut: {
        title: "CategoriesOut",
        type: "object",
        properties: {
          data: {
            title: "Data",
            type: "array",
            items: {
              $ref: "#/components/schemas/Category"
            },
            default: []
          }
        }
      },
      Category: {
        title: "Category",
        required: [
          "product_id",
          "category_name",
          "salary_details",
          "loan_amount_details",
          "is_active",
          "created",
          "updated"
        ],
        type: "object",
        properties: {
          id: {
            title: "Id",
            type: "integer"
          },
          product_id: {
            title: "Product Id",
            type: "integer"
          },
          category_name: {
            title: "Category Name",
            type: "string"
          },
          salary_details: {
            title: "Salary Details",
            type: "array",
            items: {
              $ref: "#/components/schemas/SalaryDetails"
            }
          },
          loan_amount_details: {
            title: "Loan Amount Details",
            type: "array",
            items: {
              $ref: "#/components/schemas/LoanAmountDetails"
            }
          },
          is_active: {
            title: "Is Active",
            type: "boolean"
          },
          created: {
            title: "Created",
            type: "integer"
          },
          updated: {
            title: "Updated",
            type: "integer"
          }
        }
      },
      CategoryInUpdate: {
        title: "CategoryInUpdate",
        type: "object",
        properties: {
          product_id: {
            title: "Product Id",
            type: "integer"
          },
          category_name: {
            title: "Category Name",
            type: "string"
          },
          salary_details: {
            title: "Salary Details",
            type: "array",
            items: {
              $ref: "#/components/schemas/SalaryDetails"
            }
          },
          loan_amount_details: {
            title: "Loan Amount Details",
            type: "array",
            items: {
              $ref: "#/components/schemas/LoanAmountDetails"
            }
          },
          is_active: {
            title: "Is Active",
            type: "boolean"
          },
          created: {
            title: "Created",
            type: "integer"
          },
          updated: {
            title: "Updated",
            type: "integer"
          }
        }
      },
      CategoryOut: {
        title: "CategoryOut",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/Category"
          }
        }
      },
      CompaniesOut: {
        title: "CompaniesOut",
        type: "object",
        properties: {
          data: {
            title: "Data",
            type: "array",
            items: {
              $ref: "#/components/schemas/Company"
            },
            default: []
          }
        }
      },
      Company: {
        title: "Company",
        required: ["name"],
        type: "object",
        properties: {
          id: {
            title: "Id",
            type: "integer"
          },
          name: {
            title: "Name",
            type: "string"
          }
        }
      },
      CompanyInUpdate: {
        title: "CompanyInUpdate",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/Company"
          }
        }
      },
      CompanyOut: {
        title: "CompanyOut",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/Company"
          }
        }
      },
      CreditDetails: {
        title: "CreditDetails",
        type: "object",
        properties: {
          credit_score: {
            title: "Credit Score",
            type: "number"
          }
        }
      },
      Customer: {
        title: "Customer",
        required: ["id"],
        type: "object",
        properties: {
          id: {
            title: "Id",
            type: "integer"
          },
          email: {
            title: "Email",
            type: "string"
          },
          aadhar_number: {
            title: "Aadhar Number",
            type: "string"
          },
          pan_number: {
            title: "Pan Number",
            type: "string"
          },
          employment_status: {
            title: "Employment Status",
            type: "integer"
          },
          gross_income: {
            title: "Gross Income",
            type: "integer"
          },
          net_monthly_income: {
            title: "Net Monthly Income",
            type: "integer"
          },
          company_name: {
            title: "Company Name",
            type: "string"
          },
          work_email_address: {
            title: "Work Email Address",
            type: "string"
          },
          salary_received_in: {
            title: "Salary Received In",
            type: "string"
          },
          current_emi: {
            title: "Current Emi",
            type: "integer"
          },
          current_work_experience: {
            title: "Current Work Experience",
            type: "integer"
          },
          total_work_experience: {
            title: "Total Work Experience",
            type: "integer"
          },
          residence_type: {
            title: "Residence Type",
            type: "string"
          },
          credit_card_holder: {
            title: "Credit Card Holder",
            type: "boolean"
          },
          credit_score: {
            title: "Credit Score",
            type: "number"
          },
          is_active: {
            title: "Is Active",
            type: "boolean"
          }
        }
      },
      CustomerInUpdate: {
        title: "CustomerInUpdate",
        type: "object",
        properties: {
          email: {
            title: "Email",
            type: "string"
          },
          aadhar_number: {
            title: "Aadhar Number",
            type: "string"
          },
          pan_number: {
            title: "Pan Number",
            type: "string"
          },
          employment_status: {
            title: "Employment Status",
            type: "integer"
          },
          gross_income: {
            title: "Gross Income",
            type: "integer"
          },
          net_monthly_income: {
            title: "Net Monthly Income",
            type: "integer"
          },
          company_name: {
            title: "Company Name",
            type: "string"
          },
          work_email_address: {
            title: "Work Email Address",
            type: "string"
          },
          salary_received_in: {
            title: "Salary Received In",
            type: "string"
          },
          current_emi: {
            title: "Current Emi",
            type: "integer"
          },
          current_work_experience: {
            title: "Current Work Experience",
            type: "integer"
          },
          total_work_experience: {
            title: "Total Work Experience",
            type: "integer"
          },
          residence_type: {
            title: "Residence Type",
            type: "string"
          },
          credit_card_holder: {
            title: "Credit Card Holder",
            type: "boolean"
          },
          credit_score: {
            title: "Credit Score",
            type: "number"
          }
        }
      },
      CustomerOut: {
        title: "CustomerOut",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/CustomerStages"
          }
        }
      },
      CustomerProfile: {
        title: "CustomerProfile",
        required: [
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
        type: "object",
        properties: {
          cust_id: {
            title: "Cust Id",
            type: "integer"
          },
          fname: {
            title: "Fname",
            type: "string"
          },
          mname: {
            title: "Mname",
            type: "string"
          },
          lname: {
            title: "Lname",
            type: "string"
          },
          dob: {
            title: "Dob",
            type: "integer"
          },
          occupation: {
            title: "Occupation",
            type: "string"
          },
          gender: {
            title: "Gender",
            type: "string"
          },
          pan: {
            title: "Pan",
            type: "string"
          },
          aadhar: {
            title: "Aadhar",
            type: "integer"
          },
          mobile: {
            title: "Mobile",
            type: "string"
          },
          email: {
            title: "Email",
            type: "string"
          },
          address: {
            title: "Address",
            type: "string"
          },
          city: {
            title: "City",
            type: "string"
          },
          state: {
            title: "State",
            type: "string"
          },
          pincode: {
            title: "Pincode",
            type: "string"
          },
          dateofmodification: {
            title: "Dateofmodification",
            type: "integer"
          }
        }
      },
      CustomerProfileOut: {
        title: "CustomerProfileOut",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/CustomerProfile"
          }
        }
      },
      CustomerStages: {
        title: "CustomerStages",
        required: [
          "personal_details",
          "professional_details",
          "credit_details"
        ],
        type: "object",
        properties: {
          personal_details: {
            $ref: "#/components/schemas/PersonalDetails"
          },
          professional_details: {
            $ref: "#/components/schemas/ProfessionalDetails"
          },
          credit_details: {
            $ref: "#/components/schemas/CreditDetails"
          },
          is_active: {
            title: "Is Active",
            type: "boolean",
            default: false
          }
        }
      },
      CustomersOut: {
        title: "CustomersOut",
        type: "object",
        properties: {
          data: {
            title: "Data",
            type: "array",
            items: {
              $ref: "#/components/schemas/CustomerStages"
            },
            default: []
          }
        }
      },
      HTTPValidationError: {
        title: "HTTPValidationError",
        type: "object",
        properties: {
          detail: {
            title: "Detail",
            type: "array",
            items: {
              $ref: "#/components/schemas/ValidationError"
            }
          }
        }
      },
      Lender: {
        title: "Lender",
        required: ["name", "is_active"],
        type: "object",
        properties: {
          id: {
            title: "Id",
            type: "integer"
          },
          name: {
            title: "Name",
            type: "string"
          },
          type: {
            title: "Type",
            type: "integer",
            default: 1
          },
          is_active: {
            title: "Is Active",
            type: "boolean"
          }
        }
      },
      LenderInUpdate: {
        title: "LenderInUpdate",
        type: "object",
        properties: {
          name: {
            title: "Name",
            type: "string"
          },
          type: {
            title: "Type",
            type: "integer"
          },
          is_active: {
            title: "Is Active",
            type: "integer"
          }
        }
      },
      LenderOut: {
        title: "LenderOut",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/Lender"
          }
        }
      },
      LendersOut: {
        title: "LendersOut",
        type: "object",
        properties: {
          data: {
            title: "Data",
            type: "array",
            items: {
              $ref: "#/components/schemas/Lender"
            },
            default: []
          }
        }
      },
      Loan: {
        title: "Loan",
        required: ["customer_id", "product_id"],
        type: "object",
        properties: {
          id: {
            title: "Id",
            type: "integer"
          },
          customer_id: {
            title: "Customer Id",
            type: "integer"
          },
          product_id: {
            title: "Product Id",
            type: "integer"
          },
          loan_amount_required: {
            title: "Loan Amount Required",
            type: "integer"
          },
          purpose_of_loan: {
            title: "Purpose Of Loan",
            type: "string"
          },
          applied_product_type: {
            title: "Applied Product Type",
            type: "string"
          },
          date_initiated: {
            title: "Date Initiated",
            type: "integer"
          },
          loan_status: {
            title: "Loan Status",
            type: "string"
          },
          application_number: {
            title: "Application Number",
            type: "string"
          },
          date_completed: {
            title: "Date Completed",
            type: "integer"
          },
          amount_sanctioned: {
            title: "Amount Sanctioned",
            type: "number"
          },
          amount_disbursed: {
            title: "Amount Disbursed",
            type: "number"
          },
          lead_source: {
            title: "Lead Source",
            type: "string"
          },
          source_id: {
            title: "Source Id",
            type: "string"
          },
          journey_completed: {
            title: "Journey Completed",
            type: "boolean"
          },
          roi: {
            title: "Roi",
            type: "number"
          },
          processing_fee: {
            title: "Processing Fee",
            type: "number"
          },
          emi_amount: {
            title: "Emi Amount",
            type: "number"
          },
          emi_start_date: {
            title: "Emi Start Date",
            type: "integer"
          },
          emi_end_date: {
            title: "Emi End Date",
            type: "integer"
          },
          tenure: {
            title: "Tenure",
            type: "integer"
          }
        }
      },
      LoanAmountDetails: {
        title: "LoanAmountDetails",
        type: "object",
        properties: {
          min: {
            title: "Min",
            type: "integer",
            default: 0
          },
          max: {
            title: "Max",
            type: "integer",
            default: 0
          },
          foir: {
            title: "Foir",
            type: "integer",
            default: 0
          },
          interest: {
            title: "Interest",
            type: "number",
            default: 0
          }
        }
      },
      LoanInUpdate: {
        title: "LoanInUpdate",
        type: "object",
        properties: {
          customer_id: {
            title: "Customer Id",
            type: "integer"
          },
          product_id: {
            title: "Product Id",
            type: "integer"
          },
          loan_amount_required: {
            title: "Loan Amount Required",
            type: "integer"
          },
          purpose_of_loan: {
            title: "Purpose Of Loan",
            type: "string"
          },
          applied_product_type: {
            title: "Applied Product Type",
            type: "string"
          },
          date_initiated: {
            title: "Date Initiated",
            type: "integer"
          },
          loan_status: {
            title: "Loan Status",
            type: "string"
          },
          application_number: {
            title: "Application Number",
            type: "string"
          },
          date_completed: {
            title: "Date Completed",
            type: "integer"
          },
          amount_sanctioned: {
            title: "Amount Sanctioned",
            type: "number"
          },
          amount_disbursed: {
            title: "Amount Disbursed",
            type: "number"
          },
          lead_source: {
            title: "Lead Source",
            type: "string"
          },
          source_id: {
            title: "Source Id",
            type: "string"
          },
          journey_completed: {
            title: "Journey Completed",
            type: "boolean"
          },
          roi: {
            title: "Roi",
            type: "number"
          },
          processing_fee: {
            title: "Processing Fee",
            type: "number"
          },
          emi_amount: {
            title: "Emi Amount",
            type: "number"
          },
          emi_start_date: {
            title: "Emi Start Date",
            type: "integer"
          },
          emi_end_date: {
            title: "Emi End Date",
            type: "integer"
          },
          tenure: {
            title: "Tenure",
            type: "integer"
          }
        }
      },
      LoanOut: {
        title: "LoanOut",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/Loan"
          }
        }
      },
      LoansOut: {
        title: "LoansOut",
        type: "object",
        properties: {
          data: {
            title: "Data",
            type: "array",
            items: {
              $ref: "#/components/schemas/Loan"
            },
            default: []
          }
        }
      },
      Location: {
        title: "Location",
        required: ["pin", "city", "state", "country"],
        type: "object",
        properties: {
          pin: {
            title: "Pin",
            type: "integer"
          },
          city: {
            title: "City",
            type: "string"
          },
          state: {
            title: "State",
            type: "string"
          },
          country: {
            title: "Country",
            type: "string"
          }
        }
      },
      LocationOut: {
        title: "LocationOut",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/Location"
          }
        }
      },
      PersonalDetails: {
        title: "PersonalDetails",
        type: "object",
        properties: {
          email: {
            title: "Email",
            type: "string"
          },
          aadhar_number: {
            title: "Aadhar Number",
            type: "string"
          },
          pan_number: {
            title: "Pan Number",
            type: "string"
          },
          residence_type: {
            title: "Residence Type",
            type: "string"
          }
        }
      },
      PlRuleInUpdate: {
        title: "PlRuleInUpdate",
        required: ["salaried_foir"],
        type: "object",
        properties: {
          product_id: {
            title: "Product Id",
            type: "integer"
          },
          self_employed_professional_foir: {
            title: "Self Employed Professional Foir",
            type: "number"
          },
          salaried_foir: {
            title: "Salaried Foir",
            type: "number"
          },
          self_employed_professional_roi: {
            title: "Self Employed Professional Roi",
            type: "number"
          },
          self_employed_roi: {
            title: "Self Employed Roi",
            type: "number"
          },
          processing_fee: {
            title: "Processing Fee",
            type: "number"
          },
          sal_criteria: {
            title: "Sal Criteria",
            type: "boolean"
          },
          loan_amount_criteria: {
            title: "Loan Amount Criteria",
            type: "boolean"
          },
          credit_score: {
            title: "Credit Score",
            type: "boolean"
          },
          min_tenure: {
            title: "Min Tenure",
            type: "integer"
          },
          max_tenure: {
            title: "Max Tenure",
            type: "integer"
          },
          min_age: {
            title: "Min Age",
            type: "integer"
          },
          max_age: {
            title: "Max Age",
            type: "integer"
          },
          min_loanamount: {
            title: "Min Loanamount",
            type: "integer"
          },
          max_loanamount: {
            title: "Max Loanamount",
            type: "integer"
          },
          is_active: {
            title: "Is Active",
            type: "boolean"
          },
          created: {
            title: "Created",
            type: "integer"
          },
          updated: {
            title: "Updated",
            type: "integer"
          }
        }
      },
      PlRuleOut: {
        title: "PlRuleOut",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/PlRules"
          }
        }
      },
      PlRules: {
        title: "PlRules",
        required: [
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
        type: "object",
        properties: {
          id: {
            title: "Id",
            type: "integer"
          },
          product_id: {
            title: "Product Id",
            type: "integer"
          },
          salaried_foir: {
            title: "Salaried Foir",
            type: "number"
          },
          self_employed_professional_foir: {
            title: "Self Employed Professional Foir",
            type: "number"
          },
          self_employed_professional_roi: {
            title: "Self Employed Professional Roi",
            type: "number"
          },
          salaried_roi: {
            title: "Salaried Roi",
            type: "number"
          },
          processing_fee: {
            title: "Processing Fee",
            type: "number"
          },
          min_tenure: {
            title: "Min Tenure",
            type: "integer"
          },
          max_tenure: {
            title: "Max Tenure",
            type: "integer"
          },
          min_age: {
            title: "Min Age",
            type: "integer"
          },
          max_age: {
            title: "Max Age",
            type: "integer"
          },
          min_loanamount: {
            title: "Min Loanamount",
            type: "integer"
          },
          max_loanamount: {
            title: "Max Loanamount",
            type: "integer"
          },
          sal_criteria: {
            title: "Sal Criteria",
            type: "boolean"
          },
          loan_amount_criteria: {
            title: "Loan Amount Criteria",
            type: "boolean"
          },
          credit_score: {
            title: "Credit Score",
            type: "integer"
          },
          is_active: {
            title: "Is Active",
            type: "boolean"
          },
          created: {
            title: "Created",
            type: "integer"
          },
          updated: {
            title: "Updated",
            type: "integer"
          }
        }
      },
      PlRulesOut: {
        title: "PlRulesOut",
        type: "object",
        properties: {
          data: {
            title: "Data",
            type: "array",
            items: {
              $ref: "#/components/schemas/PlRules"
            },
            default: []
          }
        }
      },
      Product: {
        title: "Product",
        required: ["lender_id", "name", "is_active"],
        type: "object",
        properties: {
          id: {
            title: "Id",
            type: "integer"
          },
          lender_id: {
            title: "Lender Id",
            type: "integer"
          },
          name: {
            title: "Name",
            type: "string"
          },
          is_active: {
            title: "Is Active",
            type: "boolean"
          },
          promoted: {
            title: "Promoted",
            type: "integer"
          },
          instant_approved: {
            title: "Instant Approved",
            type: "boolean"
          }
        }
      },
      ProductInUpdate: {
        title: "ProductInUpdate",
        type: "object",
        properties: {
          lender_id: {
            title: "Lender Id",
            type: "integer"
          },
          name: {
            title: "Name",
            type: "string"
          },
          is_active: {
            title: "Is Active",
            type: "boolean"
          },
          promoted: {
            title: "Promoted",
            type: "integer"
          },
          instant_approved: {
            title: "Instant Approved",
            type: "boolean"
          }
        }
      },
      ProductOut: {
        title: "ProductOut",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/Product"
          }
        }
      },
      ProductsOut: {
        title: "ProductsOut",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            title: "Data",
            type: "array",
            items: {
              $ref: "#/components/schemas/Product"
            }
          }
        }
      },
      ProfessionalDetails: {
        title: "ProfessionalDetails",
        type: "object",
        properties: {
          employment_status: {
            title: "Employment Status",
            type: "integer"
          },
          gross_income: {
            title: "Gross Income",
            type: "integer"
          },
          net_monthly_income: {
            title: "Net Monthly Income",
            type: "integer"
          },
          company_name: {
            title: "Company Name",
            type: "string"
          },
          work_email_address: {
            title: "Work Email Address",
            type: "string"
          },
          salary_received_in: {
            title: "Salary Received In",
            type: "string"
          },
          current_emi: {
            title: "Current Emi",
            type: "integer"
          },
          current_work_experience: {
            title: "Current Work Experience",
            type: "integer"
          },
          total_work_experience: {
            title: "Total Work Experience",
            type: "integer"
          },
          credit_card_holder: {
            title: "Credit Card Holder",
            type: "boolean"
          }
        }
      },
      SalaryDetails: {
        title: "SalaryDetails",
        type: "object",
        properties: {
          min: {
            title: "Min",
            type: "integer",
            default: 0
          },
          max: {
            title: "Max",
            type: "integer",
            default: 0
          },
          foir: {
            title: "Foir",
            type: "integer",
            default: 0
          },
          interest: {
            title: "Interest",
            type: "number",
            default: 0
          }
        }
      },
      User: {
        title: "User",
        required: ["email"],
        type: "object",
        properties: {
          email: {
            title: "Email",
            type: "string"
          },
          name: {
            title: "Name",
            type: "string",
            default: ""
          },
          address: {
            title: "Address",
            type: "string",
            default: ""
          },
          age: {
            title: "Age",
            type: "integer"
          }
        }
      },
      UserInLogin: {
        title: "UserInLogin",
        required: ["email", "password"],
        type: "object",
        properties: {
          email: {
            title: "Email",
            type: "string",
            format: "email"
          },
          password: {
            title: "Password",
            type: "string"
          }
        }
      },
      UserInRegister: {
        title: "UserInRegister",
        required: ["email", "password"],
        type: "object",
        properties: {
          email: {
            title: "Email",
            type: "string",
            format: "email"
          },
          password: {
            title: "Password",
            type: "string"
          },
          name: {
            title: "Name",
            type: "string",
            default: ""
          },
          address: {
            title: "Address",
            type: "string",
            default: ""
          },
          age: {
            title: "Age",
            type: "integer"
          }
        }
      },
      UserInResponse: {
        title: "UserInResponse",
        required: ["data"],
        type: "object",
        properties: {
          data: {
            $ref: "#/components/schemas/User"
          }
        }
      },
      UserInUpdate: {
        title: "UserInUpdate",
        type: "object",
        properties: {
          email: {
            title: "Email",
            type: "string",
            format: "email"
          },
          name: {
            title: "Name",
            type: "string"
          },
          address: {
            title: "Address",
            type: "string"
          },
          age: {
            title: "Age",
            type: "integer"
          }
        }
      },
      ValidationError: {
        title: "ValidationError",
        required: ["loc", "msg", "type"],
        type: "object",
        properties: {
          loc: {
            title: "Location",
            type: "array",
            items: {
              type: "string"
            }
          },
          msg: {
            title: "Message",
            type: "string"
          },
          type: {
            title: "Error Type",
            type: "string"
          }
        }
      }
    }
  }
};
