'use client'

import { useState } from 'react'

const Calculator = () => {
  const [squareFeet, setSquareFeet] = useState<string>('')
  const [estimate, setEstimate] = useState<number | null>(null)

  // Price range: $0.35 - $0.85 per sq ft (industry average)
  const pricePerSqFt = { min: 0.35, max: 0.85 }

  const calculateEstimate = () => {
    const sqft = parseFloat(squareFeet)
    if (!isNaN(sqft) && sqft > 0) {
      const avgPrice = (pricePerSqFt.min + pricePerSqFt.max) / 2
      setEstimate(sqft * avgPrice)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Only allow numbers and decimals
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setSquareFeet(value)
      setEstimate(null)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="heading-sm mb-4 text-secondary-900">Sod Calculator</h3>
      <p className="text-secondary-600 mb-6">
        Get a quick estimate for your sod installation project
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="squareFeet" className="block text-sm font-medium text-secondary-700 mb-2">
            Area Size (Square Feet)
          </label>
          <input
            type="text"
            id="squareFeet"
            value={squareFeet}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
            placeholder="e.g., 1000"
          />
        </div>

        <button
          onClick={calculateEstimate}
          disabled={!squareFeet || parseFloat(squareFeet) <= 0}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Calculate Estimate
        </button>

        {estimate !== null && (
          <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6 mt-4">
            <p className="text-sm text-secondary-600 mb-2">Estimated Cost Range</p>
            <p className="heading-md text-primary-700">
              ${(parseFloat(squareFeet) * pricePerSqFt.min).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{' '}
              -{' '}
              ${(parseFloat(squareFeet) * pricePerSqFt.max).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="text-sm text-secondary-600 mt-3">
              Based on {squareFeet} sq ft at ${pricePerSqFt.min} - ${pricePerSqFt.max} per sq ft
            </p>
          </div>
        )}

        <p className="text-xs text-secondary-500 mt-4">
          * This is a rough estimate. Final pricing depends on site conditions, sod type, and other
          factors. Contact us for an accurate quote.
        </p>
      </div>
    </div>
  )
}

export default Calculator
