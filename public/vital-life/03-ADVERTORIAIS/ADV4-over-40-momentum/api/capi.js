// Meta Conversions API (CAPI) Endpoint
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const PIXEL_ID = process.env.META_PIXEL_ID || '3815463538595877';
  const ACCESS_TOKEN = process.env.META_CAPI_TOKEN || 'EAAR29VAMNX0BSRA2DB8YybB5Di2vN5V0u9OahIP6ZCyePGVktwLqx3gamSGVVf8Lii8N7lBGZA0eTe0ZA6GDNaZCgCDgEB5cqMwp9nZCzPHVysKfMSzZBHlIdfJ0q0D3DxTzSjbHGEHliB5IZAfErmkZBsHtgN1bMs43VUmhU6F8M2U0A9ZArOY0vUUofZAXlZCjQZDZD';

  try {
    const { event_name, event_id, event_time, event_source_url, custom_data, user_data } = req.body || {};

    const clientIp = req.headers['x-forwarded-for']
      ? req.headers['x-forwarded-for'].split(',')[0].trim()
      : req.socket?.remoteAddress;
    const userAgent = req.headers['user-agent'] || user_data?.client_user_agent;

    const payload = {
      data: [
        {
          event_name: event_name || 'PageView',
          event_time: event_time || Math.floor(Date.now() / 1000),
          event_id: event_id,
          event_source_url: event_source_url || req.headers.referer || 'https://myvitallife.fit/',
          action_source: 'website',
          user_data: {
            client_ip_address: clientIp,
            client_user_agent: userAgent,
            fbp: user_data?.fbp || undefined,
            fbc: user_data?.fbc || undefined,
            ...(user_data?.em ? { em: user_data.em } : {}),
            ...(user_data?.ph ? { ph: user_data.ph } : {})
          },
          ...(custom_data ? { custom_data } : {})
        }
      ]
    };

    const response = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
