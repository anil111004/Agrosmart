const express = require('express');

const router = express.Router();
const MAX_PROMPT_LENGTH = 2000;
const languageNames = {
  en: 'English',
  bn: 'Bengali',
  hi: 'Hindi',
  ta: 'Tamil',
  te: 'Telugu',
  mr: 'Marathi',
};

const generateContent = async (prompt) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    const error = new Error('AI assistance is not configured');
    error.status = 503;
    throw error;
  }

  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
      signal: AbortSignal.timeout(30000),
    }
  );

  if (!response.ok) {
    console.error(`Gemini API request failed with status ${response.status}`);
    const error = new Error('AI provider request failed');
    error.status = 502;
    throw error;
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts
    ?.map((part) => part.text || '')
    .join('')
    .trim();

  if (!text) {
    const error = new Error('AI provider returned no response');
    error.status = 502;
    throw error;
  }

  return text;
};

const requireSession = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: 'Please log in to use AI assistance' });
  }

  next();
};

router.post('/chat', requireSession, async (req, res) => {
  const { message, language } = req.body || {};
  if (
    typeof message !== 'string' ||
    !message.trim() ||
    message.length > MAX_PROMPT_LENGTH ||
    typeof language !== 'string' ||
    !Object.prototype.hasOwnProperty.call(languageNames, language)
  ) {
    return res.status(400).json({ msg: 'Invalid message or language' });
  }

  const prompt = `You are KrishiBot, a concise and helpful agriculture assistant. Answer only agriculture-related questions. Use simple, farmer-friendly language and respond in ${languageNames[language]}. If the question is unrelated to agriculture, politely say you can only help with agriculture.

User query: ${message.trim()}`;

  try {
    res.json({
      candidates: [{ content: { parts: [{ text: await generateContent(prompt) }] } }],
    });
  } catch (error) {
    console.error('AI chat request failed:', error.message);
    res.status(error.status || 502).json({ msg: error.message });
  }
});

router.post('/disease-advice', requireSession, async (req, res) => {
  const { disease } = req.body || {};
  if (
    typeof disease !== 'string' ||
    !disease.trim() ||
    disease.length > 200
  ) {
    return res.status(400).json({ msg: 'Invalid disease name' });
  }

  const prompt = `Provide a concise description (1-2 sentences) of the plant disease "${disease.trim()}" and suggest exactly 3 bullet point treatments. Use this format:
Description: [description]
Treatments:
- [treatment 1]
- [treatment 2]
- [treatment 3]`;

  try {
    res.json({
      candidates: [{ content: { parts: [{ text: await generateContent(prompt) }] } }],
    });
  } catch (error) {
    console.error('Disease advice request failed:', error.message);
    res.status(error.status || 502).json({ msg: error.message });
  }
});

module.exports = router;
