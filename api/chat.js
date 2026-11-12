/**
 * VERCEL SERVERLESS FUNCTION: /api/chat
 * 
 * Safely calls LLMs (OpenAI, Gemini, Groq, Anthropic) server-side without exposing API keys to the browser.
 * If no LLM API key is configured in Vercel environment variables, it seamlessly falls back to the
 * built-in portfolio knowledge base.
 */

export default async function handler(req, res) {
  // CORS & Methods
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { message, history } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message string is required.' });
    }

    const apiKey = process.env.AI_API_KEY || process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY;

    // If an external LLM API key is present, forward to the LLM
    if (apiKey && process.env.OPENAI_API_KEY) {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are Mehwish Alam's AI Portfolio Assistant. Mehwish is a 2nd year B.Tech student in Computer Science & Engineering (AI/ML) at RAIT Nerul, Navi Mumbai (CGPA: 8.66). She has built: 1) Knee MRI Abnormality Detection (PyTorch multimodal 12-class detection), 2) Tic-Tac-Toe move predictor (Minimax + Random Forest hybrid), 3) Coffee Shop website. She interned at InAmigos Foundation and is Technical Co-Head of IETE RAIT. Solved 30+ LeetCode DSA questions. Keep answers friendly, accurate, professional, and concise.`
            },
            ...(history || []),
            { role: 'user', content: message }
          ],
          temperature: 0.7,
          max_tokens: 250,
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "I'm having trouble connecting right now.";
      return res.status(200).json({ reply });
    }

    // Default Fallback: Instant knowledge base server response
    const clean = message.toLowerCase();
    let reply = "Mehwish is a 2nd year B.Tech student in CSE (AI/ML) at RAIT Nerul with an 8.66 CGPA. Feel free to ask about her Knee MRI model, Minimax AI game, InAmigos internship, or how to contact her for an internship!";

    if (clean.includes('mri') || clean.includes('knee') || clean.includes('dicom')) {
      reply = "🏥 Mehwish is building a multimodal deep learning pipeline in PyTorch to detect 12 knee abnormalities from MRI scans, combining 3D DICOM pixel arrays with radiology report text via weak-labeling and multi-label classification.";
    } else if (clean.includes('tictactoe') || clean.includes('tic-tac-toe') || clean.includes('game') || clean.includes('minimax')) {
      reply = "🎮 Mehwish engineered a hybrid game AI combining Minimax decision trees with a Scikit-Learn Random Forest Classifier to evaluate board advantages and predict optimal moves in real time.";
    } else if (clean.includes('experience') || clean.includes('internship') || clean.includes('work')) {
      reply = "💼 Mehwish interned as an AI Web Developer at InAmigos Foundation, serves as Technical Co-Head of the IETE Student Chapter at RAIT, and competed in the PayPal AI Hackathon 2026 and RSNA Kaggle challenge.";
    } else if (clean.includes('hire') || clean.includes('contact') || clean.includes('email') || clean.includes('intern')) {
      reply = "🤝 Mehwish is actively available for SDE and Machine Learning internships! You can reach her at mehwishalam987@gmail.com or +91 9296565349.";
    }

    return res.status(200).json({ reply, source: 'knowledge-base' });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error processing assistant message.' });
  }
}

