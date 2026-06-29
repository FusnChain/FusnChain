# Transaction API

## Submit Transaction

### Endpoint

```
POST /transactions
```

### Request Body

[Request schema to be documented]

### Response

[Response schema to be documented]

## Get Transaction Status

### Endpoint

```
GET /transactions/{txHash}
```

### Response

[Response schema to be documented]

## Transaction History

### Endpoint

```
GET /transactions?address={address}
```

### Query Parameters

- `address`: Account address
- `limit`: Number of results (default: 10)
- `offset`: Pagination offset

### Response

[Response schema to be documented]
