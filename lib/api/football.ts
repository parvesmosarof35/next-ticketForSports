interface FootballData {
  id: string;
  name: string;
  // Add more fields as needed
}

export async function fetchFootballData(type: string, identifier: string): Promise<FootballData> {
  // Replace this with your actual API endpoint
  const baseUrl = process.env.FOOTBALL_API_URL || 'https://api.football-data.org/v4';
  const apiKey = process.env.FOOTBALL_API_KEY;

  if (!apiKey) {
    throw new Error('Football API key is not configured');
  }

  let endpoint = '';
  
  // Map URL parameters to API endpoints
  switch (type) {
    case 'league':
      endpoint = `/competitions/${identifier}`;
      break;
    case 'tournament':
      endpoint = `/competitions/${identifier}`;
      break;
    case 'team':
      endpoint = `/teams/${identifier}`;
      break;
    default:
      throw new Error('Invalid football data type');
  }

  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      headers: {
        'X-Auth-Token': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching football data:', error);
    throw error;
  }
}

// Helper function to get all leagues for the navbar
export async function getAllLeagues(): Promise<Array<{ id: string; name: string }>> {
  try {
    // This is a simplified example - adjust based on your API
    const response = await fetch('https://api.football-data.org/v4/competitions', {
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_API_KEY || '',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch leagues');
    }

    const data = await response.json();
    return data.competitions || [];
  } catch (error) {
    console.error('Error fetching leagues:', error);
    return [];
  }
}
