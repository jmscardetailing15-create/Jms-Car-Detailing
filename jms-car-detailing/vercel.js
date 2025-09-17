// Vercel serverless function for handling form submissions
module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    // Process form data
    const { name, email, phone, message, vehicle, service } = req.body;

    // Here you would typically:
    // 1. Validate the data
    // 2. Store in a database
    // 3. Send an email notification

    // For demo purposes, we'll just return a success response
    res.status(200).json({
      success: true,
      message: 'Thank you for your message. We will contact you shortly!'
    });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
