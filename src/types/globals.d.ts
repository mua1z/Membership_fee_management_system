export {}

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean
      role?: 'admin' | 'sector_officer' | 'expert'
      sectorUnitId?: number
    }
  }
}
