type JWT = {
  iat: number // issued at (numericDate)
  exp: number // expiration date (numeric date)
}

export interface JWTEncode {
  email: string
}

export interface JWTDecoded extends JWTEncode, JWT {}
