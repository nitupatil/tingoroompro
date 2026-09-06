// config.js - Shared configuration for all TingoRooms pages
const CONFIG = {
    SUPABASE_URL: 'https://akqboyoergetapshkbxa.supabase.co',
    
    // ⚠️ CRITICAL: Replace the key below with your 'anon' public key from Supabase. 
    // Do NOT use your service_role secret key here!
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrcWJveW9lcmdldGFwc2hrYnhhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4ODU5Mjc5NiwiZXhwIjoyMTA0MTY4Nzk2fQ.S8mMMiIS-sVnDhXTgMy-7MWSlQFsJ-8NTkyLMI7qTLE',
    ONESIGNAL_APP_ID: '55450834-8bd0-4c88-ba19-fcd255c17996',
    
    ONESIGNAL_APP_ID: '55450834-8bd0-4c88-ba19-fcd255c17996',
    
    // Add this new line for the Post page image uploads
    // Get this for free by creating an account at https://api.imgbb.com/
    IMGBB_API_KEY: '5319b763af6273a0680f66766badf96a' 
};

// This line allows build.js (Node.js) to read these keys while keeping HTML files working perfectly
if (typeof module !== 'undefined' && module.exports) { module.exports = CONFIG; }
