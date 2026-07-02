'use client'

import { useEffect, useState } from 'react'

const CACHE_KEY = 'ams_weather_v1'
const CACHE_TTL_MS = 30 * 60 * 1000 // 30 minutes

type WeatherData = { emoji: string; temp: number }

function getWeatherEmoji(code: number): string {
  if (code === 0) return '☀️'
  if (code <= 3) return '⛅'
  if (code <= 48) return '🌫️'
  if (code <= 67) return '🌧️'
  if (code <= 77) return '❄️'
  if (code <= 82) return '🌦️'
  return '⛈️'
}

function getAmsTime(): string {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}

export function AmsterdamWidget() {
  const [time, setTime] = useState<string>('')
  const [weather, setWeather] = useState<WeatherData | null>(null)

  // Live clock — tick every second
  useEffect(() => {
    setTime(getAmsTime())
    const id = setInterval(() => setTime(getAmsTime()), 1000)
    return () => clearInterval(id)
  }, [])

  // Weather — cached in localStorage for 30 min
  useEffect(() => {
    async function fetchWeather() {
      try {
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          const { data, timestamp } = JSON.parse(cached) as { data: WeatherData; timestamp: number }
          if (Date.now() - timestamp < CACHE_TTL_MS) {
            setWeather(data)
            return
          }
        }

        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&current=temperature_2m,weathercode&timezone=Europe/Amsterdam',
          { next: { revalidate: 0 } } as RequestInit
        )
        const json = await res.json()
        const current = json.current
        const code: number = current.weathercode ?? current.weather_code ?? 0
        const temp = Math.round(current.temperature_2m)
        const data: WeatherData = { emoji: getWeatherEmoji(code), temp }
        setWeather(data)
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
      } catch {
        // Silently degrade — show time only
      }
    }
    fetchWeather()
  }, [])

  if (!time) return null

  return (
    <p className="mt-3 text-label text-ink-muted text-center tabular-nums">
      Amsterdam&nbsp;·&nbsp;{time}
      {weather ? <>&nbsp;·&nbsp;{weather.emoji}&nbsp;{weather.temp}°C</> : null}
    </p>
  )
}
