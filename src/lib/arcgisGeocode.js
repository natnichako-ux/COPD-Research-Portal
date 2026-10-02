const BASE = 'https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer'

export async function suggest(text, apiKey, maxSuggestions = 6) {
  if (!text || text.length < 2) return []
  const url = `${BASE}/suggest?f=json&text=${encodeURIComponent(text)}&maxSuggestions=${maxSuggestions}${apiKey ? `&apiKey=${encodeURIComponent(apiKey)}` : ''}`
  const res = await fetch(url)
  if (!res.ok) return []
  const json = await res.json()
  return json.suggestions || []
}

export async function findAddressCandidates(singleLine, apiKey, maxLocations = 1) {
  if (!singleLine || singleLine.length < 1) return []
  const url = `${BASE}/findAddressCandidates?f=json&SingleLine=${encodeURIComponent(singleLine)}&maxLocations=${maxLocations}&outFields=Match_addr,Addr_type${apiKey ? `&apiKey=${encodeURIComponent(apiKey)}` : ''}`
  const res = await fetch(url)
  if (!res.ok) return []
  const json = await res.json()
  return json.candidates || []
}
