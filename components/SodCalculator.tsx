'use client'

import { useState } from 'react'
import { FiPlus, FiTrash2, FiRefreshCw, FiCheckCircle } from 'react-icons/fi'
import Link from 'next/link'

interface Area {
    id: string
    name: string
    width: string
    length: string
}

export default function SodCalculator() {
    const [areas, setAreas] = useState<Area[]>([
        { id: '1', name: 'Main Area', width: '', length: '' }
    ])

    const [unit, setUnit] = useState<'ft' | 'm'>('ft')

    const addArea = () => {
        setAreas([
            ...areas,
            {
                id: Math.random().toString(36).substr(2, 9),
                name: `Area ${areas.length + 1}`,
                width: '',
                length: ''
            }
        ])
    }

    const removeArea = (id: string) => {
        if (areas.length > 1) {
            setAreas(areas.filter(area => area.id !== id))
        }
    }

    const updateArea = (id: string, field: 'width' | 'length' | 'name', value: string) => {
        setAreas(areas.map(area =>
            area.id === id ? { ...area, [field]: value } : area
        ))
    }

    const resetCalculator = () => {
        setAreas([{ id: '1', name: 'Main Area', width: '', length: '' }])
    }

    // Calculations
    const calculateTotalSqFt = () => {
        return areas.reduce((total, area) => {
            const w = parseFloat(area.width) || 0
            const l = parseFloat(area.length) || 0
            return total + (w * l)
        }, 0)
    }

    const totalSqFt = calculateTotalSqFt()
    // Assuming a standard pallet covers approx 400 sq ft (common for St. Augustine)
    // We can display a range or just a standard estimate with a disclaimer
    const palletsNeeded = Math.max(0, totalSqFt / 400).toFixed(1)

    // Waste factor (usually 5-10% for cuts)
    const wasteFactorSqFt = totalSqFt * 1.10
    const recommendedPallets = Math.ceil(wasteFactorSqFt / 400)

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-secondary-100">
            <div className="bg-primary-600 p-6 text-white text-center">
                <h2 className="text-2xl font-bold mb-2">Sod Project Calculator</h2>
                <p className="opacity-90">Measure your yard to estimate materials</p>
            </div>

            <div className="p-6 md:p-8">
                {/* Areas Input */}
                <div className="space-y-6 mb-8">
                    {areas.map((area, index) => (
                        <div key={area.id} className="bg-secondary-50 p-4 rounded-lg border border-secondary-200 animate-fadeIn">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-secondary-800 flex items-center gap-2">
                                    <span className="bg-primary-100 text-primary-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                        {index + 1}
                                    </span>
                                    {area.name}
                                </h3>
                                {areas.length > 1 && (
                                    <button
                                        onClick={() => removeArea(area.id)}
                                        className="text-red-500 hover:text-red-700 transition-colors p-1"
                                        title="Remove Area"
                                    >
                                        <FiTrash2 />
                                    </button>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-secondary-500 mb-1 uppercase tracking-wider">
                                        Width ({unit})
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="0"
                                        value={area.width}
                                        onChange={(e) => updateArea(area.id, 'width', e.target.value)}
                                        className="w-full p-2 border border-secondary-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-secondary-500 mb-1 uppercase tracking-wider">
                                        Length ({unit})
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        placeholder="0"
                                        value={area.length}
                                        onChange={(e) => updateArea(area.id, 'length', e.target.value)}
                                        className="w-full p-2 border border-secondary-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-shadow"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-between items-center pt-2">
                        <button
                            onClick={addArea}
                            className="flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition-colors"
                        >
                            <FiPlus className="w-5 h-5" /> Add Another Area
                        </button>

                        <button
                            onClick={resetCalculator}
                            className="flex items-center gap-2 text-secondary-500 hover:text-secondary-700 text-sm"
                        >
                            <FiRefreshCw /> Reset
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-secondary-900 text-white rounded-xl p-6 md:p-8 relative overflow-hidden">
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-secondary-700">

                        <div className="pb-6 md:pb-0">
                            <div className="text-secondary-400 text-sm font-medium uppercase tracking-wider mb-2">Total Area</div>
                            <div className="text-4xl font-bold mb-1 text-primary-400">
                                {totalSqFt.toLocaleString()}
                            </div>
                            <div className="text-secondary-400 text-sm">Square Feet</div>
                        </div>

                        <div className="py-6 md:py-0">
                            <div className="text-secondary-400 text-sm font-medium uppercase tracking-wider mb-2">Pallets Est.</div>
                            <div className="text-4xl font-bold mb-1 text-white">
                                {palletsNeeded}
                            </div>
                            <div className="text-secondary-400 text-sm">Based on 400 sq ft/pallet</div>
                        </div>

                        <div className="pt-6 md:pt-0">
                            <div className="text-secondary-400 text-sm font-medium uppercase tracking-wider mb-2">Recommended Order</div>
                            <div className="text-4xl font-bold mb-1 text-green-400">
                                {recommendedPallets}
                            </div>
                            <div className="text-secondary-400 text-sm">Pallets (Includes 10% waste)</div>
                        </div>
                    </div>

                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-600 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                </div>

                {/* Disclaimer & CTA */}
                <div className="mt-8 text-center space-y-6">
                    <p className="text-sm text-secondary-500 italic max-w-2xl mx-auto">
                        *Calculations are estimates only. Sod pallets typically cover 400-500 sq ft depending on the farm and grass type. We recommend measuring carefully and allowing for 5-10% waste for cuts and shaping.
                    </p>

                    <div className="bg-primary-50 border border-primary-100 rounded-lg p-6 flex flex-col items-center">
                        <h3 className="text-lg font-bold text-secondary-900 mb-2">Ready to get an exact price?</h3>
                        <p className="text-secondary-700 mb-4">
                            Now that you have your measurements, contact us for a free quote tailored to your project access and prep needs.
                        </p>
                        <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                            <FiCheckCircle /> Request Quote with These Numbers
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
