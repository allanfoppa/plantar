import { fetchPlantingCalendar as url } from '../constants/endpoints'

/**
 * Get planting calendar info
 * @module service/fetchPlantingCalendar
 * @method
 * @param {}
 * @returns {}
*/

export const fetchPlantingCalendar = async () => {
  try {

    let response = await fetch(url)
    let data = await response.json() || ''

    switch (response.status) {
      case 200:
        console.info("Reach API with success")
        return data
      default:
        console.error('Unable to reach API')
        break
    }

  } catch (error) {
    console.error('Unable to reach API by followig error:', error);
  }
}
