// config.js - Shared configuration for all TingoRooms pages
const CONFIG = {
    SUPABASE_URL: 'https://akqboyoergetapshkbxa.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrcWJveW9lcmdldGFwc2hrYnhhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4ODU5Mjc5NiwiZXhwIjoyMTA0MTY4Nzk2fQ.S8mMMiIS-sVnDhXTgMy-7MWSlQFsJ-8NTkyLMI7qTLE',
    ONESIGNAL_APP_ID: '55450834-8bd0-4c88-ba19-fcd255c17996'
};

// This line allows build.js (Node.js) to read these keys while keeping HTML files working perfectly
if (typeof module !== 'undefined' && module.exports) { module.exports = CONFIG; }
